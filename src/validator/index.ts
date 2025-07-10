import { parse } from "json-source-map"
import { xMLDocumentSchema } from "~/schema"

function toJsonPointer(path: (string | number)[]): string {
  return (
    `/${
      path
        .map(p =>
          typeof p === "number"
            ? p
            : p.replace(/~/g, "~0").replace(/\//g, "~1"),
        )
        .join("/")}`
  )
}

/**
 * Validates if a JSON string is valid against schema.
 * @param json The string to validate.
 * @param filePath Optional file path for error reporting.
 * @returns An object indicating whether the JSON is valid and an error message if it is not.
 */
export async function useValidator(json: string, filePath?: string): Promise<{
  valid: boolean
  error?: string
}> {
  try {
    const { data: parsed, pointers } = parse(json)
    const result = xMLDocumentSchema.safeParse(parsed)

    if (!result.success) {
      const messages = result.error.errors.map((err) => {
        const pointer = toJsonPointer(err.path)
        const loc = pointers[pointer]?.value

        const line = loc?.line ?? 0
        const col = loc?.column ?? 0

        const pathStr = err.path
          .map(p => (typeof p === "number" ? `[${p}]` : `.${p}`))
          .join("")

        const location
          = filePath != null
            ? `${filePath}:${line + 1}:${col + 1}`
            : `line ${line + 1}, col ${col + 1}`

        return `- ${err.message}\n  - File: ${location}\n  - TypePath: document${pathStr}`
      })

      return {
        valid: false,
        error: messages.join("\n"),
      }
    }

    return { valid: true }
  }
  catch (error: any) {
    return { valid: false, error: error?.message || String(error) }
  }
}
