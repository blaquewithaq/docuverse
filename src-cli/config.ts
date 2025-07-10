import type { AutoConfig } from "./commands/auto"
import type { ParseConfig } from "./commands/parse"
import type { RunConfig } from "./commands/run"
import type { TransmuteConfig } from "./commands/transmute"
import type { ValidateConfig } from "./commands/validate"
import type { CommandMapping, Value } from "./types/data"
import { cosmiconfig } from "cosmiconfig"
import YAML from "yaml"

import { name } from "../package.json"
import { autoMapping } from "./commands/auto"
import { parseMapping } from "./commands/parse"
import { runMapping } from "./commands/run"
import { transmuteMapping } from "./commands/transmute"
import { validateMapping } from "./commands/validate"

export interface Config {
  auto?: AutoConfig
  parse?: ParseConfig
  run?: RunConfig
  transmute?: TransmuteConfig
  validate?: ValidateConfig
}

export type ConfigFormat = "js" | "json" | "yaml"

export async function useConfig(): Promise<Config> {
  const explorer = cosmiconfig(name)
  const result = await explorer.search()

  return result?.config
}

function createConfigFromMapping(mapping: CommandMapping): Config {
  const args = mapping.args?.reduce((acc, arg) => {
    acc[arg.name] = arg.defaultValue ?? ""
    return acc
  }, {} as Record<string, Value>)

  const options = mapping.options?.reduce((acc, option) => {
    acc[option.name] = option.defaultValue
    return acc
  }, {} as Record<string, Value>)

  const combined = {
    ...args,
  }

  if (options) {
    Object.assign(combined, options)
  }

  if (mapping.subCommands && mapping.subCommands.length > 0) {
    for (const sub of mapping.subCommands) {
      const subConfig = createConfigFromMapping(sub)
      Object.assign(combined, subConfig)
    }
  }

  return {
    [mapping.name]: combined,
  } as Config
}

export async function generateConfig(format: ConfigFormat): Promise<{
  success: boolean
  content: string
  error?: string
}> {
  const autoConfig = createConfigFromMapping(autoMapping)
  const parseConfig = createConfigFromMapping(parseMapping)
  const runConfig = createConfigFromMapping(runMapping)
  const transmuteConfig = createConfigFromMapping(transmuteMapping)
  const validateConfig = createConfigFromMapping(validateMapping)

  const config: Config = {
    auto: autoConfig.auto,
    parse: parseConfig.parse,
    run: runConfig.run,
    transmute: transmuteConfig.transmute,
    validate: validateConfig.validate,
  }

  switch (format) {
    case "js": {
      return {
        success: true,
        content: `
/** @type {import('docuverse').Config} */
const config = ${JSON.stringify(config, null, 2)};

export default config;`,
      }
    }
    case "json": {
      return {
        success: true,
        content: JSON.stringify(config, null, 2),
      }
    }
    case "yaml": {
      return {
        success: true,
        content: YAML.stringify(config),
      }
    }
    default: {
      return {
        success: false,
        content: "",
        error: `Unsupported format: ${format}`,
      }
    }
  }
}
