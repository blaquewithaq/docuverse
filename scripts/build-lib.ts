#!/usr/bin/env bun
import { mkdir, rm } from "node:fs/promises"
import pluginDTS from "bun-plugin-dts"
import chalk from "chalk"
import { program } from "commander"
import ora from "ora"

const DIST = "./dist"

program
  .description(chalk.cyan("Build the library"))
  .option("-r, --release", "Enable release mode (minified output)")
  .parse(process.argv)

const options = program.opts()
const isRelease = options.release ?? false

async function buildLibrary(): Promise<void> {
  const cleanSpinner = ora(chalk.yellow("Cleaning previous build...")).start()
  await rm(DIST, { recursive: true, force: true })
  await mkdir(DIST, { recursive: true })
  cleanSpinner.succeed(chalk.green("Clean complete"))

  const buildSpinner = ora(chalk.yellow(`Building library (${isRelease ? "release" : "debug"})...`)).start()

  try {
    const result = await Bun.build({
      entrypoints: ["./src/index.ts"],
      outdir: DIST,
      target: "bun",
      format: "esm",
      minify: isRelease,
      env: "disable",
      sourcemap: isRelease ? "none" : "external",
      naming: "[name].[ext]",
      root: ".",
      plugins: [pluginDTS()],
    })

    if (!result.success) {
      buildSpinner.fail(chalk.red("Library build failed"))
      for (const message of result.logs) {
        console.error(chalk.redBright(`> ${message.message}`))
      }
      process.exit(1)
    }

    buildSpinner.succeed(chalk.green("Library build completed"))
  }
  catch (error: any) {
    buildSpinner.fail(chalk.red("Library Build error"))
    console.error(chalk.red(error.message ?? error))
    process.exit(1)
  }
}

buildLibrary().catch((error) => {
  ora().fail(chalk.red("An unhandled error occurred during the build process"))
  console.error(chalk.redBright(error))
  process.exit(1)
})
