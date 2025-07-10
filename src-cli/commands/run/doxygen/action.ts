import type { Command } from "commander"
import type { Config } from "../../../config"
import type { Value } from "../../../types/data"
import type { Runner } from "~/src"
import { useRunner } from "~/src"
import { runDoxygenMapping, runnerProfile } from "."
import { consola, promptWithEnquirer, useColor } from "../../../consola"
import { handleMultipleInputs } from "../../../utils/input"

export async function action(instance: Command, config: Config): Promise<void> {
  const _config = config.run?.doxygen ?? {}
  const configInput = Array.isArray(_config.input)
    ? _config.input.join(",")
    : _config.input
  const configOutput = _config.output
  const configArgs = configInput ? [configInput, configOutput].filter((v): v is string => v !== undefined) : []
  const configOptions = _config.options as Record<string, Value> ?? {}

  const { args, options } = await promptWithEnquirer(
    runDoxygenMapping.args,
    runDoxygenMapping.options,
    instance.args,
    instance.opts(),
    configArgs,
    configOptions,
  )

  const input = handleMultipleInputs(args[0])
  const output = args[1]

  const runner: Runner = {
    ...runnerProfile,
    ..._config.runner,
    options: {
      ...options,
      input,
      outputDirectory: output,
    },
  }

  const spinner = consola.spinner().start("Running Doxygen...")

  const result = await useRunner(runner)

  if (!result.success) {
    spinner.fail("Doxygen failed.")
    consola.error(result.error)
    return
  }

  if (options.verbose) {
    consola.debug(`\n\n${result.output}`)
  }

  spinner.succeed(`Doxygen completed successfully: ${useColor("white", output)}`)
}
