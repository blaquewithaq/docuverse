import type { Command } from "commander"
import type { Config, ConfigFormat } from "../../../config"
import { mkdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { name } from "~/package.json"
import { generateConfigMapping } from "."
import { generateConfig } from "../../../config"
import { consola, promptWithEnquirer } from "../../../consola"

export async function action(instance: Command, _config: Config): Promise<void> {
  const { args, options } = await promptWithEnquirer(
    generateConfigMapping.args,
    generateConfigMapping.options,
    instance.args,
    instance.opts(),
    [],
    {},
  )

  const output = args[0] as string

  const spinner = consola.spinner().start(
    `Generating configuration file in ${options.format} format...`,
  )

  const { success, content, error } = await generateConfig(options.format as ConfigFormat)

  if (!success) {
    spinner.fail(`Failed to generate configuration file: ${error}`)
    consola.error(error)
    return
  }

  try {
    await mkdir(output, { recursive: true })
    const filePath = join(output, `${name}.config.${options.format}`)
    await writeFile(filePath, content)

    spinner.success(`Configuration file generated at ${filePath}`)
  }
  catch (error) {
    spinner.fail(`Failed to generate configuration file: ${error}`)
    consola.error(error)
  }
}
