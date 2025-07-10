import type { Command } from "commander"
import type { Config } from "../config"

export type Value = number | boolean | string | string[] | undefined

export interface ArgsMapping {
  name: string
  flags: string
  description: string
  defaultValue?: Value
}

export interface OptionMapping {
  name: string
  flags: string
  description: string
  defaultValue?: Value
}

export interface CommandMapping {
  name: string
  description: string
  version?: string
  options?: OptionMapping[]
  args?: ArgsMapping[]
  action?: (instance: Command, config: Config) => Promise<void> | void
  subCommands?: CommandMapping[]
}
