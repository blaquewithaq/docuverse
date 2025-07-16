import type { DoxygenPage } from "./page"

export * from "./page"
export * from "./page-enums"

export interface Doxygen {
  index?: DoxygenIndex
  doxygen?: DoxygenPage
}

export interface DoxygenIndex {
  compound?: DoxygenIndexCompound[]
  lang?: string
}

export interface DoxygenIndexCompound {
  name?: string
  member?: DoxygenIndexMember[]
  refid?: string
  href?: string
  kind?: DoxygenIndexCompoundKind
}

export interface DoxygenIndexMember {
  name?: string
  refid?: string
  href?: string
  kind?: DoxygenIndexMemberKind
}

export type DoxygenIndexCompoundKind
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

export type DoxygenIndexMemberKind
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
