import type { CommandMapping } from "../../types/data"
import { action } from "./action"

export * from "./action"

export const parseMapping: CommandMapping = {
  name: "parse",
  description: "Parse xml files into json files.",
  args: [
    {
      name: "input",
      flags: "[input]",
      description: "Directories or files containing the xml to parse.",
      defaultValue: undefined,
    },
    {
      name: "output",
      flags: "[output]",
      description: "Directory where the parsed json files will be saved.",
      defaultValue: undefined,
    },
  ],
  options: [
    {
      name: "singleFile",
      flags: "--single-file",
      description: "Merge multiple xml files into a single json file.",
      defaultValue: false,
    },
    {
      name: "verbose",
      flags: "--verbose",
      description: "Enable verbose output.",
      defaultValue: false,
    },
  ],
  action,
}

export interface ParseOptions {
  singleFile?: boolean
  verbose?: boolean
}

export interface ParseConfig {
  input?: string | string[]
  output?: string
  options?: ParseOptions
}
