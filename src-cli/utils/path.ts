import { join } from "node:path"

/**
 * Resolves a file path that works both in dev and after build.
 * @param relativePath - The path relative to the current module.
 */
export function normalizePath(relativePath: string): string {
  const path = join(process.cwd(), relativePath)

  return path
}
