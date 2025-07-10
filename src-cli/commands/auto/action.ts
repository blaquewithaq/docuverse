import type { Command } from "commander"
import type { Config } from "../../config"

import { action as parseAction } from "../parse"
import { action as runAction } from "../run"
import { action as transmuteAction } from "../transmute"
import { action as validateAction } from "../validate"

export async function action(instance: Command, config: Config): Promise<void> {
  await runAction(instance, config)
  await parseAction(instance, config)
  await validateAction(instance, config)
  await transmuteAction(instance, config)
}
