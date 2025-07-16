import type { Command } from "commander"
import type { Config } from "../../config"
import type { Value } from "../../types/data"
import type { ValidationError } from "~/src"
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises"
import { basename, extname, join, resolve } from "node:path"
import { useValidator } from "~/src"
import { validateMapping } from "."
import { consola, promptWithEnquirer, useColor } from "../../consola"
import { handleMultipleInputs } from "../../utils/input"

async function collectJsonFiles(dir: string): Promise<string[]> {
  const files: string[] = []
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      const nested = await collectJsonFiles(fullPath)
      files.push(...nested)
    }
    else if (entry.isFile() && extname(entry.name) === ".json") {
      files.push(fullPath)
    }
  }

  return files
}

export async function action(instance: Command, config: Config): Promise<void> {
  const _config = config.validate ?? {}
  const configInput = Array.isArray(_config.input)
    ? _config.input.join(",")
    : _config.input
  const configOutput = _config.output
  const configArgs = configInput ? [configInput, configOutput].filter((v): v is string => v !== undefined) : []
  const configOptions = _config.options as Record<string, Value> ?? {}

  const { args, options } = await promptWithEnquirer(
    validateMapping.args,
    validateMapping.options,
    instance.args,
    instance.opts(),
    configArgs,
    configOptions,
  )

  const input = handleMultipleInputs(args[0])
  const output = args[1] as string
  const verbose = options.verbose === true

  const scanSpinner = consola.spinner().start("Scanning for json files...")

  const allFiles: string[] = []

  for (const raw of input) {
    const resolved = resolve(raw)
    try {
      const stats = await stat(resolved)

      if (stats.isDirectory()) {
        const files = await collectJsonFiles(resolved)
        allFiles.push(...files)
      }
      else if (stats.isFile() && extname(resolved) === ".json") {
        allFiles.push(resolved)
      }
      else if (verbose) {
        consola.warn(`Skipping unsupported input: ${resolved}`)
      }
    }
    catch (error) {
      consola.error(`Error accessing ${resolved}:`, error)
    }
  }

  if (verbose) {
    for (let i = 0; i < allFiles.length; i++) {
      const file = allFiles[i]
      let str = `Found file: ${useColor("white", file)}`

      if (i === 0) {
        str = `\n\n${str}`
      }

      if (i === allFiles.length - 1) {
        str = `${str}\n`
      }

      consola.debug(str)
    }
  }

  if (allFiles.length === 0) {
    scanSpinner.fail("No json files found.\n")
  }
  else {
    scanSpinner.success(`Found ${allFiles.length} json file(s).`)
  }

  const validateSpinner = consola.spinner().start("Validating files...")

  const allResults: {
    file: string
    result: "valid" | "invalid"
    errors?: ValidationError[]
  }[] = []

  for (const file of allFiles) {
    const source = await readFile(file, "utf-8")
    const { valid, errors } = await useValidator(source, file)

    allResults.push({
      file,
      result: valid ? "valid" : "invalid",
      errors,
    })
  }

  if (verbose) {
    for (let i = 0; i < allResults.length; i++) {
      const file = allResults[i]?.file
      const result = allResults[i]?.result
      const errors = allResults[i]?.errors?.map((issue) => {
        return `- ${issue.message}\n  - File: ${issue.file}\n  - TypePath: ${issue.typePath}`
      })

      let str

      if (result === "invalid") {
        str = `Invalid: ${useColor("white", file)}`
      }
      else {
        str = `Valid: ${useColor("white", file)}`
      }

      if (errors) {
        str = `${str}\n${useColor("muted", errors.join("\n"))}`
      }

      if (i === 0) {
        consola.log("\n")
        str = `${str}`
      }

      if (i === allResults.length - 1) {
        str = `${str}\n`
      }

      if (result === "invalid") {
        consola.error(str)
      }
      else {
        consola.success(str)
      }
    }
  }

  validateSpinner.success("Finished validation.")

  const writeSpinner = consola.spinner().start("Writing validation results...")

  const allWrites: {
    file: string
    error?: string
  }[] = []

  for (const result of allResults) {
    if (result.result === "valid") {
      continue
    }

    const file = result.file
    const fileName = basename(file)
    const outputFile = join(output, `${fileName.replace(/\.json$/, "")}-validation.json`)

    try {
      await mkdir(output, { recursive: true })
      await writeFile(outputFile, JSON.stringify(result.errors, null, 2), "utf-8")
      allWrites.push({ file: outputFile })
    }
    catch (error) {
      allWrites.push({
        file: outputFile,
        error: `Failed to write validation result for "${file}": ${error instanceof Error ? error.message : String(error)}`,
      })
    }
  }

  if (verbose) {
    for (let i = 0; i < allWrites.length; i++) {
      const file = allWrites[i]?.file
      const error = allWrites[i]?.error

      let str = `Wrote validation result: ${useColor("white", file)}`

      if (error) {
        str = `${str}\n${useColor("muted", error)}`
      }

      if (i === 0) {
        str = `\n\n${str}`
      }

      if (i === allWrites.length - 1 || allWrites.length === 1) {
        str = `${str}\n`
      }

      consola.debug(str)
    }
  }

  writeSpinner.success(
    allWrites.length > 0
      ? "Finished writing validation results."
      : "No validation results to write.",
  )

  const validCount = allResults.filter(r => r.result === "valid").length
  const invalidCount = allResults.filter(r => r.result === "invalid").length
  consola.log(useColor("primary", "\nValidation Summary:"))
  consola.log(useColor("success", `  Valid:`), useColor("white", validCount))
  consola.log(useColor("error", `  Invalid:`), useColor("white", invalidCount))
  consola.log(useColor("info", `  Total:`), useColor("white", allFiles.length))
}
