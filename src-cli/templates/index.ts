import { readFile } from "node:fs/promises"
import basicDirectory from "./basic/directory.md"
import basicDoxyfile from "./basic/doxyfile.md"
import basicIndex from "./basic/index.md"
import basicPage from "./basic/page.md"

export type TemplateCategory = "basic"
export type TemplateName = "doxyfile" | "index" | "directory" | "page"

export interface Templates {
  doxyfile: string
  index: string
  directory: string
  page: string
}

export async function getTemplates(category: TemplateCategory): Promise<Templates> {
  switch (category) {
    case "basic":
      return {
        doxyfile: await readFile(basicDoxyfile, "utf-8"),
        index: await readFile(basicIndex, "utf-8"),
        directory: await readFile(basicDirectory, "utf-8"),
        page: await readFile(basicPage, "utf-8"),
      }
    default:
      throw new Error(`Unknown template category: ${category}`)
  }
}
