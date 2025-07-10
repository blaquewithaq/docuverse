import type { CommandMapping } from "../../types/data"
import { action } from "./action"

export * from "./action"

export const validateMapping: CommandMapping = {
  name: "validate",
  description: "Validate json files against schema.",
  args: [
    {
      name: "input",
      flags: "[input]",
      description: "Directories or files containing json to validate.",
      defaultValue: undefined,
    },
    {
      name: "output",
      flags: "[output]",
      description: "Directory where the generated reports will be placed.",
      defaultValue: undefined,
    },
  ],
  options: [
    {
      name: "verbose",
      flags: "--verbose",
      description: "Enable verbose output.",
      defaultValue: false,
    },
  ],
  action,
}

export interface ValidateOptions {
  verbose?: boolean
}

export interface ValidateConfig {
  input?: string | string[]
  output?: string
  options?: ValidateOptions
}
