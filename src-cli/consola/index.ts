import { useColor, useIcon } from "./assets"
import { Spinner } from "./spinner"

export * from "./assets"
export * from "./help"
export * from "./prompt"
export * from "./spinner"

export const consola = {
  log: (message?: any, ...optionalParams: any[]) => {
    console.log(
      useColor("primary", message, ...optionalParams),
    )
  },

  info: (message?: any, ...optionalParams: any[]) => {
    console.info(
      useIcon("info", "info"),
      useColor("info", message, ...optionalParams),
    )
  },

  warn: (message?: any, ...optionalParams: any[]) => {
    console.warn(
      useIcon("warning", "warning"),
      useColor("warning", message, ...optionalParams),
    )
  },

  error: (message?: any, ...optionalParams: any[]) => {
    console.error(
      useIcon("error", "error"),
      useColor("error", message, ...optionalParams),
    )
  },

  success: (message?: any, ...optionalParams: any[]) => {
    console.log(
      useIcon("success", "success"),
      useColor("success", message, ...optionalParams),
    )
  },

  debug: (message?: any, ...optionalParams: any[]) => {
    // if (process.env.DEBUG === "true") {
    //   console.debug(
    //     useColor("muted", message, ...optionalParams)
    //   )
    // }
    console.debug(
      useColor("muted", message, ...optionalParams),
    )
  },

  spinner: (text?: string): Spinner => {
    return new Spinner(text)
  },
}

export function displayConsola(): void {
  consola.log("Consola initialized with custom styles and icons.")
  consola.info("Use consola.info() for informational messages.")
  consola.warn("Use consola.warn() for warnings.")
  consola.error("Use consola.error() for errors.")
  consola.success("Use consola.success() for success messages.")
  consola.debug("Use consola.debug() for debug messages (only in DEBUG mode).")

  consola.spinner().start("Loading...")
  setTimeout(() => {
    consola.spinner().succeed("Loading complete!")
  }, 2000)
}

// displayConsola()
