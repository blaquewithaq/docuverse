#!/usr/bin/env bun
import type { CompilationOptions, EntryPointConfig } from "dts-bundle-generator"
import type { InterfaceDeclaration, PropertySignatureStructure } from "ts-morph"
import { exec } from "node:child_process"
import { exists, mkdir, readFile, writeFile } from "node:fs/promises"
import { promisify } from "node:util"
import chalk from "chalk"
import { program } from "commander"
import {
  generateDtsBundle,
} from "dts-bundle-generator"
import ora from "ora"
import { Project, SyntaxKind } from "ts-morph"

const execPromise = promisify(exec)

const SCHEMA = "./schema"

const DATA = [
  {
    name: "xml",
    description: "XML parser",
    typescript: {
      input: "./src/parser/xml/types/index.ts",
      outputDir: SCHEMA,
    },
    schema: {
      input: `${SCHEMA}/xml.d.ts`,
      outputDir: SCHEMA,
    },
  },
]
type DataEntry = typeof DATA[number]

program
  .description(chalk.cyan("Generate a Zod schema library from TypeScript definitions"))
  .parse(process.argv)

async function buildTypescript(data: DataEntry): Promise<{ typescript?: string, error?: string }> {
  const entries: EntryPointConfig[] = [{
    filePath: data.typescript.input,
    output: {
      noBanner: true,
    },
  }]

  try {
    const result = generateDtsBundle(entries, {
      ...{} satisfies CompilationOptions,
      preferredConfigPath: "tsconfig.json",
    })

    if (!result) {
      return { typescript: undefined, error: "No TypeScript definitions generated." }
    }

    return { typescript: result[0] }
  }
  catch (error: any) {
    return { typescript: undefined, error: error?.message || String(error) }
  }
}

async function flattenTypescript(typescript: string): Promise<{ typescript: string, error?: string }> {
  try {
    const project = new Project({
      useInMemoryFileSystem: true,
    })

    const sourceFile = project.createSourceFile("temp.ts", typescript, { overwrite: true })

    function getAllProperties(
      iface: InterfaceDeclaration,
      visited = new Set<string>(),
    ): PropertySignatureStructure[] {
      if (visited.has(iface.getName()))
        return []
      visited.add(iface.getName())

      const props = iface.getProperties().map(p => p.getStructure())

      const extendedProps = iface.getExtends()
        .map((ext) => {
          const symbol = ext.getExpression().getType().getSymbol()
          if (!symbol)
            return []
          const decl = symbol.getDeclarations().find(d =>
            d.getKind() === SyntaxKind.InterfaceDeclaration,
          ) as InterfaceDeclaration | undefined
          if (!decl)
            return []
          return getAllProperties(decl, visited)
        })
        .flat() as PropertySignatureStructure[]

      return [...extendedProps, ...props]
    }

    const interfaces = sourceFile.getInterfaces()
    for (const iface of interfaces) {
      if (iface.getExtends().length === 0)
        continue

      const allProps = getAllProperties(iface)
      iface.removeExtends(0)
      iface.getProperties().forEach(p => p.remove())
      iface.addProperties(allProps)
    }

    return { typescript: sourceFile.getFullText() }
  }
  catch (error: any) {
    return { typescript: "", error: error?.message || String(error) }
  }
}

async function generateSchema(
  typescriptFilePath: string,
  output: string,
): Promise<{ success: boolean, error?: string }> {
  try {
    const cmd = `bunx ts-to-zod ${typescriptFilePath} ${output} `
    await execPromise(cmd)

    if (!(await exists(output))) {
      return {
        success: false,
        error: `Output file ${output} was not created.`,
      }
    }

    return { success: true }
  }
  catch (error: any) {
    return {
      success: false,
      error: error?.message || String(error),
    }
  }
}

