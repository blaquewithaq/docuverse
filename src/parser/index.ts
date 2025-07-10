import type { Doxyfile, Index, Page, XMLDocument, XMLParserOptions } from "./xml"
import { useXmlParser } from "./xml"

export * from "./xml"

export interface ParseDoxyfileOptions {

}

export interface ParseIndexOptions {

}

export interface ParseDirectoryOptions {

}

export interface ParsePageOptions {

}

export interface ParserOptions extends XMLParserOptions {
  baseUrl?: string
  version?: string

  doxyfile?: ParseDoxyfileOptions
  index?: ParseIndexOptions
  directory?: ParseDirectoryOptions
  page?: ParsePageOptions
}

export class Parser {
  private options?: ParserOptions = {
    baseUrl: "/",
    version: "",

    doxyfile: {},
    index: {},
    directory: {},
    page: {},
  }

  private doxyfile: Doxyfile = {}
  private index: Index = {}
  private directories: Page[] = []
  private pages: Page[] = []

  constructor(options?: ParserOptions) {
    this.options = options
  }

  /**
   * Gets the parsed Doxyfile object.
   * @returns The parsed Doxyfile object.
   */
  public getDoxyfile(): Doxyfile {
    return this.doxyfile
  }

  public getIndex(): Index {
    return this.index
  }

  public getDirectories(): Page[] {
    return this.directories
  }

  public getPages(): Page[] {
    return this.pages
  }

  public add(xml: string): XMLDocument | undefined {
    const object = useXmlParser(xml, this.options)

    if (object) {
      if ("doxyfile" in object) {
        this.doxyfile = object.doxyfile as Doxyfile
        return object
      }
      else if ("index" in object) {
        this.index = object.index as Index
        return object
      }
      else if ("page" in object) {
        const page = object.page as Page
        this.pages.push(page)
        return object
      }
    }
  }
}
