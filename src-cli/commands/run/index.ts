import type { CommandMapping } from "../../types/data"
import type { RunDoxygenConfig } from "./doxygen"
import { runDoxygenMapping } from "./doxygen"

export * from "./doxygen"

export const runMapping: CommandMapping = {
  name: "run",
  description: "Run a program.",
  subCommands: [
    runDoxygenMapping,
  ],
}

export interface RunConfig {
  doxygen?: RunDoxygenConfig
}
