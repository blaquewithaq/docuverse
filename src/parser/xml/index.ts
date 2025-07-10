import type { X2jOptions } from "fast-xml-parser"
import type { XMLDocument } from "./types"
import { XMLParser } from "fast-xml-parser"

export * from "./types"

/**
 * Type of XML document being parsed.
 */
type XMLDocumentType = "doxyfile" | "index" | "page"

interface InternalOptions {
  /**
   * Attributes to ignore during parsing.
   * These attributes will not be included in the resulting object.
   */
  ignoreAttributes: string[]
  /**
   * Tags that should be treated as arrays.
   * If a tag appears multiple times, it will be parsed as an array.
   */
  isArray: string[]
  transformAttributeName: Record<string, string>
  /**
   * Function to process attribute values.
   * This function can modify the value of an attribute before it is added to the object.
   */
  attributeValueProcessor?: (attrName: string, attrValue: unknown) => unknown
  /**
   * Function to transform tag names.
   * This function can modify the name of a tag before it is added to the object.
   */
  transformTagName: Record<string, string>
  /**
   * Function to process tag values.
   * This function can modify the value of a tag before it is added to the object.
   */
  tagValueProcessor?: (tagName: string, tagValue: unknown) => unknown
  /**
   * Function to update tag names.
   * This function can modify the name of a tag based on its attributes and path.
   */
  updateTag: Record<string, string>
}

/**
 * Returns the default options for parsing XML documents.
 * These options are used to configure the XML parser.
 * @returns Default options for XML parsing.
 */
function globalOptions(): InternalOptions {
  return {
    ignoreAttributes: [
      "noNamespaceSchemaLocation",
      "version",
    ],
    isArray: [],
    transformAttributeName: {
      refid: "href",
    },
    attributeValueProcessor: undefined,
    transformTagName: {},
    tagValueProcessor: undefined,
    updateTag: {},
  }
}

/**
 * Returns the options for parsing a Doxyfile XML document.
 * These options are used to configure the XML parser specifically for Doxyfile documents.
 * @returns Options for parsing Doxyfile XML documents.
 */
function doxyfileOptions(): InternalOptions {
  return {
    ignoreAttributes: [],
    isArray: [
      "options",
      "values",
    ],
    transformAttributeName: {},
    attributeValueProcessor: undefined,
    transformTagName: {},
    tagValueProcessor: undefined,
    updateTag: {
      option: "options",
      value: "values",
    },
  }
}

/**
 * Returns the options for parsing a Doxygen index XML document.
 * These options are used to configure the XML parser specifically for Doxygen index documents.
 * @returns Options for parsing Doxygen index XML documents.
 */
function indexOptions(): InternalOptions {
  return {
    ignoreAttributes: [],
    isArray: [
      "pages",
      "members",
    ],
    transformAttributeName: {},
    attributeValueProcessor: undefined,
    transformTagName: {},
    tagValueProcessor: undefined,
    updateTag: {
      doxygenindex: "index",
      compound: "pages",
      member: "members",
    },
  }
}

/**
 * Returns the options for parsing a Doxygen page XML document.
 * These options are used to configure the XML parser specifically for Doxygen page documents.
 * @returns Options for parsing Doxygen page XML documents.
 */
