import type {
  PageAccessor,
  PageAlign,
  PageBool,
  PageCheck,
  PageGraphRelation,
  PageHighlightClass,
  PageImageKind,
  PageItemKind,
  PageLanguage,
  PageMemberKind,
  PageOl,
  PageParameterDir,
  PageParameterListKind,
  PagePlantumlEngine,
  PageProtectionKind,
  PageReferenceKind,
  PageRefQualifierKind,
  PageSectionKind,
  PageSimpleSectKind,
  PageVerticalAlign,
  PageVirtualKind,
} from "./page-enums"

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

export interface PageDocCaption extends PageDocMarkupCommon {
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

export interface PageDocDotMsc extends PageDocMarkupCommon {
  caption?: string
  height?: string
  name?: string
  width?: string
}

export interface PageDocEmoji {
  name?: string
  unicode?: string
}

export interface PageDocEmpty {}

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

export interface PageDocExtendedMarkup extends PageDocMarkupCommon {
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

export interface PageDocHeading extends PageDocMarkupCommon {
  level?: number
}

export interface PageDocHtmlOnly {
  block?: string
}

export interface PageDocImage extends PageDocMarkupCommon {
  alt?: string
  caption?: string
  height?: string
  inline?: PageBool
  name?: string
  type?: PageImageKind
  width?: string
}

export interface PageDocImageFile extends PageDocMarkupCommon {
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

export interface PageDocMarkup extends PageDocExtendedMarkup {}

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

export interface PageDocParagraph extends PageDocExtendedMarkup {}

export interface PageDocParBlock {
  paragraphs?: PageDocParagraph[]
}

export interface PageDocPlantuml extends PageDocMarkupCommon {
  caption?: string
  engine?: PagePlantumlEngine
  height?: string
  name?: string
  width?: string
}

export interface PageDocReferenceText extends PageDocMarkupCommon {
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

export interface PageDocSummary extends PageDocMarkupCommon {}

export interface PageDocTable {
  caption?: PageDocCaption
  columnCount?: number
  rowCount?: number
  rows?: PageDocRow[]
  width?: string
}

export interface PageDocTitle extends PageDocMarkupCommon {}

export interface PageDocTocItem extends PageDocMarkupCommon {
  id?: string
}

export interface PageDocTocList {
  items?: PageDocTocItem[]
}

export interface PageDocURLLink extends PageDocMarkupCommon {
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
  sp?: unknown[] // research what this is for
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
