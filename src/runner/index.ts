import type { Downloader } from "./downloader"
import type { DoxygenOptions } from "./doxygen"
import { useDownloader } from "./downloader"
import { createDoxygenConfig, writeDoxygenConfig } from "./doxygen"
import { isInstalled } from "./system"

export * from "./downloader"
export * from "./doxygen"
export * from "./system"

/**
 * Represents a command runner configuration.
 */
interface BaseRunner {
  /**
   * The name of the runner.
   */
  name: string
  /**
   * A brief description of the runner.
   */
  description?: string
  /**
   * The path to the binary executable for the runner.
   * If not provided, it will be determined based on the runner name.
   */
  binaryPath?: string
  /**
   * The path to the configuration file for the runner.
   * This is typically used for runners that require a configuration file, such as Doxygen.
   */
  configPath?: string
  /**
   * Arguments to pass to the runner command.
   * This can be a function that receives the runner instance and returns an array of arguments.
   */
  args?: (r: Runner) => string[]
  /**
   * An optional downloader configuration for the runner.
   * This is used to download the runner if it is not installed.
   */
  downloader?: Downloader
  /**
   * Whether to run the command silently, without outputting to the console.
   * Defaults to false, meaning output will be shown.
   */
  silent?: boolean
}

/**
 * Represents a command runner that can be used to execute commands.
 * It can be either a Doxygen runner or a generic runner with custom options.
 */
export type Runner
  = | (BaseRunner & {
    /**
     * The name of the runner, specifically for Doxygen.
     */
    name: "doxygen"
    /**
     * Additional options for the Doxygen runner.
     * This includes options specific to Doxygen configuration.
     */
    options?: DoxygenOptions
  })
  | (BaseRunner & {
    /**
     * The name of the runner.
     * This allows for generic runners that do not require specific options.
     */
    name: Exclude<string, "doxygen">
    /**
     * Additional options for the runner.
     * This can include any custom options needed for the runner.
     */
    options?: Record<string, unknown>
  })

/**
 * Runs a command using the specified runner.
 * @param runner The runner to use.
 * @returns A promise that resolves to an object containing the success status, output, and error message if any.
 */
export async function useRunner(runner: Runner): Promise<{ success: boolean, output?: string, error?: string }> {
  const installed = isInstalled(runner.name, {
    checkBinaryPath: true,
    binaryPath: runner.binaryPath,
    checkLocal: !!runner.downloader?.options?.outputDir,
    localDir: runner.downloader?.options?.outputDir,
  })

  if (!installed.success) {
    if (runner.downloader) {
      const download = await useDownloader(runner.downloader)

      if (!download.success) {
        return { success: false, error: download.error }
      }

      if (download.extracted) {
        runner.binaryPath = download.path
      }
      else {
        runner.binaryPath = download.path || runner.binaryPath
      }

      const recheck = isInstalled(runner.name, {
        checkBinaryPath: true,
        binaryPath: runner.binaryPath,
        checkLocal: !!runner.downloader?.options?.outputDir,
        localDir: runner.downloader?.options?.outputDir,
      })

      if (!recheck.success) {
        return { success: false, error: `Runner ${runner.name} is not installed after download.` }
      }
    }
    else {
      return { success: false, error: `Runner ${runner.name} is not installed.` }
    }
  }

  if (runner.name === "doxygen") {
    const configFilePath = runner.configPath || "Doxyfile"
    const config = createDoxygenConfig(runner.options)

    const write = await writeDoxygenConfig(config, configFilePath)

    if (!write.success) {
      return { success: false, error: `Failed to write Doxygen config file: ${write.error}` }
    }
  }

  const cmd = [runner.binaryPath || runner.name, ...runner.args?.(runner) || []]

  try {
    const proc = Bun.spawn({
      cmd,
      stdout: "pipe",
      stderr: "pipe",
    })
    const output = await new Response(proc.stdout).text() || await new Response(proc.stderr).text()

    if (!runner.silent && output.length > 0) {
      return { success: true, output }
    }
    return { success: true }
  }
  catch (error) {
    return { success: false, error: `Failed to run command "${cmd.join(" ")}": ${String(error)}` }
  }
}
