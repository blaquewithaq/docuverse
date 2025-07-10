import { join } from "node:path"

export function normalizePath(relativePath: string): string {
  const path = join(process.cwd(), relativePath)

  return path
}