function pageOptions(): InternalOptions {
  return {
    ignoreAttributes: [],
    isArray: [
      "anchor",
      "baseCompoundReferences",
      "blockquote",
      "bold",
      "center",
      "children",
      "cite",
      "codeLines",
      "computerOutput",
      "contents",
      "copyDoc",
      "del",
      "derivedCompoundReferences",
      "details",
      "diaFile",
      "docbookOnly",
      "dot",
      "dotFile",
      "edgeLabels",
      "emoji",
      "emphasis",
      "entries",
      "enumValue",
      "exports",
      "formula",
      "heading",
      "hRuler",
      "highlights",
      "htmlOnly",
      "image",
      "includedBy",
      "includes",
      "indexEntry",
      "innerClasses",
      "innerConcepts",
      "innerDirs",
      "innerFiles",
      "innerGroups",
      "innerModules",
      "innerNamespaces",
      "innerPages",
      "ins",
      "internals",
      "itemizedList",
      "items",
      "javadocCode",
      "javadocLiteral",
      "latexOnly",
      "linebreak",
      "list",
      "manOnly",
      "memberDefs",
      "members",
      "msc",
      "names",
      "nodes",
      "orderedList",
      "parBlock",
      "paragraphs",
      "parameterList",
      "parameters",
      "plantuml",
      "plantumlFile",
      "preformatted",
      "programListing",
      "qualifiers",
      "ref",
      "referencedBy",
      "references",
      "reimplementedBy",
      "reimplements",
      "rows",
      "rtfOnly",
      "s",
      "sections",
      "simpleSection",
      "small",
      "sp",
      "strike",
      "subscript",
      "superscript",
      "table",
      "title",
      "titles",
      "tocList",
      "types",
      "uLink",
      "underline",
      "variableList",
      "verbatim",
      "xRefSect",
      "xmlOnly",
    ],
    transformAttributeName: {
      file: "href",
      lang: "language",
    },
    attributeValueProcessor: (_attrName, attrValue) => {
      if (typeof attrValue === "string" && attrValue.toLowerCase() === "yes") {
        return true
      }
      else if (typeof attrValue === "string" && attrValue.toLowerCase() === "no") {
        return false
      }
      if (typeof attrValue === "string" && attrValue.toLowerCase() === "func") {
        return "function"
      }

      return attrValue
    },
    transformTagName: {},
    tagValueProcessor: (_tagName, tagValue) => {
      if (typeof tagValue === "string" && tagValue.toLowerCase() === "yes") {
        return true
      }
      else if (typeof tagValue === "string" && tagValue.toLowerCase() === "no") {
        return false
      }

      return tagValue
    },
    updateTag: {
      // Page
      doxygen: "page",
      compounddef: "items",

      // CompoundRefType -> PageBaseCompoundReference
      prot: "protection",
      refid: "href",
      virt: "virtual",

      // ChildnodeType -> PageChildnode
      edgelabel: "edgeLabels",

      // CodelineType -> PageCodeLine
      lineno: "lineno",
      refkind: "refKind",
      highlight: "highlights",

      // DocEntryType -> PageDocEntry
      valign: "valign",
      para: "paragraphs",
      rowspan: "rowSpan",

      // DocListType -> PageDocList
      listitem: "items",

      // DocParamListType -> PageDocParameterList
      parameteritem: "items",

      // DocParamListItem -> PageDocParameterListItem
      parameterdescription: "description",
      parameternamelist: "list",

      // DocParamNameList -> PageDocParameterNameList
      parametername: "names",
      parametertype: "types",

      // DocParaType -> PageDocParagraph
      blockquote: "blockquote",
      copydoc: "copyDoc",
      diafile: "diaFile",
      dotfile: "dotFile",
      hruler: "hRuler",
      indexentry: "indexEntry",
      itemizedlist: "itemizedList",
      javadoccode: "javadocCode",
      javadocliteral: "javadocLiteral",
      orderedlist: "orderedList",
      parameterlist: "parameterList",
      parblock: "parBlock",
      plantumlfile: "plantumlFile",
      programlisting: "programListing",
      simplesect: "simpleSection",
      toclist: "tocList",
      variablelist: "variableList",
      xrefsect: "xRefSect",
      computeroutput: "computerOutput",
      docbookonly: "docbookOnly",
      htmlonly: "htmlOnly",
      latexonly: "latexOnly",
      manonly: "manOnly",
      rtfonly: "rtfOnly",
      ulink: "uLink",
      xmlonly: "xmlOnly",

      // RefTextType -> PageDocReferenceText
      // DocRefTextType -> PageDocReferenceText
      kindref: "kindReference",
      external: "external",

      // DocTableType -> PageDocTable
      cols: "columnCount",
      rows: "rowCount",
      row: "rows",

      // DocTocListType -> PageDocTocList
      tocitem: "items",

      // DocURLLink -> PageDocURLLink
      url: "href",

      // DocVariableListType -> PageDocVariableList
      varlistentry: "entries",

      // DocXRefSectType -> PageDocXRefSect
      xrefdescription: "description",
      xreftitle: "titles",

      // EnumvalueType -> PageEnumValue
      briefdescription: "briefDescription",
      detaileddescription: "detailedDescription",

      // ExportsType -> PageExports
      export: "exports",

      // GraphType -> PageGraph
      node: "nodes",

      // HighlightType -> PageHighlight
      class: "class",

      // CompounddefType -> PageItem
      compoundname: "name",
      basecompoundref: "baseCompoundReferences",
      derivedcompoundref: "derivedCompoundReferences",
      collaborationgraph: "collaborationGraph",
      incdepgraph: "includeDependencyGraph",
      includedby: "includedBy",
      inheritancegraph: "inheritanceGraph",
      innerclass: "innerClasses",
      innerconcept: "innerConcepts",
      innerdir: "innerDirs",
      innerfile: "innerFiles",
      innergroup: "innerGroups",
      innermodule: "innerModules",
      innernamespace: "innerNamespaces",
      innerpage: "innerPages",
      invincdepgraph: "inverseIncludeDependencyGraph",
      listofallmembers: "listOfAllMembers",
      qualifier: "qualifiers",
      requiresclause: "requiresClause",
      sectiondef: "sections",
      tableofcontents: "tableOfContents",
      templateparamlist: "templateParamList",

      // ListofallmembersType -> PageListOfAllMembers
      member: "members",

      // LocationType -> PageLocation
      file: "href",

      // MemberdefType -> PageMemberDef
      argsstring: "argsString",
      bitfield: "bitField",
      enumvalue: "enumValue",
      inbodydescription: "inBodyDescription",
      initonly: "initOnly",
      maybeambiguous: "maybeAmbiguous",
      maybedefault: "maybeDefault",
      maybevoid: "maybeVoid",
      nodiscard: "noDiscard",
      noexceptexpression: "noExceptExpression",
      param: "parameters",
      privategettable: "privateGettable",
      privatesettable: "privateSettable",
      protectedgettable: "protectedGettable",
      protectedsettable: "protectedSettable",
      qualifiedname: "qualifiedName",
      referencedby: "referencedBy",
      refqual: "refQualifier",
      reimplementedby: "reimplementedBy",
      static: "static",

      // MemberRefType -> PageMemberReference
      ambiguityscope: "ambiguityScope",

      // NodeType -> PageNode
      childnode: "children",

      // DescriptionType -> PageDescription
      internal: "internals",
      sect1: "sections",
      sect2: "sections",
      sect3: "sections",
      sect4: "sections",
      sect5: "sections",
      sect6: "sections",

      // ParamType -> PageParameter
      declname: "declName",
      defname: "defName",
      defval: "defVal",
      typeconstraint: "typeConstraint",

      // ListingType -> PageProgramListing
      codeline: "codeLines",

      // SectiondefType -> PageSection
      memberdef: "memberDefs",

      // TableofcontentsType -> PageTableOfContents
      tocsect: "sections",
    },
  }
}