export function addRefineToZodSchema(source: string): string {
  const lazyBlockRegex = /z\.lazy\(\s*\(\s*\)\s*=>\s*z\.object\s*\(\s*(\{[\s\S]*?\})\s*\)(?!\s*\.refine)/g

  return source.replace(lazyBlockRegex, (match, objectLiteral) => {
    const propRegex = /^\s*(\w+)\s*:/gm
    const keys = [...objectLiteral.matchAll(propRegex)].map(m => m[1])

    if (keys.length === 0)
      return match

    const condition = keys.map(k => `obj.${k}`).join(" || ")
    const refine = `.refine(obj => ${condition}, {
  message: "At least one of ${keys.map(k => `'${k}'`).join(", ")} must be defined",
})`

    return `z.lazy(() => z.object(${objectLiteral})${refine}`
  })
}

async function main(): Promise<void> {
  const mainSpinner = ora(chalk.cyan("Starting schema generation process...")).start()

  try {
    await mkdir(SCHEMA, { recursive: true })

    for (const data of DATA) {
      const processSpinner = ora(chalk.blue(`Processing ${data.description}...`)).start()

      try {
        const buildSpinner = ora(chalk.yellow(`Building TypeScript definitions for ${data.description}...`)).start()
        const { typescript, error: buildError } = await buildTypescript(data)

        if (!typescript || buildError) {
          buildSpinner.fail(chalk.red(`Failed to build TypeScript definitions for ${data.description}`))
          throw new Error(buildError || "Unknown build error")
        }
        buildSpinner.succeed(chalk.green(`TypeScript definitions built for ${data.description}`))

        const flattenSpinner = ora(chalk.yellow(`Flattening TypeScript interfaces for ${data.description}...`)).start()
        const { typescript: flattenedTypescript, error: flattenError } = await flattenTypescript(typescript)

        if (flattenError) {
          flattenSpinner.fail(chalk.red(`Failed to flatten TypeScript interfaces for ${data.description}`))
          throw new Error(flattenError)
        }
        flattenSpinner.succeed(chalk.green(`TypeScript interfaces flattened for ${data.description}`))

        const writeSpinner = ora(chalk.yellow(`Writing TypeScript definitions to file for ${data.description}...`)).start()
        const tsFilePath = `${data.typescript.outputDir}/${data.name}.d.ts`
        await writeFile(tsFilePath, flattenedTypescript)
        writeSpinner.succeed(chalk.green(`TypeScript definitions written to ${tsFilePath}`))

        const schemaSpinner = ora(chalk.yellow(`Generating Zod schema for ${data.description}...`)).start()
        const schemaFilePath = `${data.schema.outputDir}/${data.name}.schema.ts`
        const { success: schemaSuccess, error: schemaError } = await generateSchema(tsFilePath, schemaFilePath)

        if (!schemaSuccess || schemaError) {
          schemaSpinner.fail(chalk.red(`Failed to generate Zod schema for ${data.description}`))
          throw new Error(schemaError || "Unknown schema generation error")
        }
        schemaSpinner.succeed(chalk.green(`Zod schema generated for ${data.description}`))

        const refineSpinner = ora(chalk.yellow(`Adding refine to Zod schema for ${data.description}...`)).start()
        const schemaContent = await readFile(schemaFilePath, "utf-8")
        const modifiedSchema = addRefineToZodSchema(schemaContent)
        const banner = `/* eslint-disable ts/no-use-before-define */`
        await writeFile(schemaFilePath, `${banner}\n${modifiedSchema}`)
        refineSpinner.succeed(chalk.green(`Refine added to Zod schema for ${data.description}`))

        processSpinner.succeed(chalk.green(`${data.description} processed successfully`))
      }
      catch (error: any) {
        processSpinner.fail(chalk.red(`Failed to process ${data.description}`))
        throw error
      }
    }

    mainSpinner.succeed(chalk.green("Schema generation completed successfully"))
  }
  catch (error: any) {
    mainSpinner.fail(chalk.red("Schema generation failed"))
    console.error(chalk.redBright(error.message || error))
    process.exit(1)
  }
}

main().catch((error) => {
  ora().fail(chalk.red("An unhandled error occurred during the build process"))
  console.error(chalk.redBright(error))
  process.exit(1)
})
