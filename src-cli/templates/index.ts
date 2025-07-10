import { readFile } from "node:fs/promises"
import basicDirectory from "./basic/directory.md"
import basicDoxyfile from "./basic/doxyfile.md"
import basicIndex from "./basic/index.md"
import basicPage from "./basic/page.md"

export type TemplateCategory = "basic"
export type TemplateName = "doxyfile" | "index" | "directory" | "page"

export interface Template {
  name: TemplateName
  ext: string
  content: string
}

export async function getTemplates(category: TemplateCategory): Promise<Template[]> {
  switch (category) {
    case "basic":
      return [
        {
          name: "doxyfile",
          ext: ".md",
          content: await readFile(basicDoxyfile, "utf-8"),
        },
        {
          name: "index",
          ext: ".md",
          content: await readFile(basicIndex, "utf-8"),
        },
        {
          name: "directory",
          ext: ".md",
          content: await readFile(basicDirectory, "utf-8"),
        },
        {
          name: "page",
          ext: ".md",
          content: await readFile(basicPage, "utf-8"),
        },
      ]
    default:
      throw new Error(`Unknown template category: ${category}`)
  }
}

export async function getTemplate(
  category: TemplateCategory,
  name: TemplateName,
): Promise<Template | undefined> {
  const templates = await getTemplates(category)
  return templates.find(t => t.name === name)
}
