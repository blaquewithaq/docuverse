import type { CommandMapping } from "../../types/data"
import { action } from "./action"
import templateDirectory from "./templates/directory.md"
import templateDoxyfile from "./templates/doxyfile.md"
import templateIndex from "./templates/index.md"
import templatePage from "./templates/page.md"

export * from "./action"

export const defaultTemplates = [
  {
    name: "doxyfile",
    content: templateDoxyfile,
  },
  {
    name: "index",
    content: templateIndex,
  },
  {
    name: "directory",
    content: templateDirectory,
  },
  {
    name: "page",
    content: templatePage,
  },
]

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
      name: "templateDirectory",
      flags: "--template-directory <directory>",
      description: "Directory containing the templates to use. [doxyfile, index, directory, page]",
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
