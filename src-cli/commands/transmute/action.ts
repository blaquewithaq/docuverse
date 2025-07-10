import type { Command } from "commander"
import type { Config } from "../../config"
import type { Value } from "../../types/data"
import { transmuteMapping } from "."
import { consola, promptWithEnquirer } from "../../consola"
import { handleMultipleInputs } from "../../utils/input"

export async function action(instance: Command, config: Config): Promise<void> {
  const _config = config.transmute ?? {}
  const configInput = Array.isArray(_config.input)
    ? _config.input.join(",")
    : _config.input
  const configOutput = _config.output
  const configArgs = configInput ? [configInput, configOutput].filter((v): v is string => v !== undefined) : []
  const configOptions = _config.options as Record<string, Value> ?? {}

  const { args, options } = await promptWithEnquirer(
    transmuteMapping.args,
    transmuteMapping.options,
    instance.args,
    instance.opts(),
    configArgs,
    configOptions,
  )

  const input = handleMultipleInputs(args[0])
  const output = args[1] as string
  const verbose = options.verbose === true

  consola.log(`Transmuting files from ${input.join(", ")} to ${output}...`, verbose)
}
