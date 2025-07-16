import type { Command } from "commander"
import type { Config } from "../../config"
import type { Value } from "../../types/data"
import type { Doxygen } from "~/src"
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises"
import { basename, dirname, extname, join } from "node:path"
import { DoxygenParser } from "~/src"
import { parseMapping } from "."
import { consola, promptWithEnquirer, useColor } from "../../consola"
import { handleMultipleInputs } from "../../utils/input"

function cleanFileName(fileName: string, extension: string): string {
  const baseName = basename(fileName, extname(fileName))
  // console.log(`Base name: ${baseName}`)
  // const cleanName = baseName.replace(/_8/g, "_")
  // console.log(`Clean name: ${cleanName}`)
  return `${baseName}.${extension}`
}

export async function action(instance: Command, config: Config): Promise<void> {
  const _config = config.parse ?? {}
  const configInput = Array.isArray(_config.input)
    ? _config.input.join(",")
    : _config.input
  const configOutput = _config.output
  const configArgs = configInput ? [configInput, configOutput].filter((v): v is string => v !== undefined) : []
  const configOptions = _config.options as Record<string, Value> ?? {}

  const { args, options } = await promptWithEnquirer(
    parseMapping.args,
    parseMapping.options,
    instance.args,
    instance.opts(),
    configArgs,
    configOptions,
  )

  const input = handleMultipleInputs(args[0])
  const output = args[1] as string
  const verbose = options.verbose === true

  const parser = new DoxygenParser(options)
  const allFiles: string[] = []

  const scanSpinner = consola.spinner().start("Scanning inputs for xml files...")

  for (const entry of input) {
    try {
      const fileStat = await stat(entry)

      if (fileStat.isDirectory()) {
        const files = await readdir(entry)

        for (const file of files) {
          const filePath = join(entry, file)
          const fileStat = await stat(filePath)
          if (fileStat.isFile() && extname(file) === ".xml" && !file.toLowerCase().includes("doxyfile")) {
            allFiles.push(filePath)
          }
        }
      }
      else if (fileStat.isFile() && extname(entry) === ".xml") {
        allFiles.push(entry)
      }
      else if (verbose) {
        consola.warn(`Skipping unsupported path: ${entry}`)
      }
    }
    catch (error) {
      consola.error(`Error processing input "${entry}":`, error)
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
    scanSpinner.fail("No xml files found.\n")
    return
  }
  else {
    scanSpinner.success(`Found ${allFiles.length} xml file(s).`)
  }

  const parseSpinner = consola.spinner().start("Parsing xml files...")

  const allResults: {
    file: string
    result: Doxygen | undefined
    error?: string
  }[] = []

  for (const file of allFiles) {
    try {
      const xml = await readFile(file, "utf-8")
      const { data, error } = parser.add(xml)

      if (error) {
        throw new Error(error)
      }

      allResults.push({ file, result: data })
    }
    catch (error) {
      allResults.push({
        file,
        result: undefined,
        error: `Failed to parse file "${file}": ${error instanceof Error ? error.message : String(error)}`,
      })
    }
  }

  if (verbose) {
    for (let i = 0; i < allResults.length; i++) {
      const file = allResults[i]?.file
      const error = allResults[i]?.error

      let str = ""

      if (error) {
        str = error
      }
      else {
        str = `Parsed file: ${useColor("white", file)}`
      }

      if (i === 0) {
        str = `\n\n${str}`
      }

      if (i === allFiles.length - 1) {
        str = `${str}\n`
      }

      if (error) {
        consola.error(str)
      }
      else {
        consola.debug(str)
      }
    }
  }

  parseSpinner.success("Finished parsing all xml files.")

  const writeSpinner = consola.spinner().start("Writing parsed data to output file...")

  const allWrites: {
    file: string
    result: string
    error?: string
  }[] = []

  if (options.singleFile) {
    const outputFile = join(output, "all-parsed-data.json")

    const combinedResults = allResults.reduce((acc, curr) => {
      if (curr.result) {
        const baseName = basename(curr.file, extname(curr.file))
        acc[baseName] = curr.result
      }
      return acc
    }, {} as Record<string, Doxygen>)

    allWrites.push({ file: outputFile, result: JSON.stringify(combinedResults, null, 2) })
  }
  else {
    for (const file of allResults) {
      const fileName = cleanFileName(file.file, "json")
      const outputFile = join(output, fileName)
      allWrites.push({ file: outputFile, result: JSON.stringify(file.result, null, 2) })
    }
  }

  for (const write of allWrites) {
    try {
      await mkdir(dirname(write.file), { recursive: true })
      await writeFile(write.file, write?.result, "utf-8")
    }
    catch (error) {
      write.error = `Failed to write file "${write.file}": ${error instanceof Error ? error.message : String(error)}`
    }
  }

  if (verbose) {
    for (let i = 0; i < allWrites.length; i++) {
      const file = allWrites[i]?.file
      const error = allWrites[i]?.error

      let str = ""

      if (error) {
        str = error
      }
      else {
        str = `Wrote file: ${useColor("white", file)}`
      }

      if (i === 0) {
        str = `\n\n${str}`
      }

      if (i === allWrites.length - 1 || allWrites.length === 1) {
        str = `${str}\n`
      }

      if (error) {
        consola.error(str)
      }
      else {
        consola.debug(str)
      }
    }
  }

  writeSpinner.success("Finished writing parsed data to output files.")
}
