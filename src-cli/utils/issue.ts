import open from "open"
import { repository } from "~/package.json"
import { consola } from "../consola"

export async function openIssue(issue: string): Promise<void> {
  const url = `${repository.url}/issues/${issue}`

  await open(url)

  consola.log(`Opening issue at: ${url}`)
}
