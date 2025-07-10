import type { CommandMapping } from "../../../types/data"
import { action } from "./action"

export * from "./action"

export const generateConfigMapping: CommandMapping = {
  name: "config",
  description: "Generate a configuration file.",
  args: [
    {
      name: "output",
      flags: "<output>",
      description: "Directory to write the configuration file to.",
      defaultValue: undefined,
    },
  ],
  options: [
    {
      name: "format",
      flags: "--format <format>",
      description: "Output format for the configuration file.",
      defaultValue: "js",
      choices: ["js", "json", "yaml"],
    },
  ],
  action,
}

export interface GenerateConfigOptions {
  format?: "js" | "json" | "yaml"
}

export interface GenerateConfigConfig {
  output?: string
  options?: GenerateConfigOptions
}