/**
 * Removes undefined and empty string values from a JSON object.
 * This function recursively traverses the object and removes any properties
 * that are undefined or empty strings.
 * @param json The JSON object to clean.
 * @returns A new JSON object with undefined and empty string values removed.
 */
function removeUndefined(json: Document): Document {
  const clean = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj
        .map(clean)
        .filter(item => item !== undefined && item !== "")
    }

    if (typeof obj === "object" && obj !== null) {
      const newObj: Record<string, any> = {}
      for (const key in obj) {
        const value = clean(obj[key])
        if (value !== undefined && value !== "") {
          newObj[key] = value
        }
      }
      return newObj
    }

    return obj
  }

  return clean(json)
}

/**
 * Options for configuring the XML parser.
 * This interface extends the `X2jOptions` from the `fast-xml-parser` library
 * It allows customization of how XML is parsed into a JavaScript object.
 */
export interface XMLParserOptions extends X2jOptions {}

/**
 *  Parses an XML string into a JavaScript object.
 *  @param xml XML string to parse
 *  @param options Optional configuration for the XML parser.
 *  @returns Parsed XML document as a JavaScript object.
 */
export function useXmlParser(xml: string, options?: XMLParserOptions): XMLDocument {
  let docType: XMLDocumentType = "page"

  const defaultOptions: X2jOptions = {
    allowBooleanAttributes: true,
    alwaysCreateTextNode: false,
    attributeNamePrefix: "",
    attributesGroupName: false,
    captureMetaData: false,
    cdataPropName: "",
    commentPropName: false,
    htmlEntities: true,
    ignoreDeclaration: true,
    ignorePiTags: false,
    numberParseOptions: {
      eNotation: true,
      hex: true,
      leadingZeros: true,
      skipLike: undefined,
    },
    parseAttributeValue: true,
    parseTagValue: true,
    preserveOrder: false,
    processEntities: true,
    removeNSPrefix: true,
    stopNodes: [],
    textNodeName: "text",
    trimValues: true,
    unpairedTags: [],

    ignoreAttributes: (attrName, jPath) => {
      const mapping = []
      mapping.push(...globalOptions().ignoreAttributes)

      if (jPath.includes("doxyfile")) {
        docType = "doxyfile"
        mapping.push(...doxyfileOptions().ignoreAttributes)
      }
      else if (jPath.includes("doxygenindex")) {
        docType = "index"
        mapping.push(...indexOptions().ignoreAttributes)
      }
      else {
        docType = "page"
        mapping.push(...pageOptions().ignoreAttributes)
      }

      if (mapping.includes(attrName)) {
        return true
      }

      return false
    },
    isArray: (tagName, jPath, _isLeafNode, _isAttribute) => {
      const mapping = []
      mapping.push(...globalOptions().isArray)

      if (jPath.includes("doxyfile")) {
        docType = "doxyfile"
        mapping.push(...doxyfileOptions().isArray)
      }
      else if (jPath.includes("index")) {
        docType = "index"
        mapping.push(...indexOptions().isArray)
      }
      else {
        docType = "page"
        mapping.push(...pageOptions().isArray)
      }

      if (mapping.includes(tagName)) {
        return true
      }

      return false
    },

    transformAttributeName: (attributeName) => {
      const mapping: Record<string, string> = Object.assign({}, globalOptions().transformAttributeName)

      if (docType === "doxyfile") {
        Object.assign(mapping, doxyfileOptions().transformAttributeName)
      }
      else if (docType === "index") {
        Object.assign(mapping, indexOptions().transformAttributeName)
      }
      else {
        Object.assign(mapping, pageOptions().transformAttributeName)
      }

      if (attributeName in mapping) {
        return mapping[attributeName] || attributeName
      }

      return attributeName
    },
    attributeValueProcessor(_attrName, attrValue, jPath) {
      let newValue = globalOptions().attributeValueProcessor
        ? globalOptions().attributeValueProcessor?.(_attrName, attrValue)
        : attrValue

      if (jPath.includes("doxyfile")) {
        newValue = doxyfileOptions().attributeValueProcessor?.(_attrName, newValue)
      }
      else if (jPath.includes("doxygenindex")) {
        newValue = indexOptions().attributeValueProcessor?.(_attrName, newValue)
      }
      else {
        newValue = pageOptions().attributeValueProcessor?.(_attrName, newValue)
      }

      return newValue
    },
    transformTagName: (tagName) => {
      const mapping: Record<string, string> = Object.assign({}, globalOptions().transformTagName)

      if (docType === "doxyfile") {
        Object.assign(mapping, doxyfileOptions().transformTagName)
      }
      else if (docType === "index") {
        Object.assign(mapping, indexOptions().transformTagName)
      }
      else {
        Object.assign(mapping, pageOptions().transformTagName)
      }

      if (tagName in mapping) {
        return mapping[tagName] || tagName
      }

      return tagName
    },
    tagValueProcessor(tagName, tagValue, jPath, _isLeafNode, _hasAttributes) {
      let newValue = globalOptions().tagValueProcessor
        ? globalOptions().tagValueProcessor?.(tagName, tagValue)
        : tagValue

      if (jPath.includes("doxyfile")) {
        newValue = doxyfileOptions().tagValueProcessor?.(tagName, tagValue)
      }
      else if (jPath.includes("doxygenindex")) {
        newValue = indexOptions().tagValueProcessor?.(tagName, tagValue)
      }
      else {
        newValue = pageOptions().tagValueProcessor?.(tagName, tagValue)
      }

      return newValue
    },
    updateTag(tagName, jPath, _attributes) {
      const mapping: Record<string, string> = Object.assign({}, globalOptions().updateTag)

      if (jPath.includes("doxyfile")) {
        docType = "doxyfile"
        Object.assign(mapping, doxyfileOptions().updateTag)
      }
      else if (jPath.includes("doxygenindex")) {
        docType = "index"
        Object.assign(mapping, indexOptions().updateTag)
      }
      else {
        docType = "page"
        Object.assign(mapping, pageOptions().updateTag)
      }

      let newName

      if (tagName in mapping) {
        newName = mapping[tagName] || tagName
      }
      else {
        newName = tagName
      }

      return newName
    },

    ...options,
  }

  const parser = new XMLParser(defaultOptions)
  const json = parser.parse(xml) as XMLDocument

  return removeUndefined(json)
}
