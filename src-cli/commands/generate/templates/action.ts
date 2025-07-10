import type { Command } from "commander"
import type { Config } from "../../../config"
import type { TemplateCategory } from "../../../templates"
import { mkdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { generateTemplatesMapping } from "."
import { consola, promptWithEnquirer } from "../../../consola"
import { getTemplates } from "../../../templates"

export async function action(instance: Command, _config: Config): Promise<void> {
  const { args, options } = await promptWithEnquirer(
    generateTemplatesMapping.args,
    generateTemplatesMapping.options,
    instance.args,
    instance.opts(),
    [],
    {},
  )

  const output = args[0] as string
  const verbose = options.verbose === true

  const templates = await getTemplates(options.preset as TemplateCategory)

  const spinner = consola.spinner().start("Generating templates...")

  for (const template of templates) {
    const { name, ext, content } = template
    const fileName = `${name}${ext}`
    const filePath = join(output, fileName)

    try {
      await mkdir(output, { recursive: true })
      await writeFile(filePath, content)
      if (verbose) {
        consola.success(`Generated template: ${name}`)
      }
    }
    catch (error) {
      consola.error(`Failed to generate template ${name}:`, error)
    }
  }

  spinner.success("Templates generated successfully.")
}
