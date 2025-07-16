import type { TemplateCategory } from "../../templates"
import type { CommandMapping } from "../../types/data"
import { action } from "./action"

export * from "./action"

export const transmuteMapping: CommandMapping = {
  name: "transmute",
  description: "Transmute json files to templated markdown files.",
  args: [
    {
      name: "input",
      flags: "[input]",
      description: "Directories or files containing json to transmute.",
      defaultValue: undefined,
    },
    {
      name: "output",
      flags: "[output]",
      description: "Directory where the generated files will be placed.",
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
    {
      name: "templateDirectory",
      flags: "--template-directory <directory>",
      description: "Directory containing the templates to use. [index, directory, page]",
      defaultValue: "",
    },
    {
      name: "doxyfileTemplate",
      flags: "--doxyfile-template <file>",
      description: "Path to the template file for the Doxyfile.",
      defaultValue: "",
    },
    {
      name: "indexTemplate",
      flags: "--index-template <file>",
      description: "Path to the template file for the index page.",
      defaultValue: "",
    },

    {
      name: "directoryTemplate",
      flags: "--directory-template <file>",
      description: "Path to the template file for the directory page.",
      defaultValue: "",
    },

    {
      name: "pageTemplate",
      flags: "--page-template <file>",
      description: "Path to the template file for individual pages.",
      defaultValue: "",
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

export interface TransmuteOptions {
  preset?: TemplateCategory
  templateDirectory?: string
  doxyfileTemplate?: string
  indexTemplate?: string
  directoryTemplate?: string
  pageTemplate?: string
  verbose?: boolean
}

export interface TransmuteConfig {
  input?: string | string[]
  output?: string
  options?: TransmuteOptions
}
