import type { ArgsMapping, OptionMapping, Value } from "../types/data"
import Enquirer from "enquirer"
import { useColor } from "../consola"

const { prompt } = Enquirer

export async function promptWithEnquirer(
  args: ArgsMapping[] = [],
  options: OptionMapping[] = [],
  providedArgs: string[] = [],
  providedOpts: Record<string, Value> = {},
  configArgs: string[] = [],
  configOpts: Record<string, Value> = {},
): Promise<{ args: string[], options: Record<string, Value> }> {
  const responses: Record<string, any> = {}

  const argQuestions = args
    .map((arg, index) => {
      const provided = providedArgs[index]
      const fromConfig = configArgs[index]
      const shouldPrompt = provided === undefined && fromConfig === undefined

      if (!shouldPrompt)
        return null

      return {
        type: "input",
        name: `arg-${index}`,
        message: `${useColor("muted", arg.description)}\n${useColor("secondary", arg.name)}`,
        initial: Array.isArray(arg.defaultValue) && arg.defaultValue.length === 0
          ? undefined
          : arg.defaultValue,
      }
    })
    .filter(Boolean)

  const filtered = argQuestions.filter((q): q is Exclude<typeof q, null> => q !== null)

  if (filtered.length > 0) {
    Object.assign(responses, await prompt(filtered))
  }

  let changeOptions = false
  if (options.length > 0 && filtered.length > 0) {
    const confirmResp = await prompt<{ changeOptions: boolean }>({
      type: "confirm",
      name: "changeOptions",
      message: `${useColor("muted", "Do you want to change options?")}`,
      initial: false,
      format: () => "",
    })
    changeOptions = confirmResp.changeOptions
  }

  if (changeOptions) {
    const optionQuestions = options.map((opt) => {
      const styledKey = opt.name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
      return {
        type: typeof opt.defaultValue === "boolean" ? "confirm" : "input",
        name: `opt-${opt.name}`,
        message: `${useColor("muted", opt.description)}\n${useColor("secondary", styledKey)}`,
        initial:
          typeof providedOpts[opt.name] !== "undefined"
            ? providedOpts[opt.name]
            : opt.defaultValue,
      }
    })

    if (optionQuestions.length > 0) {
      Object.assign(responses, await prompt(optionQuestions.filter((q): q is Exclude<typeof q, null> => q !== null)))
    }
  }

  const finalArgs = args.map((_, i) =>
    responses[`arg-${i}`] ?? providedArgs[i] ?? configArgs[i],
  )

  const finalOpts: Record<string, Value> = {}
  for (const opt of options) {
    finalOpts[opt.name]
      = responses[`opt-${opt.name}`]
        ?? providedOpts[opt.name]
        ?? configOpts[opt.name]
        ?? opt.defaultValue
  }

  return { args: finalArgs, options: finalOpts }
}
