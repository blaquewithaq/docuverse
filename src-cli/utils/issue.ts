import open from "open"
import { repository } from "~/package.json"
import { consola, useColor } from "../consola"

export async function openIssue(): Promise<void> {
  const repo = repository.url.replace(/\.git$/, "")

  const template = "template=1-bug-report-user.yml"

  const url = `${repo}/issues/new?${template}`

  const spinner = consola.spinner().start(`Opening issue at: ${useColor("white", url)}`)

  await open(url)

  spinner.success("Issue opened successfully.")
}
