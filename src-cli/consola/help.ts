import type { HelpConfiguration } from "commander"
import { useColor } from "./assets"

export const help: HelpConfiguration = {
  styleTitle: str => useColor("primary", str) as string,

  styleUsage: str => useColor("secondary", str) as string,
  styleCommandText: str => useColor("primary", str) as string,
  styleOptionText: str => useColor("secondary", str) as string,
  styleSubcommandText: str => useColor("muted", str) as string,
  styleArgumentText: str => useColor("secondary", str) as string,

  styleCommandDescription: str => useColor("muted", str) as string,

  styleOptionTerm: str => useColor("secondary", str) as string,
  styleOptionDescription: str => useColor("muted", str) as string,

  styleSubcommandTerm: str => useColor("secondary", str) as string,
  styleSubcommandDescription: str => useColor("muted", str) as string,

  styleArgumentTerm: str => useColor("secondary", str) as string,
  styleArgumentDescription: str => useColor("muted", str) as string,
}
