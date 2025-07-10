import type { Command } from "commander"
import type { Config } from "../../config"
import type { Value } from "../../types/data"
import { readdir, readFile, stat } from "node:fs/promises"
import { extname, join, resolve } from "node:path"
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

async function validateFile(filePath: string, verbose: boolean): Promise<{
  valid: boolean
  error?: string
}> {
  try {
    const source = await readFile(filePath, "utf-8")
    const { valid, error } = await useValidator(source, filePath)

    if (!valid || error) {
      if (verbose) {
        let str = `Invalid: ${filePath}`

        if (error)
          str = `${str}:\n${useColor("muted", error)}`

        consola.error(str)
      }
      return { valid: false, error }
    }

    if (verbose) {
      consola.success(`Valid: ${filePath}`)
    }

    return { valid: true }
  }
  catch (error) {
    return { valid: false, error: error instanceof Error ? error.message : String(error) }
  }
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
  const _output = args[1] as string
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
    scanSpinner.succeed(`Found ${allFiles.length} json file(s).`)
  }

  const validateSpinner = consola.spinner().start("Validating files...")

  let validCount = 0
  let invalidCount = 0

  for (let i = 0; i < allFiles.length; i++) {
    const file = allFiles[i] as string
    const { valid } = await validateFile(file, verbose)

    if (valid)
      validCount++
    else invalidCount++
  }

  validateSpinner.succeed("Finished validation.")

  consola.log(useColor("primary", "\nValidation Summary:"))
  consola.log(useColor("success", `  Valid:`), useColor("white", validCount))
  consola.log(useColor("error", `  Invalid:`), useColor("white", invalidCount))
  consola.log(useColor("info", `  Total:`), useColor("white", allFiles.length))
}
