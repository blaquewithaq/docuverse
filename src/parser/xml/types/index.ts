import type { Doxyfile } from "./doxyfile"
import type { Page } from "./page"

export * from "./doxyfile"
export * from "./page"
export * from "./page-enums"

export interface XMLDocument {
  doxyfile?: Doxyfile
  index?: Index
  page?: Page
}

export interface Index {
  title?: string
  description?: string
  pages?: IndexPage[]

  language?: string
}

export interface IndexPage {
  name?: string
  description?: string
  members?: IndexMember[]

  href?: string
  kind?: IndexPageKind
}

export interface IndexMember {
  name?: string
  description?: string

  href?: string
  kind?: IndexMemberKind
}

export type IndexPageKind
  = | "category"
    | "class"
    | "concept"
    | "dir"
    | "example"
    | "exception"
    | "file"
    | "group"
    | "interface"
    | "module"
    | "namespace"
    | "page"
    | "protocol"
    | "struct"
    | "type"
    | "union"

export type IndexMemberKind
  = | "dcop"
    | "define"
    | "enum"
    | "enumvalue"
    | "event"
    | "friend"
    | "function"
    | "property"
    | "prototype"
    | "signal"
    | "slot"
    | "typedef"
    | "variable"
