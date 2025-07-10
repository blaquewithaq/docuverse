import chalk from "chalk"
import isUnicodeSupported from "is-unicode-supported"

//  Colors

const colors = {
  // Brand
  primary: chalk.hex("#F59E0B"),
  secondary: chalk.hex("#06B6D4"),
  accent: chalk.hex("#6366F1"),

  // Neutrals
  muted: chalk.hex("#7d8596"),
  white: chalk.white,

  // Feedback
  success: chalk.hex("#22C55E"),
  error: chalk.hex("#EF4444"),
  warning: chalk.hex("#FACC15"),
  info: chalk.hex("#0EA5E9"),
}
export type Colors = keyof typeof colors

export function useColor(color: Colors, message?: any, ...optionalParams: any[]): string | undefined {
  const colorFn = colors[color]
  return colorFn ? colorFn(message, ...optionalParams) : undefined
}

export function displayColors(): void {
  console.log("Available colors:")
  for (const [key, value] of Object.entries(colors)) {
    console.log(`${key}: ${value("Sample text")}`)
  }
}

// Icons

const _isUnicodeSupported = isUnicodeSupported()

export function useIcon(name: string, color: Colors): string {
  const colorFn = colors[color] || chalk.white

  switch (name) {
    case "info":
      return colorFn(_isUnicodeSupported ? "ℹ" : "i")
    case "success":
      return colorFn(_isUnicodeSupported ? "✔" : "√")
    case "warning":
      return colorFn(_isUnicodeSupported ? "⚠" : "‼")
    case "error":
      return colorFn(_isUnicodeSupported ? "✖" : "×")
    case "arrowRight":
      return colorFn(_isUnicodeSupported ? "➜" : ">")
    case "docuverse":
      return colorFn(_isUnicodeSupported ? "Ð" : "Docuverse")
    default:
      return ""
  }
}

export function displayIcons(): void {
  console.log("Available icons:")
  console.log(`Info: ${useIcon("info", "info")}`)
  console.log(`Success: ${useIcon("success", "success")}`)
  console.log(`Warning: ${useIcon("warning", "warning")}`)
  console.log(`Error: ${useIcon("error", "error")}`)
  console.log(`Arrow right: ${useIcon("arrowRight", "secondary")}`)
  console.log(`Docuverse: ${useIcon("docuverse", "primary")}`)
}

// displayColors()
// displayIcons()
