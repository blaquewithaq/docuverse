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
export type PageAccessor = "retain" | "copy" | "assign" | "weak" | "strong" | "unretained"
export type PageAlign = "left" | "right" | "center"
export type PageBool = "yes" | "no"
export type PageCheck = "checked" | "unchecked"
export type PageGraphRelation = "include" | "usage" | "template-instance" | "public-inheritance" | "protected-inheritance" | "private-inheritance" | "type-constraint"
export type PageHighlightClass = "comment" | "normal" | "preprocessor" | "keyword" | "keywordtype" | "keywordflow" | "stringliteral" | "xmlcdata" | "charliteral" | "vhdlkeyword" | "vhdllogic" | "vhdlchar" | "vhdldigit"
export type PageImageKind = "html" | "latex" | "docbook" | "rtf" | "xml"
export type PageItemKind = "class" | "struct" | "union" | "interface" | "protocol" | "category" | "exception" | "service" | "singleton" | "module" | "type" | "file" | "namespace" | "group" | "page" | "example" | "dir" | "concept"
export type PageLanguage = "Unknown" | "IDL" | "Java" | "C#" | "D" | "PHP" | "Objective-C" | "C++" | "JavaScript" | "Python" | "Fortran" | "VHDL" | "XML" | "SQL" | "Markdown" | "Slice" | "Lex"
export type PageMemberDefKind = "define" | "property" | "event" | "variable" | "typedef" | "enum" | "function" | "signal" | "prototype" | "friend" | "dcop" | "slot" | "interface" | "service"
export type PageMemberKind = "define" | "property" | "event" | "variable" | "typedef" | "enum" | "enumvalue" | "function" | "signal" | "prototype" | "friend" | "dcop" | "slot"
export type PageOl = "1" | "a" | "A" | "i" | "I"
export type PageParameterDir = "in" | "out" | "inout"
export type PageParameterListKind = "param" | "retval" | "exception" | "templateparam"
export type PagePlantumlEngine = "uml" | "bpm" | "wire" | "dot" | "ditaa" | "salt" | "math" | "latex" | "gantt" | "mindmap" | "wbs" | "yaml" | "creole" | "json" | "flow" | "board" | "git" | "hcl" | "regex" | "ebnf" | "files"
export type PageProtectionKind = "public" | "protected" | "private" | "package"
export type PageReferenceKind = "compound" | "member"
export type PageRefQualifierKind = "lvalue" | "rvalue"
export type PageSectionKind = "user-defined" | "public-type" | "public-func" | "public-attrib" | "public-slot" | "signal" | "dcop-func" | "property" | "event" | "public-static-func" | "public-static-attrib" | "protected-type" | "protected-func" | "protected-attrib" | "protected-slot" | "protected-static-func" | "protected-static-attrib" | "package-type" | "package-func" | "package-attrib" | "package-static-func" | "package-static-attrib" | "private-type" | "private-func" | "private-attrib" | "private-slot" | "private-static-func" | "private-static-attrib" | "friend" | "related" | "define" | "prototype" | "typedef" | "enum" | "func" | "var"
export type PageSimpleSectKind = "see" | "return" | "author" | "authors" | "version" | "since" | "date" | "note" | "warning" | "pre" | "post" | "copyright" | "invariant" | "remark" | "attention" | "important" | "par" | "rcs"
export type PageVerticalAlign = "bottom" | "top" | "middle"
export type PageVirtualKind = "non-virtual" | "virtual" | "pure-virtual"
export interface Page {
  description?: string
  items?: PageItem[]
  lang?: string
  title?: string
}
export interface PageBaseCompoundReference {
  href?: string
  protection?: PageProtectionKind
  virtual?: PageVirtualKind
}
export interface PageChildnode {
  edgeLabels?: string[]
  href?: string | number
  relation?: PageGraphRelation
}
export interface PageCodeLine {
  external?: boolean
  highlights?: PageHighlight[]
  href?: string
  lineno?: number
  refKind?: PageReferenceKind
}
export interface PageDescription {
  internals?: PageDocInternal[]
  paragraphs?: PageDocParagraph[]
  sections?: PageDocSection[]
  title?: string
}
export interface PageDocAnchor {
  id?: string
}
export interface PageDocBlockQuote {
  paragraphs?: PageDocParagraph[]
}
export interface PageDocCaption {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  id?: string
}
export interface PageDocCopy {
  internal?: PageDocInternal
  link?: string
  paragraphs?: PageDocParagraph[]
  sections?: PageDocSection[]
}
export interface PageDocDetails {
  paragraphs?: PageDocParagraph[]
  summary?: PageDocSummary
}
export interface PageDocDotMsc {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  caption?: string
  height?: string
  name?: string
  width?: string
}
export interface PageDocEmoji {
  name?: string
  unicode?: string
}
export interface PageDocEmpty {
}
export interface PageDocEntry {
  align?: PageAlign
  class?: string
  colspan?: number
  paragraphs?: PageDocParagraph[]
  rowSpan?: number
  thead?: PageBool
  valign?: PageVerticalAlign
  width?: string
}
export interface PageDocExtendedMarkup {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  blockquote?: PageDocBlockQuote[]
  copyDoc?: PageDocCopy[]
  details?: PageDocDetails[]
  diaFile?: PageDocImageFile[]
  dotFile?: PageDocImageFile[]
  heading?: PageDocHeading[]
  hRuler?: PageDocEmpty[]
  indexEntry?: PageDocIndexEntry[]
  itemizedList?: PageDocList[]
  javadocCode?: string[]
  javadocLiteral?: string[]
  language?: PageDocLanguage[]
  orderedList?: PageDocList[]
  parameterList?: PageDocParameterList[]
  parBlock?: PageDocParBlock[]
  plantumlFile?: PageDocImageFile[]
  preformatted?: PageDocMarkup[]
  programListing?: PageProgramListing[]
  simpleSect?: PageDocSimpleSect[]
  table?: PageDocTable[]
  title?: PageDocTitle[]
  tocList?: PageDocTocList[]
  variableList?: PageDocVariableList[]
  verbatim?: string[]
  xRefSect?: PageDocXRefSect[]
}
export interface PageDocFormula {
  id?: string
}
export interface PageDocHeading {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  level?: number
}
export interface PageDocHtmlOnly {
  block?: string
}
export interface PageDocImage {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  alt?: string
  caption?: string
  height?: string
  inline?: PageBool
  name?: string
  type?: PageImageKind
  width?: string
}
export interface PageDocImageFile {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  height?: string
  name?: string
  width?: string
}
export interface PageDocIndexEntry {
  primary?: string
  secondary?: string
}
export interface PageDocInternal {
  paragraphs?: PageDocInternal[]
  sections?: PageDocSection[]
}
export interface PageDocLanguage {
  lang?: string
  paragraphs?: PageDocParagraph[]
}
export interface PageDocList {
  items?: PageDocListItem[]
  start?: number
  type?: PageOl
}
export interface PageDocListItem {
  override?: PageCheck
  paragraphs?: PageDocParagraph[]
  value?: number
}
export interface PageDocMarkup {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  blockquote?: PageDocBlockQuote[]
  copyDoc?: PageDocCopy[]
  details?: PageDocDetails[]
  diaFile?: PageDocImageFile[]
  dotFile?: PageDocImageFile[]
  heading?: PageDocHeading[]
  hRuler?: PageDocEmpty[]
  indexEntry?: PageDocIndexEntry[]
  itemizedList?: PageDocList[]
  javadocCode?: string[]
  javadocLiteral?: string[]
  language?: PageDocLanguage[]
  orderedList?: PageDocList[]
  parameterList?: PageDocParameterList[]
  parBlock?: PageDocParBlock[]
  plantumlFile?: PageDocImageFile[]
  preformatted?: PageDocMarkup[]
  programListing?: PageProgramListing[]
  simpleSect?: PageDocSimpleSect[]
  table?: PageDocTable[]
  title?: PageDocTitle[]
  tocList?: PageDocTocList[]
  variableList?: PageDocVariableList[]
  verbatim?: string[]
  xRefSect?: PageDocXRefSect[]
}
export interface PageDocMarkupCommon {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
}
export interface PageDocParameterList {
  items?: PageDocParameterListItem[]
  kind?: PageParameterListKind
}
export interface PageDocParameterListItem {
  description?: PageDescription
  list?: PageDocParameterNameList[]
}
export interface PageDocParameterName {
  direction?: PageParameterDir
  ref?: PageDocReferenceText
}
export interface PageDocParameterNameList {
  names?: PageDocParameterName[]
  types?: PageDocParameterType[]
}
export interface PageDocParameterType {
  ref?: PageDocReferenceText
}
export interface PageDocParagraph {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  blockquote?: PageDocBlockQuote[]
  copyDoc?: PageDocCopy[]
  details?: PageDocDetails[]
  diaFile?: PageDocImageFile[]
  dotFile?: PageDocImageFile[]
  heading?: PageDocHeading[]
  hRuler?: PageDocEmpty[]
  indexEntry?: PageDocIndexEntry[]
  itemizedList?: PageDocList[]
  javadocCode?: string[]
  javadocLiteral?: string[]
  language?: PageDocLanguage[]
  orderedList?: PageDocList[]
  parameterList?: PageDocParameterList[]
  parBlock?: PageDocParBlock[]
  plantumlFile?: PageDocImageFile[]
  preformatted?: PageDocMarkup[]
  programListing?: PageProgramListing[]
  simpleSect?: PageDocSimpleSect[]
  table?: PageDocTable[]
  title?: PageDocTitle[]
  tocList?: PageDocTocList[]
  variableList?: PageDocVariableList[]
  verbatim?: string[]
  xRefSect?: PageDocXRefSect[]
}
export interface PageDocParBlock {
  paragraphs?: PageDocParagraph[]
}
export interface PageDocPlantuml {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  caption?: string
  engine?: PagePlantumlEngine
  height?: string
  name?: string
  width?: string
}
export interface PageDocReferenceText {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  external?: boolean
  href?: string
  kindReference?: PageReferenceKind
}
export interface PageDocRow {
  entries?: PageDocEntry[]
}
export interface PageDocSection {
  id?: string
  internals?: PageDocInternal[]
  paragraphs?: PageDocParagraph[]
  sections?: PageDocSection[]
  title?: PageDocTitle
}
export interface PageDocSimpleSect {
  kind?: PageSimpleSectKind
  paragraphs?: PageDocParagraph[]
  title?: PageDocTitle
}
export interface PageDocSummary {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
}
export interface PageDocTable {
  caption?: PageDocCaption
  columnCount?: number
  rowCount?: number
  rows?: PageDocRow[]
  width?: string
}
export interface PageDocTitle {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
}
export interface PageDocTocItem {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  id?: string
}
export interface PageDocTocList {
  items?: PageDocTocItem[]
}
export interface PageDocURLLink {
  anchor?: PageDocAnchor[]
  bold?: PageDocMarkup[]
  center?: PageDocMarkup[]
  cite?: PageDocMarkup[]
  computerOutput?: PageDocMarkup[]
  del?: PageDocMarkup[]
  docbookOnly?: string[]
  dot?: PageDocDotMsc[]
  emoji?: PageDocEmoji[]
  emphasis?: PageDocMarkup[]
  formula?: PageDocFormula[]
  htmlOnly?: PageDocHtmlOnly[]
  image?: PageDocImage[]
  ins?: PageDocMarkup[]
  latexOnly?: string[]
  linebreak?: PageDocEmpty[]
  manOnly?: string[]
  msc?: PageDocDotMsc[]
  plantuml?: PageDocPlantuml[]
  ref?: PageDocReferenceText[]
  rtfOnly?: string[]
  s?: PageDocMarkup[]
  small?: PageDocMarkup[]
  strike?: PageDocMarkup[]
  subscript?: PageDocMarkup[]
  superscript?: PageDocMarkup[]
  uLink?: PageDocURLLink[]
  underline?: PageDocMarkup[]
  xmlOnly?: string[]
  href?: string
}
export interface PageDocVariableList {
  entries?: PageDocVariableListEntry[]
  items?: PageDocListItem[]
}
export interface PageDocVariableListEntry {
  term?: PageDocTitle
}
export interface PageDocXRefSect {
  description?: PageDescription
  id?: string
  titles?: string[]
}
export interface PageEnumValue {
  briefDescription?: PageDescription
  detailedDescription?: PageDescription
  id?: string
  initializer?: PageLinkedText
  name?: string
  protection?: PageProtectionKind
}
export interface PageExport {
  href?: string
}
export interface PageExports {
  exports?: PageExport[]
}
export interface PageGraph {
  nodes?: PageNode[]
}
export interface PageHighlight {
  class?: PageHighlightClass
  ref?: PageDocReferenceText[]
  sp?: unknown[]
}
export interface PageInclude {
  href?: string
  local?: boolean
  text?: string
}
export interface PageItem {
  abstract?: boolean
  baseCompoundReferences?: PageBaseCompoundReference[]
  briefDescription?: PageDescription
  collaborationGraph?: PageGraph
  derivedCompoundReferences?: PageBaseCompoundReference[]
  detailedDescription?: PageDescription
  exports?: PageExports
  final?: boolean
  id?: string
  includeDependencyGraph?: PageGraph
  includedBy?: PageInclude[]
  includes?: PageInclude[]
  inheritanceGraph?: PageGraph
  initializer?: PageLinkedText
  inline?: boolean
  innerClasses?: PageReference[]
  innerConcepts?: PageReference[]
  innerDirs?: PageReference[]
  innerFiles?: PageReference[]
  innerGroups?: PageReference[]
  innerModules?: PageReference[]
  innerNamespaces?: PageReference[]
  innerPages?: PageReference[]
  inverseIncludeDependencyGraph?: PageGraph
  kind?: PageItemKind
  language?: PageLanguage
  listOfAllMembers?: PageListOfAllMembers
  location?: PageLocation
  name?: string
  programListings?: PageProgramListing[]
  protection?: PageProtectionKind
  qualifiers?: string[]
  requiresClause?: PageLinkedText
  sealed?: boolean
  sections?: PageSection[]
  tableOfContents?: PageTableOfContents
  templateParamList?: PageTemplateParamList
  title?: string
}
export interface PageLink {
  external?: string
  href?: string
}
export interface PageLinkedText {
  ref?: PageDocReferenceText[]
}
export interface PageListOfAllMembers {
  members?: PageMemberReference[]
}
export interface PageLocation {
  href?: string
}
export interface PageMember {
  href?: string
  kind?: PageMemberKind
  name?: string
}
export interface PageMemberDef {
  accessor?: PageAccessor
  add?: boolean
  argsString?: string
  attribute?: boolean
  bitField?: string
  bound?: boolean
  briefDescription?: PageDescription
  const?: boolean
  constEval?: boolean
  constExpr?: boolean
  constInit?: boolean
  constrained?: boolean
  definition?: string
  detailedDescription?: PageDescription
  enumValue?: PageEnumValue[]
  exceptions?: PageLinkedText
  explicit?: boolean
  extern?: boolean
  final?: boolean
  gettable?: boolean
  id?: string
  inBodyDescription?: PageDescription
  initOnly?: boolean
  initializer?: PageLinkedText
  inline?: boolean
  kind?: PageMemberKind
  location?: PageLocation
  maybeAmbiguous?: boolean
  maybeDefault?: boolean
  maybeVoid?: boolean
  mutable?: boolean
  name?: string
  new?: boolean
  noDiscard?: boolean
  noexcept?: boolean
  noExceptExpression?: string
  optional?: boolean
  parameters?: PageParameter[]
  privateGettable?: boolean
  privateSettable?: boolean
  property?: boolean
  protection?: PageProtectionKind
  protectedGettable?: boolean
  protectedSettable?: boolean
  qualifiedName?: string
  qualifiers?: string[]
  raise?: boolean
  read?: string
  readable?: boolean
  readonly?: boolean
  refQualifier?: PageRefQualifierKind
  referencedBy?: PageReference[]
  references?: PageReference[]
  reimplementedBy?: PageLinkedText[]
  reimplements?: PageLinkedText[]
  removable?: boolean
  remove?: boolean
  required?: boolean
  requiresClause?: PageLinkedText
  sealed?: boolean
  settable?: boolean
  static?: boolean
  strong?: boolean
  templateParamList?: PageTemplateParamList
  transient?: boolean
  type?: PageLinkedText
  virtual?: PageVirtualKind
  volatile?: boolean
  writable?: boolean
  write?: string
}
export interface PageMemberReference {
  ambiguityScope?: string
  href?: string
  name?: string
  protection?: PageProtectionKind
  scope?: string
  virtual?: PageVirtualKind
}
export interface PageNode {
  children?: PageChildnode[]
  id?: string | number
  label?: string
  link?: PageLink
}
export interface PageParameter {
  array?: string
  attributes?: string
  briefDescription?: PageDescription
  declName?: string
  defName?: string
  defVal?: PageLinkedText
  type?: PageLinkedText
  typeConstraint?: PageLinkedText
}
export interface PageProgramListing {
  codeLines?: PageCodeLine[]
  filename?: string
}
export interface PageReference {
  href?: string
  inline?: boolean
  prot?: PageProtectionKind
  text?: string
}
export interface PageSection {
  description?: PageDescription
  header?: string
  kind?: PageSectionKind
  memberDefs?: PageMemberDef[]
  members?: PageMember[]
}
export interface PageTableOfContents {
  contents?: PageTableOfContents[]
  sections?: PageTableOfContentsSection[]
}
export interface PageTableOfContentsName {
  paragraphs?: PageDocParagraph[]
}
export interface PageTableOfContentsSection {
  contents?: PageTableOfContents[]
  docs?: PageTableOfContentsName
  name?: string
  reference?: string
}
export interface PageTemplateParamList {
  parameters?: PageParameter[]
}
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
export type IndexPageKind = "category" | "class" | "concept" | "dir" | "example" | "exception" | "file" | "group" | "interface" | "module" | "namespace" | "page" | "protocol" | "struct" | "type" | "union"
export type IndexMemberKind = "dcop" | "define" | "enum" | "enumvalue" | "event" | "friend" | "function" | "property" | "prototype" | "signal" | "slot" | "typedef" | "variable"

export {}
