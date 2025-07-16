export type DoxygenPageBool = "yes" | "no"
export type DoxygenPageGraphRelation = "include" | "usage" | "template-instance" | "public-inheritance" | "protected-inheritance" | "private-inheritance" | "type-constraint"
export type DoxygenPageRefKind = "compound" | "member"
export type DoxygenPageMemberKind = "define" | "property" | "event" | "variable" | "typedef" | "enum" | "function" | "signal" | "prototype" | "friend" | "dcop" | "slot" | "interface" | "service"
export type DoxygenPageProtectionKind = "public" | "protected" | "private" | "package"
export type DoxygenPageRefQualifierKind = "lvalue" | "rvalue"
export type DoxygenPageLanguage = "Unknown" | "IDL" | "Java" | "C#" | "D" | "PHP" | "Objective-C" | "C++" | "JavaScript" | "Python" | "Fortran" | "VHDL" | "XML" | "SQL" | "Markdown" | "Slice" | "Lex"
export type DoxygenPageVirtualKind = "non-virtual" | "virtual" | "pure-virtual"
export type DoxygenPageCompoundKind = "class" | "struct" | "union" | "interface" | "protocol" | "category" | "exception" | "service" | "singleton" | "module" | "type" | "file" | "namespace" | "group" | "page" | "example" | "dir" | "concept"
export type DoxygenPageSectionKind = "user-defined" | "public-type" | "public-func" | "public-attrib" | "public-slot" | "signal" | "dcop-func" | "property" | "event" | "public-static-func" | "public-static-attrib" | "protected-type" | "protected-func" | "protected-attrib" | "protected-slot" | "protected-static-func" | "protected-static-attrib" | "package-type" | "package-func" | "package-attrib" | "package-static-func" | "package-static-attrib" | "private-type" | "private-func" | "private-attrib" | "private-slot" | "private-static-func" | "private-static-attrib" | "friend" | "related" | "define" | "prototype" | "typedef" | "enum" | "func" | "var"
export type DoxygenPageHighlightClass = "comment" | "normal" | "preprocessor" | "keyword" | "keywordtype" | "keywordflow" | "stringliteral" | "xmlcdata" | "charliteral" | "vhdlkeyword" | "vhdllogic" | "vhdlchar" | "vhdldigit"
export type DoxygenPageSimpleSectKind = "see" | "return" | "author" | "authors" | "version" | "since" | "date" | "note" | "warning" | "pre" | "post" | "copyright" | "invariant" | "remark" | "attention" | "important" | "par" | "rcs"
export type DoxygenPageCheck = "checked" | "unchecked"
export type DoxygenPageVersionNumber = string
export type DoxygenPageImageKind = "html" | "latex" | "docbook" | "rtf" | "xml"
export type DoxygenPagePlantumlEngine = "uml" | "bpm" | "wire" | "dot" | "ditaa" | "salt" | "math" | "latex" | "gantt" | "mindmap" | "wbs" | "yaml" | "creole" | "json" | "flow" | "board" | "git" | "hcl" | "regex" | "ebnf" | "files"
export type DoxygenPageParamListKind = "param" | "retval" | "exception" | "templateparam"
export type DoxygenPageCharRange = string
export type DoxygenPageParamDir = "in" | "out" | "inout"
export type DoxygenPageAccessor = "retain" | "copy" | "assign" | "weak" | "strong" | "unretained"
export type DoxygenPageAlign = "left" | "right" | "center"
export type DoxygenPageVerticalAlign = "bottom" | "top" | "middle"
export type DoxygenPageOl = "1" | "a" | "A" | "i" | "I"
export interface DoxygenPage {
  compoundDef?: DoxygenPageCompoundDef[]
  lang?: string
}
export interface DoxygenPageCompoundDef {
  abstract?: DoxygenPageBool
  final?: DoxygenPageBool
  id?: string
  inline?: DoxygenPageBool
  kind?: DoxygenPageCompoundKind
  language?: DoxygenPageLanguage[]
  prot?: DoxygenPageProtectionKind
  sealed?: DoxygenPageBool
  baseCompoundRef?: DoxygenPageCompoundRef[]
  briefDescription?: DoxygenPageDescription
  collaborationGraph?: DoxygenPageGraph
  compoundName?: string
  derivedCompoundRef?: DoxygenPageCompoundRef[]
  detailedDescription?: DoxygenPageDescription
  exports?: DoxygenPageExports
  incDepGraph?: DoxygenPageGraph
  includedBy?: DoxygenPageInc[]
  includes?: DoxygenPageInc[]
  inheritanceGraph?: DoxygenPageGraph
  initializer?: DoxygenPageLinkedText | string | number
  innerClass?: DoxygenPageRef[]
  innerConcept?: DoxygenPageRef[]
  innerDir?: DoxygenPageRef[]
  innerFile?: DoxygenPageRef[]
  innerGroup?: DoxygenPageRef[]
  innerModule?: DoxygenPageRef[]
  innerNamespace?: DoxygenPageRef[]
  innerPage?: DoxygenPageRef[]
  invIncDepGraph?: DoxygenPageGraph
  listOfAllMembers?: DoxygenPageListOfAllMembers
  location?: DoxygenPageLocation
  programListing?: DoxygenPageListing[]
  qualifier?: string[]
  requiresClause?: DoxygenPageLinkedText
  sectionDef?: DoxygenPageSectionDef[]
  tableOfContents?: DoxygenPageTableOfContents
  templateParamList?: DoxygenPageTemplateParamList
  title?: string
}
export interface DoxygenPageCompoundRef {
  prot?: DoxygenPageProtectionKind
  refid?: string
  href?: string
  virt?: DoxygenPageVirtualKind
}
export interface DoxygenPageDescription {
  internal?: DoxygenPageDocInternal[]
  para?: (DoxygenPageDocPara | string)[]
  sect1?: DoxygenPageDocSect1[]
  title?: string
}
export interface DoxygenPageDocInternal {
  para?: (DoxygenPageDocPara | string)[]
  sect1?: DoxygenPageDocSect1[]
}
export interface DoxygenPageDocPara {
  anchor?: DoxygenPageDocAnchor[]
  blockquote?: DoxygenPageDocBlockQuote[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  copyDoc?: DoxygenPageDocCopy[]
  del?: DoxygenPageDocMarkup[]
  details?: DoxygenPageDocDetails[]
  diaFile?: DoxygenPageDocImageFile[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  dotfile?: DoxygenPageDocImageFile[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  heading?: DoxygenPageDocHeading[]
  hruler?: DoxygenPageDocEmpty[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  indexEntry?: DoxygenPageDocIndexEntry[]
  ins?: DoxygenPageDocMarkup[]
  itemizedList?: DoxygenPageDocList[]
  javadocCode?: string[]
  javadocLiteral?: string[]
  language?: DoxygenPageDocLanguage[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  mscfile?: DoxygenPageDocImageFile[]
  orderedList?: DoxygenPageDocList[]
  parameterList?: DoxygenPageDocParamList[]
  parBlock?: DoxygenPageDocParBlock[]
  plantUML?: DoxygenPageDocPlantuml[]
  plantUMLFile?: DoxygenPageDocImageFile[]
  preformatted?: DoxygenPageDocMarkup[]
  programListing?: DoxygenPageListing[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  simpleSect?: DoxygenPageDocSimpleSect[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  table?: DoxygenPageDocTable[]
  title?: DoxygenPageDocTitle[]
  tocList?: DoxygenPageDocTocList[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  variableList?: DoxygenPageDocVariableList[]
  verbatim?: string[]
  xmlOnly?: string[]
  xRefSect?: DoxygenPageDocXRefSect[]
}
export interface DoxygenPageDocSect1 {
  id?: string
  internal?: DoxygenPageDocInternalS1[]
  para?: (DoxygenPageDocPara | string)[]
  sect2?: DoxygenPageDocSect2[]
  title?: DoxygenPageDocTitle
}
export interface DoxygenPageDocSect2 {
  id?: string
  internal?: DoxygenPageDocInternalS2[]
  para?: (DoxygenPageDocPara | string)[]
  sect3?: DoxygenPageDocSect3[]
  title?: DoxygenPageDocTitle
}
export interface DoxygenPageDocSect3 {
  id?: string
  internal?: DoxygenPageDocInternalS3[]
  para?: (DoxygenPageDocPara | string)[]
  sect4?: DoxygenPageDocSect4[]
  title?: DoxygenPageDocTitle
}
export interface DoxygenPageDocSect4 {
  id?: string
  internal?: DoxygenPageDocInternalS4[]
  para?: (DoxygenPageDocPara | string)[]
  sect5?: DoxygenPageDocSect5[]
  title?: DoxygenPageDocTitle
}
export interface DoxygenPageDocSect5 {
  id?: string
  internal?: DoxygenPageDocInternalS5[]
  para?: (DoxygenPageDocPara | string)[]
  sect6?: DoxygenPageDocSect6[]
  title?: DoxygenPageDocTitle
}
export interface DoxygenPageDocSect6 {
  id?: string
  internal?: DoxygenPageDocInternalS6[]
  para?: (DoxygenPageDocPara | string)[]
  title?: DoxygenPageDocTitle
}
export interface DoxygenPageDocInternalS1 {
  para?: (DoxygenPageDocPara | string)[]
  sect2?: DoxygenPageDocSect2[]
}
export interface DoxygenPageDocInternalS2 {
  para?: (DoxygenPageDocPara | string)[]
  sect3?: DoxygenPageDocSect3[]
}
export interface DoxygenPageDocInternalS3 {
  para?: (DoxygenPageDocPara | string)[]
  sect4?: DoxygenPageDocSect4[]
}
export interface DoxygenPageDocInternalS4 {
  para?: (DoxygenPageDocPara | string)[]
  sect5?: DoxygenPageDocSect5[]
}
export interface DoxygenPageDocInternalS5 {
  para?: (DoxygenPageDocPara | string)[]
  sect5?: DoxygenPageDocSect6[]
}
export interface DoxygenPageDocInternalS6 {
  para?: (DoxygenPageDocPara | string)[]
}
export interface DoxygenPageDocTitle {
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocAnchor {
  id?: string
}
export interface DoxygenPageDocBlockQuote {
  para?: (DoxygenPageDocPara | string)[]
}
export interface DoxygenPageDocCaption {
  id?: string
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocCopy {
  link?: string
  internal?: DoxygenPageDocInternal
  para?: (DoxygenPageDocPara | string)[]
  sect1?: DoxygenPageDocSect1[]
}
export interface DoxygenPageDocDetails {
  para?: (DoxygenPageDocPara | string)[]
  summary?: DoxygenPageDocSummary
}
export interface DoxygenPageDocDotMsc {
  caption?: string
  height?: string
  name?: string
  width?: string
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocEmoji {
  name?: string
  unicode?: string
}
export interface DoxygenPageDocEmpty {
}
export interface DoxygenPageDocEntry {
  align?: DoxygenPageAlign
  class?: string
  colSpan?: number
  rowSpan?: number
  thead?: DoxygenPageBool
  valign?: DoxygenPageVerticalAlign
  width?: string
  para?: (DoxygenPageDocPara | string)[]
}
export interface DoxygenPageDocFormula {
  id?: string
}
export interface DoxygenPageDocHeading {
  level?: number
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocHtmlOnly {
  block?: string
}
export interface DoxygenPageDocImageFile {
  height?: string
  name?: string
  width?: string
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocImage {
  alt?: string
  caption?: string
  height?: string
  inline?: DoxygenPageBool
  name?: string
  type?: DoxygenPageImageKind
  width?: string
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocIndexEntry {
  primary?: string
  secondary?: string
}
export interface DoxygenPageDocMarkup {
  anchor?: DoxygenPageDocAnchor[]
  blockquote?: DoxygenPageDocBlockQuote[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  copyDoc?: DoxygenPageDocCopy[]
  del?: DoxygenPageDocMarkup[]
  details?: DoxygenPageDocDetails[]
  diaFile?: DoxygenPageDocImageFile[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  dotfile?: DoxygenPageDocImageFile[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  heading?: DoxygenPageDocHeading[]
  hruler?: DoxygenPageDocEmpty[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  indexEntry?: DoxygenPageDocIndexEntry[]
  ins?: DoxygenPageDocMarkup[]
  itemizedList?: DoxygenPageDocList[]
  javadocCode?: string[]
  javadocLiteral?: string[]
  language?: DoxygenPageDocLanguage[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  mscfile?: DoxygenPageDocImageFile[]
  orderedList?: DoxygenPageDocList[]
  parameterList?: DoxygenPageDocParamList[]
  parBlock?: DoxygenPageDocParBlock[]
  plantUML?: DoxygenPageDocPlantuml[]
  plantUMLFile?: DoxygenPageDocImageFile[]
  preformatted?: DoxygenPageDocMarkup[]
  programListing?: DoxygenPageListing[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  simpleSect?: DoxygenPageDocSimpleSect[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  table?: DoxygenPageDocTable[]
  title?: DoxygenPageDocTitle[]
  tocList?: DoxygenPageDocTocList[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  variableList?: DoxygenPageDocVariableList[]
  verbatim?: string[]
  xmlOnly?: string[]
  xRefSect?: DoxygenPageDocXRefSect[]
}
export interface DoxygenPageDocPlantuml {
  caption?: string
  engine?: DoxygenPagePlantumlEngine
  height?: string
  name?: string
  width?: string
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocRefText {
  external?: string
  kindRef?: DoxygenPageRefKind
  refid?: string
  href?: string
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocURLLink {
  url?: string
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocSummary {
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocList {
  start?: number
  type?: DoxygenPageOl
  listItem?: DoxygenPageDocListItem[]
}
export interface DoxygenPageDocListItem {
  override?: DoxygenPageCheck
  value?: number
  para?: (DoxygenPageDocPara | string)[]
}
export interface DoxygenPageDocLanguage {
  langId?: string
  para?: (DoxygenPageDocPara | string)[]
}
export interface DoxygenPageDocParamList {
  kind?: DoxygenPageParamListKind
  parameterItem?: DoxygenPageDocParamListItem[]
}
export interface DoxygenPageDocParamListItem {
  parameterDescription?: DoxygenPageDescription
  parameterNameList?: DoxygenPageDocParamNameList[]
}
export interface DoxygenPageDocParamNameList {
  parameterName?: DoxygenPageDocParamName[]
  parameterType?: DoxygenPageDocParam[]
}
export interface DoxygenPageDocParamName {
  direction?: DoxygenPageParamDir
  ref?: DoxygenPageRefText
}
export interface DoxygenPageRefText {
  external?: string
  kindRef?: DoxygenPageRefKind
  refid?: string
  href?: string
  tooltip?: string
}
export interface DoxygenPageDocParam {
  ref?: DoxygenPageRefText
}
export interface DoxygenPageDocParBlock {
  para?: (DoxygenPageDocPara | string)[]
}
export interface DoxygenPageListing {
  filename?: string
  codeLine?: DoxygenPageCodeLine[]
}
export interface DoxygenPageCodeLine {
  external?: DoxygenPageBool
  lineno?: number
  refid?: string
  href?: string
  refKind?: DoxygenPageRefKind
  highlight?: DoxygenPageHighlight[]
}
export interface DoxygenPageHighlight {
  class?: DoxygenPageHighlightClass
  ref?: DoxygenPageRefText[]
  sp?: DoxygenPageSp[]
}
export interface DoxygenPageSp {
  value?: number
}
export interface DoxygenPageDocSimpleSect {
  kind?: DoxygenPageSimpleSectKind
  para?: (DoxygenPageDocPara | string)[]
  title?: DoxygenPageDocTitle
}
export interface DoxygenPageDocTable {
  cols?: number
  rows?: number
  width?: string
  caption?: DoxygenPageDocCaption
  row?: DoxygenPageDocRow[]
}
export interface DoxygenPageDocRow {
  entry?: DoxygenPageDocEntry[]
}
export interface DoxygenPageDocTocList {
  tocItem?: DoxygenPageDocTocItem[]
}
export interface DoxygenPageDocTocItem {
  id?: string
  anchor?: DoxygenPageDocAnchor[]
  bold?: DoxygenPageDocMarkup[]
  center?: DoxygenPageDocMarkup[]
  cite?: DoxygenPageDocMarkup[]
  computerOutput?: DoxygenPageDocMarkup[]
  del?: DoxygenPageDocMarkup[]
  docBookOnly?: string[]
  dot?: DoxygenPageDocDotMsc[]
  emoji?: DoxygenPageDocEmoji[]
  emphasis?: DoxygenPageDocMarkup[]
  formula?: DoxygenPageDocFormula[]
  htmlOnly?: DoxygenPageDocHtmlOnly[]
  image?: DoxygenPageDocImage[]
  ins?: DoxygenPageDocMarkup[]
  latexOnly?: string[]
  linebreak?: DoxygenPageDocEmpty[]
  manOnly?: string[]
  msc?: DoxygenPageDocDotMsc[]
  plantUML?: DoxygenPageDocPlantuml[]
  ref?: DoxygenPageDocRefText[]
  rtfOnly?: string[]
  s?: DoxygenPageDocMarkup[]
  small?: DoxygenPageDocMarkup[]
  strike?: DoxygenPageDocMarkup[]
  subscript?: DoxygenPageDocMarkup[]
  superscript?: DoxygenPageDocMarkup[]
  uLink?: DoxygenPageDocURLLink[]
  underline?: DoxygenPageDocMarkup[]
  xmlOnly?: string[]
}
export interface DoxygenPageDocVariableList {
  listItem?: DoxygenPageDocListItem[]
  varListEntry?: DoxygenPageDocVarListEntry[]
}
export interface DoxygenPageDocVarListEntry {
  term?: DoxygenPageDocTitle
}
export interface DoxygenPageDocXRefSect {
  id?: string
  xRefDescription?: DoxygenPageDescription
  xRefTitle?: string[]
}
export interface DoxygenPageGraph {
  node?: DoxygenPageNode[]
}
export interface DoxygenPageNode {
  id?: string | number
  childNode?: DoxygenPageChildNode[]
  label?: string
  link?: DoxygenPageLink
}
export interface DoxygenPageLink {
  external?: string
  refid?: string
  href?: string
}
export interface DoxygenPageChildNode {
  refid?: string | number
  href?: string | number
  relation?: DoxygenPageGraphRelation
  edgeLabel?: string[]
}
export interface DoxygenPageExports {
  export?: DoxygenPageExport[]
}
export interface DoxygenPageExport {
  refid?: string
  href?: string
}
export interface DoxygenPageInc {
  local?: DoxygenPageBool
  refid?: string
  href?: string
}
export interface DoxygenPageLinkedText {
  ref?: DoxygenPageRefText[]
  text?: string
}
export interface DoxygenPageRef {
  inline?: DoxygenPageBool
  prot?: DoxygenPageProtectionKind
  refid?: string
  href?: string
  text?: string
}
export interface DoxygenPageListOfAllMembers {
  member?: DoxygenPageMemberRef[]
}
export interface DoxygenPageMemberRef {
  ambiguityScope?: string
  prot?: DoxygenPageProtectionKind
  refid?: string
  href?: string
  virt?: DoxygenPageVirtualKind
  name?: string
  scope?: string
}
export interface DoxygenPageLocation {
  bodyEnd?: number
  bodyFile?: string
  bodyStart?: number
  column?: number
  declColumn?: number
  declFile?: string
  declLine?: number
  file?: string
  line?: number
}
export interface DoxygenPageSectionDef {
  kind?: DoxygenPageSectionKind
  description?: DoxygenPageDescription
  header?: string
  member?: DoxygenPageMember[]
  memberDef?: DoxygenPageMemberDef[]
}
export interface DoxygenPageMember {
  kind?: DoxygenPageMemberKind
  refid?: string
  href?: string
  name?: string
}
export interface DoxygenPageMemberDef {
  accessor?: DoxygenPageAccessor
  add?: DoxygenPageBool
  attribute?: DoxygenPageBool
  bound?: DoxygenPageBool
  const?: DoxygenPageBool
  constEval?: DoxygenPageBool
  constExpr?: DoxygenPageBool
  constInit?: DoxygenPageBool
  constrained?: DoxygenPageBool
  explicit?: DoxygenPageBool
  extern?: DoxygenPageBool
  final?: DoxygenPageBool
  gettable?: DoxygenPageBool
  id?: string
  initOnly?: DoxygenPageBool
  inline?: DoxygenPageBool
  kind?: DoxygenPageMemberKind
  maybeAmbiguous?: DoxygenPageBool
  maybeDefault?: DoxygenPageBool
  maybeVoid?: DoxygenPageBool
  mutable?: DoxygenPageBool
  new?: DoxygenPageBool
  noDiscard?: DoxygenPageBool
  noexcept?: DoxygenPageBool
  noExceptExpression?: string
  optional?: DoxygenPageBool
  privateGettable?: DoxygenPageBool
  privateSettable?: DoxygenPageBool
  property?: DoxygenPageBool
  prot?: DoxygenPageProtectionKind
  protectedGettable?: DoxygenPageBool
  protectedSettable?: DoxygenPageBool
  raise?: DoxygenPageBool
  readable?: DoxygenPageBool
  readonly?: DoxygenPageBool
  refQual?: DoxygenPageRefQualifierKind
  removable?: DoxygenPageBool
  remove?: DoxygenPageBool
  required?: DoxygenPageBool
  sealed?: DoxygenPageBool
  settable?: DoxygenPageBool
  static?: DoxygenPageBool
  strong?: DoxygenPageBool
  transient?: DoxygenPageBool
  virt?: DoxygenPageVirtualKind
  volatile?: DoxygenPageBool
  writable?: DoxygenPageBool
  argsString?: string
  bitField?: string
  briefdescription?: DoxygenPageDescription
  definition?: string
  detaileddescription?: DoxygenPageDescription
  enumValue?: DoxygenPageEnumValue[] | string
  exceptions?: DoxygenPageLinkedText
  inBodyDescription?: DoxygenPageDescription
  initializer?: DoxygenPageLinkedText | string | number
  location?: DoxygenPageLocation
  name?: string
  param?: DoxygenPageParam[]
  qualifiedName?: string
  qualifier?: string[]
  read?: string
  referencedBy?: DoxygenPageReference[]
  references?: DoxygenPageReference[]
  reimplementedBy?: DoxygenPageReimplement[]
  reimplements?: DoxygenPageReimplement[]
  requiresClause?: DoxygenPageLinkedText
  templateParamList?: DoxygenPageTemplateParamList
  type?: DoxygenPageLinkedText | string
  write?: string
}
export interface DoxygenPageEnumValue {
  id?: string
  prot?: DoxygenPageProtectionKind
  briefdescription?: DoxygenPageDescription
  detaileddescription?: DoxygenPageDescription
  initializer?: DoxygenPageLinkedText | string | number
  name?: string
}
export interface DoxygenPageParam {
  array?: string
  attributes?: string
  briefdescription?: DoxygenPageDescription
  declName?: string
  defName?: string
  defVal?: DoxygenPageLinkedText
  type?: DoxygenPageLinkedText | string
  typeConstraint?: DoxygenPageLinkedText
}
export interface DoxygenPageReference {
  compoundRef?: string
  endLine?: number
  refid?: string
  href?: string
  startLine?: number
}
export interface DoxygenPageReimplement {
  refid?: string
  href?: string
}
export interface DoxygenPageTemplateParamList {
  param?: DoxygenPageParam[]
}
export interface DoxygenPageTableOfContents {
  tableOfContents?: DoxygenPageTableOfContents[]
  tocSect?: DoxygenPageTableOfContentsKind[]
}
export interface DoxygenPageTableOfContentsKind {
  docs?: DoxygenPageTableOfContentsName
  name?: string
  reference?: string
  tableOfContents?: DoxygenPageTableOfContents[]
}
export interface DoxygenPageTableOfContentsName {
  para?: (DoxygenPageDocPara | string)[]
}
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
export type DoxygenIndexCompoundKind = "category" | "class" | "concept" | "dir" | "example" | "exception" | "file" | "group" | "interface" | "module" | "namespace" | "page" | "protocol" | "struct" | "type" | "union"
export type DoxygenIndexMemberKind = "dcop" | "define" | "enum" | "enumvalue" | "event" | "friend" | "function" | "property" | "prototype" | "signal" | "slot" | "typedef" | "variable"

export {}
