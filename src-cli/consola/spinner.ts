import type { Ora } from "ora"
import ora from "ora"
import { useColor, useIcon } from "./assets"

export class Spinner {
  public spinner: Ora

  constructor(text?: string) {
    this.spinner = ora({
      text: useColor("primary", text),
      color: "yellow",
      spinner: "dots3",
    })
  }

  public start(text?: string): this {
    this.spinner.start(useColor("primary", text))
    return this
  }

  public stop(): this {
    this.spinner.stop()
    return this
  }

  public success(text?: string): this {
    this.spinner.stopAndPersist({
      text: useColor("success", text),
      symbol: useIcon("success", "success"),
    })
    return this
  }

  public fail(text?: string): this {
    this.spinner.stopAndPersist({
      text: useColor("error", text),
      symbol: useIcon("error", "error"),
    })
    return this
  }

  public warn(text?: string): this {
    this.spinner.stopAndPersist({
      text: useColor("warning", text),
      symbol: useIcon("warning", "warning"),
    })
    return this
  }

  public info(text?: string): this {
    this.spinner.stopAndPersist({
      text: useColor("info", text),
      symbol: useIcon("info", "info"),
    })
    return this
  }

  public setText(text: string): this {
    this.spinner.text = text
    return this
  }
}

export function displaySpinners(): void {
  const spinner = new Spinner("Loading...")
  spinner.start()

  setTimeout(() => {
    spinner.success("Done!")
  }, 2000)
  setTimeout(() => {
    spinner.fail("Failed to load!")
  }, 2000)
  setTimeout(() => {
    spinner.warn("This is a warning!")
  }, 2000)
  setTimeout(() => {
    spinner.info("Fetching data...")
  }, 2000)
}

// displaySpinners()
