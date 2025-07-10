#!/usr/bin/env bun

import type { Config } from "./config"
import type { CommandMapping } from "./types/data"
import { Command } from "commander"
import { useConfig } from "./config"
import { consola, help } from "./consola"
import { mainMapping } from "./data"

const program = new Command()
  .configureHelp(help)

function createCommandFromMapping(mapping: CommandMapping, config: Config): Command {
  const cmd = new Command(mapping.name)
    .configureHelp(help)
    .description(mapping.description)

  if (mapping.args && mapping.args.length > 0) {
    for (const arg of mapping.args) {
      const isOptional = arg.flags.startsWith("[") && arg.flags.endsWith("]")
      const formattedName = isOptional ? `[${arg.name}]` : `<${arg.name}>`
      cmd.argument(formattedName, arg.description)
    }
  }

  if (mapping.options) {
    for (const opt of mapping.options) {
      if (opt.defaultValue !== undefined) {
        cmd.option(opt.flags, opt.description, opt.defaultValue as any)
      }
      else {
        cmd.option(opt.flags, opt.description)
      }
    }
  }

  if (mapping.action) {
    cmd.action(async function (this: Command) {
      try {
        await mapping.action!(this, config)
      }
      catch (error) {
        consola.error("Command failed:", error)
        process.exit(1)
      }
    })
  }

  if (mapping.subCommands) {
    for (const sub of mapping.subCommands) {
      cmd.addCommand(createCommandFromMapping(sub, config))
    }
  }

  return cmd
}

async function main(): Promise<void> {
  const config = await useConfig()

  const { name, description, version, subCommands = [] } = mainMapping

  program.name(name).description(description).version(version || "0.0.0")

  for (const mapping of subCommands) {
    const cmd = createCommandFromMapping(mapping, config)
    program.addCommand(cmd)
  }

  await program.parseAsync(process.argv)
}

main().catch((error) => {
  consola.error(error)
  process.exit(1)
})
