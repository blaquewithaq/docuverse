import type { X2jOptions } from "fast-xml-parser"
import type { Doxygen } from "./types"
import { XMLParser } from "fast-xml-parser"

export * from "./types"

/**
 * Type of XML document being parsed.
 */
type DoxygenType = "index" | "page"

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
    transformAttributeName: {},
    attributeValueProcessor: undefined,
    transformTagName: {},
    tagValueProcessor: undefined,
    updateTag: {},
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
      "compound",
      "member",
    ],
    transformAttributeName: {
      kindref: "kindRef",
      refkind: "refKind",
    },
    attributeValueProcessor: (_attrName, attrValue) => {
      return attrValue
    },
    transformTagName: {},
    tagValueProcessor: (_tagName, tagValue) => {
      return tagValue
    },
    updateTag: {
      doxygenindex: "index",
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
      "compoundDef",

      "baseCompoundRef",
      "derivedCompoundRef",
      "includedBy",
      "includes",
      "innerClass",
      "innerConcept",
      "innerDir",
      "innerFile",
      "innerGroup",
      "innerModule",
      "innerNamespace",
      "innerPage",
      "qualifier",
      "sectionDef",

      "internal",
      "para",
      "sect1",
      "sect2",
      "sect3",
      "sect4",
      "sect5",
      "sect6",

      "anchor",
      "blockquote",
      "bold",
      "center",
      "cite",
      "computerOutput",
      "copyDoc",
      "del",
      "details",
      "diaFile",
      "docBookOnly",
      "dot",
      "dotfile",
      "emoji",
      "emphasis",
      "formula",
      "heading",
      "hruler",
      "htmlOnly",
      "image",
      "indexEntry",
      "ins",
      "itemizedList",
      "javadocCode",
      "javadocLiteral",
      "language",
      "latexOnly",
      "linebreak",
      "manOnly",
      "msc",
      "mscfile",
      "orderedList",
      "parameterList",
      "parBlock",
      "plantUML",
      "plantUMLFile",
      "preformatted",
      "programListing",
      "ref",
      "rtfOnly",
      "s",
      "simpleSect",
      "small",
      "strike",
      "subscript",
      "superscript",
      "table",
      "title",
      "tocList",
      "uLink",
      "underline",
      "variableList",
      "verbatim",
      "xmlOnly",
      "xRefSect",

      "listItem",
      "parameterItem",
      "parameterNameList",
      "parameterName",
      "parameterType",
      "codeLine",
      "highlight",
      "sp",
      "row",
      "entry",
      "tocItem",
      "varListEntry",
      "xRefTitle",
      "node",
      "childNode",
      "edgeLabel",
      "export",
      "member",
      "memberDef",
      "enumValue",
      "param",
      "referencedBy",
      "references",
      "reimplementedBy",
      "reimplements",

      "tableOfContents",
      "tocSect",
    ],
    transformAttributeName: {
      kindref: "kindRef",
      refkind: "refKind",
    },
    attributeValueProcessor: (_attrName, attrValue) => {
      return attrValue
    },
    transformTagName: {},
    tagValueProcessor: (_tagName, tagValue) => {
      return tagValue
    },
    updateTag: {
      compounddef: "compoundDef",
      basecompoundref: "baseCompoundRef",
      briefdescription: "briefDescription",
      collaborationgraph: "collaborationGraph",
      compoundname: "compoundName",
      derivedcompoundref: "derivedCompoundRef",
      detaileddescription: "detailedDescription",
      incdepgraph: "incDepGraph",
      includedby: "includedBy",
      inheritancegraph: "inheritanceGraph",
      innerclass: "innerClass",
      innerconcept: "innerConcept",
      innerdir: "innerDir",
      innerfile: "innerFile",
      innergroup: "innerGroup",
      innermodule: "innerModule",
      innernamespace: "innerNamespace",
      innerpage: "innerPage",
      invincdepgraph: "invIncDepGraph",
      listofallmembers: "listOfAllMembers",
      programlisting: "programListing",
      requiresclause: "requiresClause",
      sectiondef: "sectionDef",
      tableofcontents: "tableOfContents",
      templateparamlist: "templateParamList",
      computeroutput: "computerOutput",
      copydoc: "copyDoc",
      diafile: "diaFile",
      docbookonly: "docBookOnly",
      htmlonly: "htmlOnly",
      indexentry: "indexEntry",
      itemizedlist: "itemizedList",
      javadoccode: "javadocCode",
      javadocliteral: "javadocLiteral",
      latexonly: "latexOnly",
      manonly: "manOnly",
      orderedlist: "orderedList",
      parameterlist: "parameterList",
      parblock: "parBlock",
      plantuml: "plantUML",
      plantumlfile: "plantUMLFile",
      rtfonly: "rtfOnly",
      simplesect: "simpleSect",
      toclist: "tocList",
      ulink: "uLink",
      variablelist: "variableList",
      xmlonly: "xmlOnly",
      xrefsect: "xRefSect",
      colspan: "colSpan",
      rowspan: "rowSpan",
      primaryie: "primary",
      secondaryie: "secondary",
      langid: "langId",
      parameteritem: "parameterItem",
      parameterdescription: "parameterDescription",
      parameternamelist: "parameterNameList",
      parametername: "parameterName",
      parametertype: "parameterType",
      codeline: "codeLine",
      tocitem: "tocItem",
      listitem: "listItem",
      varlistentry: "varListEntry",
      xrefdescription: "xRefDescription",
      xreftitle: "xRefTitle",
      childnode: "childNode",
      edgelabel: "edgeLabel",
      ambiguityscope: "ambiguityScope",
      bodyend: "bodyEnd",
      bodyfile: "bodyFile",
      bodystart: "bodyStart",
      declcolumn: "declColumn",
      declfile: "declFile",
      declline: "declLine",
      memberdef: "memberDef",
      consteval: "constEval",
      constexpr: "constExpr",
      constinit: "constInit",
      initonly: "initOnly",
      maybeambiguous: "maybeAmbiguous",
      maybedefault: "maybeDefault",
      maybevoid: "maybeVoid",
      nodiscard: "noDiscard",
      noexceptexpression: "noExceptExpression",
      privategettable: "privateGettable",
      privatesettable: "privateSettable",
      protectedgettable: "protectedGettable",
      protectedsettable: "protectedSettable",
      refqual: "refQual",
      argsstring: "argsString",
      bitfield: "bitField",
      enumvalue: "enumValue",
      inbodydescription: "inBodyDescription",
      qualifiedname: "qualifiedName",
      referencedby: "referencedBy",
      reimplementedby: "reimplementedBy",
      declname: "declName",
      defname: "defName",
      defval: "defVal",
      typeconstraint: "typeConstraint",
      compoundref: "compoundRef",
      endline: "endLine",
      startline: "startLine",
      tocsect: "tocSect",
    },
  }
}

