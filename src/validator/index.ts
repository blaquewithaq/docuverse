import { parse } from "json-source-map"
import { doxygenSchema } from "~/schema"

/**
 * Represents a validation error in the validation process.
 */
export interface ValidationError {
  /**
   * The error message.
   */
  message: string
  /**
   * The file path where the error occurred.
   */
  file: string
  /**
   * The path to the type in the document where the error occurred.
   */
  typePath: string
}

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
 * @returns An object indicating whether the JSON is valid and an array of error messages if it is not.
 */
export async function useValidator(json: string, filePath?: string): Promise<{
  valid: boolean
  errors?: ValidationError[]
}> {
  try {
    const { data: parsed, pointers } = parse(json)
    const result = doxygenSchema.safeParse(parsed)

    if (!result.success) {
      const messages = result.error.errors.map((issue) => {
        const pointer = toJsonPointer(issue.path)
        const loc = pointers[pointer]?.value

        const line = loc?.line ?? 0
        const col = loc?.column ?? 0

        const pathStr = issue.path
          .map(p => (typeof p === "number" ? `[${p}]` : `.${p}`))
          .join("")

        const location
          = filePath != null
            ? `${filePath}:${line + 1}:${col + 1}`
            : `line ${line + 1}, col ${col + 1}`

        return {
          message: issue.message,
          file: location,
          typePath: `document${pathStr}`,
        }
      })

      return {
        valid: false,
        errors: messages,
      }
    }

    return { valid: true }
  }
  catch (error: any) {
    return { valid: false, errors: [error?.message || String(error)] }
  }
}
