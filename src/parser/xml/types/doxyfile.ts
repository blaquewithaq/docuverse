export interface Doxyfile {
  title?: string
  description?: string
  options?: DoxyfileOption[]

  language?: string
}

export interface DoxyfileOption {
  values?: (string | number)[]

  id?: string
  default?: DoxyfileDefault
  type?: DoxyfileType
}

export type DoxyfileDefault = "no" | "yes"

export type DoxyfileType = "bool" | "int" | "string" | "stringlist"