/**
 * Removes undefined and empty string values from a JSON object.
 * This function recursively traverses the object and removes any properties
 * that are undefined or empty strings.
 * @param json The JSON object to clean.
 * @returns The updated Doxygen JSON object with undefined and empty string values removed.
 */
function removeUndefined(json: Doxygen): Doxygen {
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
 * Fixes links in the Doxygen JSON object.
 * This function updates the `refid` and `member.refid` properties
 * to ensure they are correctly formatted.
 * @param json The Doxygen JSON object to fix.
 * @returns The updated Doxygen JSON object with fixed links.
 */
// function fixLinks(json: Doxygen): Doxygen {
//   if ("index" in json) {
//     json = {
//       ...json,
//       index: {
//         ...json.index,
//         compound: json.index?.compound?.map(compound => ({
//           ...compound,
//           refid: compound.name || compound.refid || "",
//           member: compound.member?.map(member => ({
//             ...member,
//             refid: `${compound.name}#${member.name}` || member.refid || "",
//           })),
//         })),
//       },
//     }
//   }
//   else if ("doxygen" in json) {
//     json = {
//       ...json,
//       doxygen: {
//         ...json.doxygen,
//         compoundDef: json.doxygen?.compoundDef?.map(compound => ({
//           ...compound,
//           refid: compound.name || compound.refid || "",
//           memberDef: compound.memberDef?.map(member => ({
//             ...member,
//             refid: `${compound.name}#${member.name}` || member.refid || "",
//           })),
//         })),
//       },
//     }
//   }

//   return json
// }

/**
 * Options for configuring the XML parser.
 * This interface extends the `X2jOptions` from the `fast-xml-parser` library
 * It allows customization of how XML is parsed into a JavaScript object.
 */
export interface XMLParserOptions extends X2jOptions {}

/**
 *  Parses a Doxygen XML document and returns it as a JavaScript object.
 *  @param xml XML string to parse
 *  @param options Optional configuration for the XML parser.
 *  @returns Parsed XML document as a JavaScript object.
 */
export function useDoxygenParser(xml: string, options?: XMLParserOptions): { data?: Doxygen, error?: string } {
  if (!xml.startsWith("<?xml")) {
    return { data: undefined, error: "Invalid xml source code." }
  }

  let docType: DoxygenType = "page"

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

      if (jPath.includes("doxygenindex")) {
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

      if (jPath.includes("index")) {
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

      if (docType === "index") {
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

      if (jPath.includes("doxygenindex")) {
        newValue = indexOptions().attributeValueProcessor?.(_attrName, newValue)
      }
      else {
        newValue = pageOptions().attributeValueProcessor?.(_attrName, newValue)
      }

      return newValue
    },
    transformTagName: (tagName) => {
      const mapping: Record<string, string> = Object.assign({}, globalOptions().transformTagName)

      if (docType === "index") {
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

      if (jPath.includes("doxygenindex")) {
        newValue = indexOptions().tagValueProcessor?.(tagName, tagValue)
      }
      else {
        newValue = pageOptions().tagValueProcessor?.(tagName, tagValue)
      }

      return newValue
    },
    updateTag(tagName, jPath, _attributes) {
      const mapping: Record<string, string> = Object.assign({}, globalOptions().updateTag)

      if (jPath.includes("doxygenindex")) {
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
  let json = parser.parse(xml) as Doxygen
  json = removeUndefined(json)

  return { data: json, error: undefined }
}
