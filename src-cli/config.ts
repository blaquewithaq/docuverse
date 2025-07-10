import type { AutoConfig } from "./commands/auto"
import type { ParseConfig } from "./commands/parse"
import type { RunConfig } from "./commands/run"
import type { TransmuteConfig } from "./commands/transmute"
import type { ValidateConfig } from "./commands/validate"
import { cosmiconfig } from "cosmiconfig"
import { name } from "../package.json"

export interface Config {
  auto?: AutoConfig
  parse?: ParseConfig
  run?: RunConfig
  transmute?: TransmuteConfig
  validate?: ValidateConfig
}

export async function useConfig(): Promise<Config> {
  const explorer = cosmiconfig(name)
  const result = await explorer.search()

  return result?.config
}
