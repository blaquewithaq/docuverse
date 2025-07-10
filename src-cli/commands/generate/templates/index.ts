import type { TemplateCategory } from "../../../templates"
import type { CommandMapping } from "../../../types/data"
import { action } from "./action"

export * from "./action"

export const generateTemplatesMapping: CommandMapping = {
  name: "templates",
  description: "Generate various templates.",
  args: [
    {
      name: "output",
      flags: "<output>",
      description: "Directory to write the templates to.",
      defaultValue: undefined,
    },
  ],
  options: [
    {
      name: "preset",
      flags: "--preset <name>",
      description: "Use a preset template configuration.",
      defaultValue: "basic",
      choices: ["basic"] satisfies TemplateCategory[],
    },
  ],
  action,
}

export interface GenerateTemplatesOptions {
  preset?: TemplateCategory
}

export interface GenerateTemplatesConfig {
  output?: string
  options?: GenerateTemplatesOptions
}
