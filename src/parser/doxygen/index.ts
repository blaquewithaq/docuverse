import type { Doxygen, DoxygenIndex, DoxygenPage, XMLParserOptions } from "./parse"
// import { writeFileSync } from "node:fs"
import { useDoxygenParser } from "./parse"

export * from "./parse"

export interface DoxygenParserOptions extends XMLParserOptions {
  baseUrl?: string
  version?: string

  fixLinks?: boolean
}

export class DoxygenParser {
  private options?: DoxygenParserOptions = {
    baseUrl: "/",
    version: "",

    fixLinks: true,
  }

  private index: DoxygenIndex = {}
  private pages: DoxygenPage[] = []

  private refidMap: Map<string, any[]> = new Map()

  constructor(options?: DoxygenParserOptions) {
    this.options = options
  }

  public getIndex(): DoxygenIndex {
    return this.index
  }

  public getPages(): DoxygenPage[] {
    return this.pages
  }

  private collectRefIds(obj: any, path: string[] = []): void {
    if (Array.isArray(obj)) {
      obj.forEach((item, i) => this.collectRefIds(item, [...path, String(i)]))
    }
    else if (typeof obj === "object" && obj !== null) {
      for (const [key, value] of Object.entries(obj)) {
        if (key === "refid" && typeof value === "string") {
          if (!this.refidMap.has(value)) {
            this.refidMap.set(value, [])
          }
          this.refidMap.get(value)!.push(obj)
        }
        else {
          this.collectRefIds(value, [...path, key])
        }
      }
    }
  }

  public add(source: string): { data?: Doxygen, error?: string } {
    if (!source.startsWith("<?xml")) {
      return { error: "Unsupported source format, expected xml" }
    }

    const { data: json, error } = useDoxygenParser(source, this.options)
    if (error)
      return { error }

    if (json && "index" in json) {
      this.index = json.index ?? {}
      this.collectRefIds(this.index)
    }
    else if (json && "doxygen" in json) {
      if (!json.doxygen)
        return { error: "Invalid doxygen xml format, missing 'doxygen' element" }
      this.pages.push(json.doxygen)
      this.collectRefIds(json.doxygen)
    }
    else {
      return { error: "Invalid doxygen xml format" }
    }

    if (this.options?.fixLinks) {
      const { data, error: fixError } = this.fixLinks(json)
      if (fixError)
        return { error: fixError }
      if (data) {
        return { data }
      }
    }

    return { data: json }
  }

  private parseRefid(refid: string): { link: string, isSub: boolean } {
    const match = refid.match(/^(.*)_8([a-z]+)(?:_(.+))?$/)
    if (!match) {
      return { link: refid, isSub: false }
    }

    let [, base, ext, suffix] = match
    base = base?.replace(/__/g, "_")

    return {
      link: `${base}.${ext}`,
      isSub: typeof suffix === "string",
    }
  }

  public fixLinks(json: Doxygen): { data?: Doxygen, error?: string } {
    const baseUrl = `${(this.options?.baseUrl || "/").replace(/\/+$/, "")}/`

    for (const [refid, locations] of this.refidMap.entries()) {
      const { link, isSub } = this.parseRefid(refid)

      let fallbackAnchor = ""
      for (const loc of locations) {
        fallbackAnchor ||= loc.name || loc.text || ""
        if (fallbackAnchor)
          break
      }

      for (const loc of locations) {
        const anchorName = loc.name || loc.text || fallbackAnchor
        const anchor = isSub && anchorName ? `#${anchorName}` : ""
        loc.href = `${baseUrl}${link}${anchor}`
      }
    }

    return { data: json }
  }
}
