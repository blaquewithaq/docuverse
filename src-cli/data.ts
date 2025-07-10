import type { CommandMapping } from "./types/data"
import { description, name, version } from "~/package.json"
import { autoMapping } from "./commands/auto"
import { generateMapping } from "./commands/generate"
import { parseMapping } from "./commands/parse"
import { runMapping } from "./commands/run"
import { transmuteMapping } from "./commands/transmute"
import { validateMapping } from "./commands/validate"

export const mainMapping: CommandMapping = {
  name,
  description,
  version,
  subCommands: [
    autoMapping,
    generateMapping,
    parseMapping,
    runMapping,
    transmuteMapping,
    validateMapping,
  ],
}
