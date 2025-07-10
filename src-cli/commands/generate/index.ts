import type { CommandMapping } from "../../types/data"
import type { GenerateConfigConfig } from "./config"
import type { GenerateTemplatesConfig } from "./templates"
import { generateConfigMapping } from "./config"
import { generateTemplatesMapping } from "./templates"

export const generateMapping: CommandMapping = {
  name: "generate",
  description: "Generate various assets (e.g. config, templates, etc.).",
  subCommands: [
    generateConfigMapping,
    generateTemplatesMapping,
  ],
}

export interface GenerateConfig {
  generate?: GenerateConfigConfig
  templates?: GenerateTemplatesConfig
}
