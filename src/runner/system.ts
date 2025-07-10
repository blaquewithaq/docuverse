import { existsSync } from "node:fs"
import { platform } from "node:os"
import { isAbsolute, join } from "node:path"

/**
 * Checks if a command-line tool is installed on the system.
 * @param name The name of the command-line tool to check.
 * @param options Optional parameters to customize the check.
 * @param options.checkBinaryPath Whether to check for the binary path explicitly.
 * @param options.binaryPath The explicit binary path to check.
 * @param options.checkLocal Whether to check for the tool in a local directory.
 * @param options.localDir The local directory to check for the tool.
 * @returns An object indicating whether the tool is installed, and its path if found.
 */
export function isInstalled(name: string, options?: {
  checkBinaryPath?: boolean
  binaryPath?: string
  checkLocal?: boolean
  localDir?: string
}): {
  success: boolean
  path?: string
  error?: string
} {
  const isWindows = platform() === "win32"

  if (
    options?.checkBinaryPath
    && options?.binaryPath
    && isAbsolute(options?.binaryPath)
    && existsSync(options?.binaryPath)
  ) {
    return { success: true, path: options?.binaryPath }
  }

  const shell = process.env.SHELL || process.env.ComSpec || ""
  let cmd: string[]

  if (isWindows) {
    const isPowerShell = shell.toLowerCase().includes("powershell") || !!process.env.PSModulePath
    cmd = isPowerShell
      ? ["powershell", "-Command", `Get-Command ${name} | Select-Object -ExpandProperty Path`]
      : ["where", name]
  }
  else {
    cmd = ["which", name]
  }

  try {
    const proc = Bun.spawnSync({
      cmd,
      stdout: "pipe",
      stderr: "pipe",
    })

    if (proc.success && proc.stdout.length > 0) {
      const path = proc.stdout.toString().trim()
      return { success: true, path }
    }
  }
  catch {}

  if (options?.checkLocal && options.localDir) {
    const extensions = isWindows ? [".exe", ".bat", ".cmd", ""] : [""]
    for (const ext of extensions) {
      const localPath = join(options.localDir, name + ext)
      if (existsSync(localPath)) {
        return { success: true, path: localPath }
      }
    }
  }

  return { success: false, error: `"${name}" not found in PATH or localDir.` }
}
