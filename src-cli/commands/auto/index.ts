import type { CommandMapping } from "../../types/data"
import { action } from "./action"

export const autoMapping: CommandMapping = {
  name: "auto",
  description: "Auto process xml files into markdown files.",
  args: [],
  options: [],
  action,
}

export interface AutoOptions {}

export interface AutoConfig {}
