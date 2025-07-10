import { isAbsolute, join } from "node:path"

/**
 * Doxygen configuration options.
 */
export interface DoxygenOptions {
  abbreviateBrief?: string[]
  aliases?: string[]
  allExternals?: boolean
  allowUnicodeNames?: boolean
  alphabeticalIndex?: boolean
  alwaysDetailedSections?: boolean
  autolinkIgnoreWords?: string[]
  autolinkSupport?: boolean
  binaryToc?: boolean
  briefMemberDescription?: boolean
  builtinStlSupport?: boolean
  callGraph?: boolean
  callerGraph?: boolean
  caseSensitiveNames?: boolean
  chmFile?: string
  chmIndexEncoding?: string
  citeBibFiles?: string[]
  clangAddIncludePaths?: boolean
  clangAssistedParsing?: boolean
  clangDatabasePath?: string
  clangOptions?: string
  classGraph?: boolean
  collaborationGraph?: boolean
  compactLatex?: boolean
  compactRtf?: boolean
  cppCliSupport?: boolean
  createSubDirs?: boolean
  createSubDirsLevel?: number
  diaFileDirs?: string[]
  diaPath?: string
  directoryGraph?: boolean
  directoryGraphMaxDepth?: number
  disableIndex?: boolean
  distributeGroupDoc?: boolean
  docbookOutput?: string
  docsetBundleId?: string
  docsetFeedName?: string
  docsetFeedUrl?: string
  docsetPublisherId?: string
  docsetPublisherName?: string
  dotCleanup?: boolean
  dotCommonAttributes?: string
  dotEdgeAttributes?: string
  dotFileDirs?: string[]
  dotFontPath?: string
  dotGraphMaxNodes?: number
  dotImageFormat?: string
  dotMultiTargets?: boolean
  dotNodeAttributes?: string
  dotNumThreads?: number
  dotPath?: string
  dotUmlDetails?: boolean
  dotWrapThreshold?: number
  doxyFileEncoding?: string
  eclipseDocId?: string
  enablePreprocessing?: boolean
  enabledSections?: string[]
  enumValuesPerLine?: number
  examplePath?: string
  examplePatterns?: string[]
  exampleRecursive?: boolean
  exclude?: string[]
  excludePatterns?: string[]
  excludeSymbols?: string[]
  excludeSymlinks?: boolean
  expandAsDefined?: string[]
  expandOnlyPredefined?: boolean
  extensionMapping?: string[]
  externalGroups?: boolean
  externalLinksInNewWindow?: boolean
  externalPages?: boolean
  externalSearch?: boolean
  externalSearchId?: string
  externalToolPath?: string
  extraPackages?: string[]
  extraSearchMappings?: string[]
  extractAll?: boolean
  extractAnonymousNamespaces?: boolean
  extractLocalClasses?: boolean
  extractLocalMethods?: boolean
  extractPackage?: boolean
  extractPrivate?: boolean
  extractPrivateVirtual?: boolean
  extractStatic?: boolean
  filePatterns?: string[]
  fileVersionFilter?: string
  filterPatterns?: string[]
  filterSourceFiles?: boolean
  filterSourcePatterns?: string[]
  forceLocalIncludes?: boolean
  formulaFontSize?: number
  formulaMacroFile?: string
  fortranCommentAfter?: number
  fullPathNames?: boolean
  fullSidebar?: boolean
  generateAutogenDefinitions?: boolean
  generateBugList?: boolean
  generateChi?: boolean
  generateDeprecatedList?: boolean
  generateDocbook?: boolean
  generateDocset?: boolean
  generateEclipseHelp?: boolean
  generateHtml?: boolean
  generateHtmlHelp?: boolean
  generateLatex?: boolean
  generateLegend?: boolean
  generateMan?: boolean
  generatePerlModule?: boolean
  generateQhp?: boolean
  generateRtf?: boolean
  generateSqlite3?: boolean
  generateTagFile?: string
  generateTestList?: boolean
  generateTodoList?: boolean
  generateTreeView?: boolean
  generateXml?: boolean
  graphicalHierarchy?: boolean
  groupGraphs?: boolean
  groupNestedCompounds?: boolean
  haveDot?: boolean
  hhcLocation?: string
  hideCompoundReference?: boolean
  hideFriendCompounds?: boolean
  hideInBodyDocs?: boolean
  hideScopeNames?: boolean
  hideUndocumentedClasses?: boolean
  hideUndocumentedMembers?: boolean
  hideUndocumentedNamespaces?: boolean
  hideUndocumentedRelations?: boolean
  htmlCodeFolding?: boolean
  htmlColorStyle?: string
  htmlColorStyleGamma?: number
  htmlColorStyleHue?: number
  htmlColorStyleSaturation?: number
  htmlCopyToClipboard?: boolean
  htmlDynamicMenus?: boolean
  htmlDynamicSections?: boolean
  htmlExtraFiles?: string[]
  htmlExtraStylesheets?: string[]
  htmlFileExtension?: string
  htmlFooter?: string
  htmlFormulaFormat?: string
  htmlHeader?: string
  htmlIndexNumEntries?: number
  htmlOutput?: string
  htmlProjectCookie?: string
  htmlStylesheet?: string
  idlPropertySupport?: boolean
  ignorePrefix?: string
  imagePath?: string[]
  implicitDirectoryDocs?: boolean
  includeFilePatterns?: string[]
  includeGraph?: boolean
  includePath?: string[]
  includedByGraph?: boolean
  inheritDocs?: boolean
  inlineGroupedClasses?: boolean
  inlineInfo?: boolean
  inlineInheritedMembers?: boolean
  inlineSimpleStructs?: boolean
  inlineSources?: boolean
  input?: string[]
  inputEncoding?: string
  inputFileEncoding?: string
  inputFilter?: string
  interactiveSvg?: boolean
  internalDocs?: boolean
  javadocAutoBrief?: boolean
  javadocBanner?: boolean
  latexBatchMode?: boolean
  latexBibliographyStyle?: string
  latexCommandName?: string
  latexEmojiDirectory?: string
  latexExtraFiles?: string[]
  latexExtraStylesheet?: string
  latexFooter?: string
  latexHeader?: string
  latexHideIndices?: boolean
  latexMakeindexCommand?: string
  latexOutput?: string
  layoutFile?: string
  lookupCacheSize?: number
  macroExpansion?: boolean
  makeindexCommandName?: string
  manExtension?: string
  manLinks?: boolean
  manOutput?: string
  manSubDir?: string
  markdownIdStyle?: string
  markdownSupport?: boolean
  mathJaxCodeFile?: string
  mathJaxExtensions?: string[]
  mathJaxFormat?: string
  mathJaxRelativePath?: string
  mathJaxVersion?: string
  maxDotGraphDepth?: number
  maxInitializerLines?: number
  mscfileDirs?: string[]
  mscgenTool?: string
  multilineCppIsBrief?: boolean
  numProcessingThreads?: number
  obfuscateEmails?: boolean
  optimizeOutputForC?: boolean
  optimizeOutputForFortran?: boolean
  optimizeOutputForJava?: boolean
  optimizeOutputForSlice?: boolean
  optimizeOutputForVhdl?: boolean
  outputDirectory?: string
  outputLanguage?: string
  pageOutlinePanel?: boolean
  paperType?: string
  pdfHyperlinks?: boolean
  perlModuleLatex?: boolean
  perlModuleMakevarPrefix?: string
  perlModulePretty?: boolean
  plantumlConfigFile?: string
  plantumlFileDirs?: string[]
  plantumlIncludePath?: string[]
  plantumlJarPath?: string
  predefined?: string[]
  projectBrief?: string
  projectIcon?: string
  projectLogo?: string
  projectName?: string
  projectNumber?: string
  pythonDocstring?: boolean
  qchFile?: string
  qhgLocation?: string
  qhpCustomFilterAttributes?: string[]
  qhpCustomFilterName?: string
  qhpNamespace?: string
  qhpSectionFilterAttributes?: string[]
  qhpVirtualFolder?: string
  qtAutoBrief?: boolean
  quiet?: boolean
  recursive?: boolean
  referencedByRelation?: boolean
  referencesLinkSource?: boolean
  referencesRelation?: boolean
  repeatBrief?: boolean
  resolveUnnamedParameters?: boolean
  rtfExtensionsFile?: string
  rtfExtraFiles?: string[]
  rtfHyperlinks?: boolean
  rtfOutput?: string
  rtfStylesheetFile?: string
  searchDataFile?: string
  searchEngine?: boolean
  searchEngineUrl?: string
  searchIncludes?: boolean
  separateMemberPages?: boolean
  serverBasedSearch?: boolean
  shortNames?: boolean
  showEnumValues?: boolean
  showFiles?: boolean
  showGroupedMemberIncludes?: boolean
  showHeaderFile?: boolean
  showIncludeFiles?: boolean
  showNamespaces?: boolean
  showUsedFiles?: boolean
  sipSupport?: boolean
  sitemapUrl?: string
  skipFunctionMacros?: boolean
  sortBriefDocs?: boolean
  sortByScopeName?: boolean
  sortGroupNames?: boolean
  sortMemberConstructorsFirst?: boolean
  sortMemberDocs?: boolean
  sourceBrowser?: boolean
  sourceTooltips?: boolean
  sqlite3Output?: string
  sqlite3RecreateDatabase?: boolean
  strictPrototypeMatching?: boolean
  stripCodeComments?: boolean
  stripFromIncludePath?: string
  stripFromPath?: string
  subgrouping?: boolean
  tabSize?: number
  tagFiles?: string[]
  templateRelations?: boolean
  timestamp?: boolean
  tocExpand?: boolean
  tocIncludeHeadings?: number
  treeViewWidth?: number
  typedefHidesStruct?: boolean
  umlLimitNumFields?: number
  umlLook?: boolean
  umlMaxEdgeLabels?: number
  useMathJax?: boolean
  useMarkdownFileAsMainPage?: string
  usePdfLatex?: boolean
  useHtags?: boolean
  verbatimHeaders?: boolean
  warnAsError?: boolean
  warnFormat?: string
  warnIfDocError?: boolean
  warnIfIncompleteDoc?: boolean
  warnIfUndocumented?: boolean
  warnIfUndocumentedEnumValue?: boolean
  warnLayoutFile?: boolean
  warnLineFormat?: string
  warnLogFile?: string
  warnNoParamDoc?: boolean
  warnings?: boolean
  xmlNamespaceMemberFileScope?: boolean
  xmlOutput?: string
  xmlProgramListing?: boolean
}

const doxygenConfigMapping: Record<keyof DoxygenOptions, string> = {
  abbreviateBrief: "ABBREVIATE_BRIEF",
  aliases: "ALIASES",
  allExternals: "ALLEXTERNALS",
  alphabeticalIndex: "ALPHABETICAL_INDEX",
  allowUnicodeNames: "ALLOW_UNICODE_NAMES",
  alwaysDetailedSections: "ALWAYS_DETAILED_SEC",
  autolinkIgnoreWords: "AUTOLINK_IGNORE_WORDS",
  autolinkSupport: "AUTOLINK_SUPPORT",
  binaryToc: "BINARY_TOC",
  briefMemberDescription: "BRIEF_MEMBER_DESC",
  builtinStlSupport: "BUILTIN_STL_SUPPORT",
  callerGraph: "CALLER_GRAPH",
  callGraph: "CALL_GRAPH",
  caseSensitiveNames: "CASE_SENSE_NAMES",
  chmFile: "CHM_FILE",
  chmIndexEncoding: "CHM_INDEX_ENCODING",
  citeBibFiles: "CITE_BIB_FILES",
  clangAddIncludePaths: "CLANG_ADD_INC_PATHS",
  clangAssistedParsing: "CLANG_ASSISTED_PARSING",
  clangDatabasePath: "CLANG_DATABASE_PATH",
  clangOptions: "CLANG_OPTIONS",
  classGraph: "CLASS_GRAPH",
  collaborationGraph: "COLLABORATION_GRAPH",
  compactLatex: "COMPACT_LATEX",
  compactRtf: "COMPACT_RTF",
  cppCliSupport: "CPP_CLI_SUPPORT",
  createSubDirs: "CREATE_SUBDIRS",
  createSubDirsLevel: "CREATE_SUBDIRS_LEVEL",
  diaFileDirs: "DIAFILE_DIRS",
  diaPath: "DIA_PATH",
  directoryGraph: "DIRECTORY_GRAPH",
  directoryGraphMaxDepth: "DIR_GRAPH_MAX_DEPTH",
  disableIndex: "DISABLE_INDEX",
  distributeGroupDoc: "DISTRIBUTE_GROUP_DOC",
  docbookOutput: "DOCBOOK_OUTPUT",
  docsetBundleId: "DOCSET_BUNDLE_ID",
  docsetFeedName: "DOCSET_FEEDNAME",
  docsetFeedUrl: "DOCSET_FEEDURL",
  docsetPublisherId: "DOCSET_PUBLISHER_ID",
  docsetPublisherName: "DOCSET_PUBLISHER_NAME",
  dotCleanup: "DOT_CLEANUP",
  dotCommonAttributes: "DOT_COMMON_ATTR",
  dotEdgeAttributes: "DOT_EDGE_ATTR",
  dotFileDirs: "DOTFILE_DIRS",
  dotFontPath: "DOT_FONTPATH",
  dotGraphMaxNodes: "DOT_GRAPH_MAX_NODES",
  dotImageFormat: "DOT_IMAGE_FORMAT",
  dotMultiTargets: "DOT_MULTI_TARGETS",
  dotNodeAttributes: "DOT_NODE_ATTR",
  dotNumThreads: "DOT_NUM_THREADS",
  dotPath: "DOT_PATH",
  dotUmlDetails: "DOT_UML_DETAILS",
  dotWrapThreshold: "DOT_WRAP_THRESHOLD",
  doxyFileEncoding: "DOXYFILE_ENCODING",
  eclipseDocId: "ECLIPSE_DOC_ID",
  enabledSections: "ENABLED_SECTIONS",
  enablePreprocessing: "ENABLE_PREPROCESSING",
  enumValuesPerLine: "ENUM_VALUES_PER_LINE",
  examplePath: "EXAMPLE_PATH",
  examplePatterns: "EXAMPLE_PATTERNS",
  exampleRecursive: "EXAMPLE_RECURSIVE",
  exclude: "EXCLUDE",
  excludePatterns: "EXCLUDE_PATTERNS",
  excludeSymbols: "EXCLUDE_SYMBOLS",
  excludeSymlinks: "EXCLUDE_SYMLINKS",
  expandAsDefined: "EXPAND_AS_DEFINED",
  expandOnlyPredefined: "EXPAND_ONLY_PREDEF",
  externalGroups: "EXTERNAL_GROUPS",
  externalLinksInNewWindow: "EXT_LINKS_IN_WINDOW",
  externalPages: "EXTERNAL_PAGES",
  externalSearch: "EXTERNAL_SEARCH",
  externalSearchId: "EXTERNAL_SEARCH_ID",
  externalToolPath: "EXTERNAL_TOOL_PATH",
  extraPackages: "EXTRA_PACKAGES",
  extraSearchMappings: "EXTRA_SEARCH_MAPPINGS",
  extractAll: "EXTRACT_ALL",
  extractAnonymousNamespaces: "EXTRACT_ANON_NSPACES",
  extractLocalClasses: "EXTRACT_LOCAL_CLASSES",
  extractLocalMethods: "EXTRACT_LOCAL_METHODS",
  extractPackage: "EXTRACT_PACKAGE",
  extensionMapping: "EXTENSION_MAPPING",
  extractPrivate: "EXTRACT_PRIVATE",
  extractPrivateVirtual: "EXTRACT_PRIV_VIRTUAL",
  extractStatic: "EXTRACT_STATIC",
  filePatterns: "FILE_PATTERNS",
  fileVersionFilter: "FILE_VERSION_FILTER",
  filterPatterns: "FILTER_PATTERNS",
  filterSourceFiles: "FILTER_SOURCE_FILES",
  filterSourcePatterns: "FILTER_SOURCE_PATTERNS",
  forceLocalIncludes: "FORCE_LOCAL_INCLUDES",
  formulaFontSize: "FORMULA_FONTSIZE",
  formulaMacroFile: "FORMULA_MACROFILE",
  fortranCommentAfter: "FORTRAN_COMMENT_AFTER",
  fullPathNames: "FULL_PATH_NAMES",
  fullSidebar: "FULL_SIDEBAR",
  generateAutogenDefinitions: "GENERATE_AUTOGEN_DEF",
  generateBugList: "GENERATE_BUGLIST",
  generateChi: "GENERATE_CHI",
  generateDeprecatedList: "GENERATE_DEPRECATEDLIST",
  generateDocbook: "GENERATE_DOCBOOK",
  generateDocset: "GENERATE_DOCSET",
  generateEclipseHelp: "GENERATE_ECLIPSEHELP",
  generateHtml: "GENERATE_HTML",
  generateHtmlHelp: "GENERATE_HTMLHELP",
  generateLatex: "GENERATE_LATEX",
  generateLegend: "GENERATE_LEGEND",
  generateMan: "GENERATE_MAN",
  generatePerlModule: "GENERATE_PERLMOD",
  generateQhp: "GENERATE_QHP",
  generateRtf: "GENERATE_RTF",
  generateSqlite3: "GENERATE_SQLITE3",
  generateTagFile: "GENERATE_TAGFILE",
  generateTestList: "GENERATE_TESTLIST",
  generateTodoList: "GENERATE_TODOLIST",
  generateTreeView: "GENERATE_TREEVIEW",
  generateXml: "GENERATE_XML",
  graphicalHierarchy: "GRAPHICAL_HIERARCHY",
  groupGraphs: "GROUP_GRAPHS",
  groupNestedCompounds: "GROUP_NESTED_COMPOUNDS",
  haveDot: "HAVE_DOT",
  hhcLocation: "HHC_LOCATION",
  hideCompoundReference: "HIDE_COMPOUND_REFERENCE",
  hideFriendCompounds: "HIDE_FRIEND_COMPOUNDS",
  hideInBodyDocs: "HIDE_IN_BODY_DOCS",
  hideScopeNames: "HIDE_SCOPE_NAMES",
  hideUndocumentedClasses: "HIDE_UNDOC_CLASSES",
  hideUndocumentedMembers: "HIDE_UNDOC_MEMBERS",
  hideUndocumentedNamespaces: "HIDE_UNDOC_NAMESPACES",
  hideUndocumentedRelations: "HIDE_UNDOC_RELATIONS",
  htmlCodeFolding: "HTML_CODE_FOLDING",
  htmlColorStyle: "HTML_COLORSTYLE",
  htmlColorStyleGamma: "HTML_COLORSTYLE_GAMMA",
  htmlColorStyleHue: "HTML_COLORSTYLE_HUE",
  htmlColorStyleSaturation: "HTML_COLORSTYLE_SAT",
  htmlCopyToClipboard: "HTML_COPY_CLIPBOARD",
  htmlDynamicMenus: "HTML_DYNAMIC_MENUS",
  htmlDynamicSections: "HTML_DYNAMIC_SECTIONS",
  htmlExtraFiles: "HTML_EXTRA_FILES",
  htmlExtraStylesheets: "HTML_EXTRA_STYLESHEET",
  htmlFileExtension: "HTML_FILE_EXTENSION",
  htmlFooter: "HTML_FOOTER",
  htmlFormulaFormat: "HTML_FORMULA_FORMAT",
  htmlHeader: "HTML_HEADER",
  htmlIndexNumEntries: "HTML_INDEX_NUM_ENTRIES",
  htmlOutput: "HTML_OUTPUT",
  htmlProjectCookie: "HTML_PROJECT_COOKIE",
  htmlStylesheet: "HTML_STYLESHEET",
  idlPropertySupport: "IDL_PROPERTY_SUPPORT",
  ignorePrefix: "IGNORE_PREFIX",
  imagePath: "IMAGE_PATH",
  implicitDirectoryDocs: "IMPLICIT_DIR_DOCS",
  includedByGraph: "INCLUDED_BY_GRAPH",
  includeFilePatterns: "INCLUDE_FILE_PATTERNS",
  includeGraph: "INCLUDE_GRAPH",
  includePath: "INCLUDE_PATH",
  inheritDocs: "INHERIT_DOCS",
  inlineGroupedClasses: "INLINE_GROUPED_CLASSES",
  inlineInheritedMembers: "INLINE_INHERITED_MEMB",
  inlineInfo: "INLINE_INFO",
  inlineSimpleStructs: "INLINE_SIMPLE_STRUCTS",
  inlineSources: "INLINE_SOURCES",
  input: "INPUT",
  inputEncoding: "INPUT_ENCODING",
  inputFileEncoding: "INPUT_FILE_ENCODING",
  inputFilter: "INPUT_FILTER",
  interactiveSvg: "INTERACTIVE_SVG",
  internalDocs: "INTERNAL_DOCS",
  javadocAutoBrief: "JAVADOC_AUTOBRIEF",
  javadocBanner: "JAVADOC_BANNER",
  latexBatchMode: "LATEX_BATCHMODE",
  latexBibliographyStyle: "LATEX_BIB_STYLE",
  latexCommandName: "LATEX_CMD_NAME",
  latexEmojiDirectory: "LATEX_EMOJI_DIRECTORY",
  latexExtraFiles: "LATEX_EXTRA_FILES",
  latexExtraStylesheet: "LATEX_EXTRA_STYLESHEET",
  latexFooter: "LATEX_FOOTER",
  latexHeader: "LATEX_HEADER",
  latexHideIndices: "LATEX_HIDE_INDICES",
  latexMakeindexCommand: "LATEX_MAKEINDEX_CMD",
  latexOutput: "LATEX_OUTPUT",
  layoutFile: "LAYOUT_FILE",
  lookupCacheSize: "LOOKUP_CACHE_SIZE",
  macroExpansion: "MACRO_EXPANSION",
  makeindexCommandName: "MAKEINDEX_CMD_NAME",
  manExtension: "MAN_EXTENSION",
  manLinks: "MAN_LINKS",
  manOutput: "MAN_OUTPUT",
  manSubDir: "MAN_SUBDIR",
  markdownIdStyle: "MARKDOWN_ID_STYLE",
  markdownSupport: "MARKDOWN_SUPPORT",
  mathJaxCodeFile: "MATHJAX_CODEFILE",
  mathJaxExtensions: "MATHJAX_EXTENSIONS",
  mathJaxFormat: "MATHJAX_FORMAT",
  mathJaxRelativePath: "MATHJAX_RELPATH",
  mathJaxVersion: "MATHJAX_VERSION",
  maxDotGraphDepth: "MAX_DOT_GRAPH_DEPTH",
  maxInitializerLines: "MAX_INITIALIZER_LINES",
  mscfileDirs: "MSCFILE_DIRS",
  mscgenTool: "MSCGEN_TOOL",
  multilineCppIsBrief: "MULTILINE_CPP_IS_BRIEF",
  numProcessingThreads: "NUM_PROC_THREADS",
  obfuscateEmails: "OBFUSCATE_EMAILS",
  optimizeOutputForC: "OPTIMIZE_OUTPUT_FOR_C",
  optimizeOutputForFortran: "OPTIMIZE_FOR_FORTRAN",
  optimizeOutputForJava: "OPTIMIZE_OUTPUT_JAVA",
  optimizeOutputForSlice: "OPTIMIZE_OUTPUT_SLICE",
  optimizeOutputForVhdl: "OPTIMIZE_OUTPUT_VHDL",
  outputDirectory: "OUTPUT_DIRECTORY",
  outputLanguage: "OUTPUT_LANGUAGE",
  pageOutlinePanel: "PAGE_OUTLINE_PANEL",
  paperType: "PAPER_TYPE",
  pdfHyperlinks: "PDF_HYPERLINKS",
  perlModuleLatex: "PERLMOD_LATEX",
  perlModuleMakevarPrefix: "PERLMOD_MAKEVAR_PREFIX",
  perlModulePretty: "PERLMOD_PRETTY",
  plantumlConfigFile: "PLANTUML_CFG_FILE",
  plantumlFileDirs: "PLANTUMLFILE_DIRS",
  plantumlIncludePath: "PLANTUML_INCLUDE_PATH",
  plantumlJarPath: "PLANTUML_JAR_PATH",
  predefined: "PREDEFINED",
  projectBrief: "PROJECT_BRIEF",
  projectIcon: "PROJECT_ICON",
  projectLogo: "PROJECT_LOGO",
  projectName: "PROJECT_NAME",
  projectNumber: "PROJECT_NUMBER",
  pythonDocstring: "PYTHON_DOCSTRING",
  qchFile: "QCH_FILE",
  qhgLocation: "QHG_LOCATION",
  qhpCustomFilterAttributes: "QHP_CUST_FILTER_ATTRS",
  qhpCustomFilterName: "QHP_CUST_FILTER_NAME",
  qhpNamespace: "QHP_NAMESPACE",
  qhpSectionFilterAttributes: "QHP_SECT_FILTER_ATTRS",
  qhpVirtualFolder: "QHP_VIRTUAL_FOLDER",
  qtAutoBrief: "QT_AUTOBRIEF",
  quiet: "QUIET",
  recursive: "RECURSIVE",
  referencedByRelation: "REFERENCED_BY_RELATION",
  referencesLinkSource: "REFERENCES_LINK_SOURCE",
  referencesRelation: "REFERENCES_RELATION",
  repeatBrief: "REPEAT_BRIEF",
  resolveUnnamedParameters: "RESOLVE_UNNAMED_PARAMS",
  rtfExtensionsFile: "RTF_EXTENSIONS_FILE",
  rtfExtraFiles: "RTF_EXTRA_FILES",
  rtfHyperlinks: "RTF_HYPERLINKS",
  rtfOutput: "RTF_OUTPUT",
  rtfStylesheetFile: "RTF_STYLESHEET_FILE",
  searchDataFile: "SEARCHDATA_FILE",
  searchEngine: "SEARCHENGINE",
  searchEngineUrl: "SEARCHENGINE_URL",
  searchIncludes: "SEARCH_INCLUDES",
  separateMemberPages: "SEPARATE_MEMBER_PAGES",
  serverBasedSearch: "SERVER_BASED_SEARCH",
  shortNames: "SHORT_NAMES",
  showEnumValues: "SHOW_ENUM_VALUES",
  showFiles: "SHOW_FILES",
  showGroupedMemberIncludes: "SHOW_GROUPED_MEMB_INC",
  showHeaderFile: "SHOW_HEADERFILE",
  showIncludeFiles: "SHOW_INCLUDE_FILES",
  showNamespaces: "SHOW_NAMESPACES",
  showUsedFiles: "SHOW_USED_FILES",
  sipSupport: "SIP_SUPPORT",
  sitemapUrl: "SITEMAP_URL",
  skipFunctionMacros: "SKIP_FUNCTION_MACROS",
  sortBriefDocs: "SORT_BRIEF_DOCS",
  sortByScopeName: "SORT_BY_SCOPE_NAME",
  sortGroupNames: "SORT_GROUP_NAMES",
  sortMemberConstructorsFirst: "SORT_MEMBERS_CTORS_1ST",
  sortMemberDocs: "SORT_MEMBER_DOCS",
  sourceBrowser: "SOURCE_BROWSER",
  sourceTooltips: "SOURCE_TOOLTIPS",
  sqlite3Output: "SQLITE3_OUTPUT",
  sqlite3RecreateDatabase: "SQLITE3_RECREATE_DB",
  strictPrototypeMatching: "STRICT_PROTO_MATCHING",
  stripCodeComments: "STRIP_CODE_COMMENTS",
  stripFromIncludePath: "STRIP_FROM_INC_PATH",
  stripFromPath: "STRIP_FROM_PATH",
  subgrouping: "SUBGROUPING",
  tabSize: "TAB_SIZE",
  tagFiles: "TAGFILES",
  templateRelations: "TEMPLATE_RELATIONS",
  timestamp: "TIMESTAMP",
  tocExpand: "TOC_EXPAND",
  tocIncludeHeadings: "TOC_INCLUDE_HEADINGS",
  treeViewWidth: "TREEVIEW_WIDTH",
  typedefHidesStruct: "TYPEDEF_HIDES_STRUCT",
  umlLimitNumFields: "UML_LIMIT_NUM_FIELDS",
  umlLook: "UML_LOOK",
  umlMaxEdgeLabels: "UML_MAX_EDGE_LABELS",
  useMathJax: "USE_MATHJAX",
  useMarkdownFileAsMainPage: "USE_MDFILE_AS_MAINPAGE",
  usePdfLatex: "USE_PDFLATEX",
  useHtags: "USE_HTAGS",
  verbatimHeaders: "VERBATIM_HEADERS",
  warnAsError: "WARN_AS_ERROR",
  warnFormat: "WARN_FORMAT",
  warnIfDocError: "WARN_IF_DOC_ERROR",
  warnIfIncompleteDoc: "WARN_IF_INCOMPLETE_DOC",
  warnIfUndocumented: "WARN_IF_UNDOCUMENTED",
  warnIfUndocumentedEnumValue: "WARN_IF_UNDOC_ENUM_VAL",
  warnLayoutFile: "WARN_LAYOUT_FILE",
  warnLineFormat: "WARN_LINE_FORMAT",
  warnLogFile: "WARN_LOGFILE",
  warnNoParamDoc: "WARN_NO_PARAMDOC",
  warnings: "WARNINGS",
  xmlNamespaceMemberFileScope: "XML_NS_MEMB_FILE_SCOPE",
  xmlOutput: "XML_OUTPUT",
  xmlProgramListing: "XML_PROGRAMLISTING",
}

const doxygenConfigDefaults: Partial<DoxygenOptions> = {
  abbreviateBrief: [],
  aliases: [],
  allExternals: false,
  allowUnicodeNames: false,
  alphabeticalIndex: true,
  alwaysDetailedSections: false,
  autolinkIgnoreWords: [],
  autolinkSupport: true,
  binaryToc: false,
  briefMemberDescription: true,
  builtinStlSupport: false,
  callGraph: true,
  callerGraph: true,
  caseSensitiveNames: false,
  chmFile: "",
  chmIndexEncoding: "",
  citeBibFiles: [],
  clangAddIncludePaths: true,
  clangAssistedParsing: false,
  clangDatabasePath: "",
  clangOptions: "",
  classGraph: true,
  collaborationGraph: true,
  compactLatex: false,
  compactRtf: false,
  cppCliSupport: false,
  createSubDirs: false,
  createSubDirsLevel: 8,
  diaFileDirs: [],
  diaPath: "",
  directoryGraph: true,
  directoryGraphMaxDepth: 1,
  disableIndex: false,
  distributeGroupDoc: true,
  docbookOutput: "docbook",
  docsetBundleId: "",
  docsetFeedName: "",
  docsetFeedUrl: "",
  docsetPublisherId: "",
  docsetPublisherName: "",
  dotCleanup: true,
  dotCommonAttributes: "fontname=Helvetica,fontsize=10",
  dotEdgeAttributes: "labelfontname=Helvetica,labelfontsize=10",
  dotFileDirs: [],
  dotFontPath: "",
  dotGraphMaxNodes: 50,
  dotImageFormat: "png",
  dotMultiTargets: false,
  dotNodeAttributes: "shape=box,height=0.2,width=0.4",
  dotNumThreads: 0,
  dotPath: "",
  dotUmlDetails: false,
  dotWrapThreshold: 17,
  doxyFileEncoding: "UTF-8",
  eclipseDocId: "",
  enablePreprocessing: true,
  enabledSections: [],
  enumValuesPerLine: 4,
  examplePath: "",
  examplePatterns: ["*"],
  exampleRecursive: false,
  exclude: [],
  excludePatterns: [],
  excludeSymbols: [],
  excludeSymlinks: false,
  expandAsDefined: [],
  expandOnlyPredefined: false,
  extensionMapping: [],
  externalGroups: true,
  externalLinksInNewWindow: true,
  externalPages: true,
  externalSearch: false,
  externalSearchId: "",
  externalToolPath: "",
  extraPackages: [],
  extraSearchMappings: [],
  extractAll: true,
  extractAnonymousNamespaces: true,
  extractLocalClasses: true,
  extractLocalMethods: true,
  extractPackage: true,
  extractPrivate: true,
  extractPrivateVirtual: true,
  extractStatic: true,
  filePatterns: [
    "*.c",
    "*.cc",
    "*.cxx",
    "*.cxxm",
    "*.cpp",
    "*.cppm",
    "*.ccm",
    "*.c++",
    "*.c++m",
    "*.java",
    "*.ii",
    "*.ixx",
    "*.ipp",
    "*.i++",
    "*.inl",
    "*.idl",
    "*.ddl",
    "*.odl",
    "*.h",
    "*.hh",
    "*.hxx",
    "*.hpp",
    "*.h++",
    "*.l",
    "*.cs",
    "*.d",
    "*.php",
    "*.php4",
    "*.php5",
    "*.phtml",
    "*.inc",
    "*.m",
    "*.markdown",
    "*.md",
    "*.mm",
    "*.dox",
    "*.py",
    "*.pyw",
    "*.f90",
    "*.f95",
    "*.f03",
    "*.f08",
    "*.f18",
    "*.f",
    "*.for",
    "*.vhd",
    "*.vhdl",
    "*.ucf",
    "*.qsf",
    "*.ice",
  ],
  fileVersionFilter: "",
  filterPatterns: [],
  filterSourceFiles: false,
  filterSourcePatterns: [],
  forceLocalIncludes: false,
  formulaFontSize: 10,
  formulaMacroFile: "",
  fortranCommentAfter: 72,
  fullPathNames: true,
  fullSidebar: false,
  generateAutogenDefinitions: false,
  generateBugList: false,
  generateChi: false,
  generateDeprecatedList: false,
  generateDocbook: false,
  generateDocset: false,
  generateEclipseHelp: false,
  generateHtml: false,
  generateHtmlHelp: false,
  generateLatex: false,
  generateLegend: true,
  generateMan: false,
  generatePerlModule: false,
  generateQhp: false,
  generateRtf: false,
  generateSqlite3: false,
  generateTagFile: "",
  generateTestList: false,
  generateTodoList: false,
  generateTreeView: true,
  generateXml: true,
  graphicalHierarchy: true,
  groupGraphs: true,
  groupNestedCompounds: true,
  haveDot: false,
  hhcLocation: "",
  hideCompoundReference: false,
  hideFriendCompounds: false,
  hideInBodyDocs: false,
  hideScopeNames: false,
  hideUndocumentedClasses: false,
  hideUndocumentedMembers: false,
  hideUndocumentedNamespaces: false,
  hideUndocumentedRelations: false,
  htmlCodeFolding: true,
  htmlColorStyle: "AUTO_LIGHT",
  htmlColorStyleGamma: 80,
  htmlColorStyleHue: 220,
  htmlColorStyleSaturation: 100,
  htmlCopyToClipboard: true,
  htmlDynamicMenus: true,
  htmlDynamicSections: false,
  htmlExtraFiles: [],
  htmlExtraStylesheets: [],
  htmlFileExtension: ".html",
  htmlFooter: "",
  htmlFormulaFormat: "png",
  htmlHeader: "",
  htmlIndexNumEntries: 100,
  htmlOutput: "html",
  htmlProjectCookie: "",
  htmlStylesheet: "",
  idlPropertySupport: true,
  ignorePrefix: "",
  imagePath: [],
  implicitDirectoryDocs: true,
  includeFilePatterns: [],
  includeGraph: true,
  includePath: [],
  includedByGraph: true,
  inheritDocs: true,
  inlineGroupedClasses: false,
  inlineInfo: true,
  inlineInheritedMembers: true,
  inlineSimpleStructs: false,
  inlineSources: false,
  input: [],
  inputEncoding: "UTF-8",
  inputFileEncoding: "",
  inputFilter: "",
  interactiveSvg: false,
  internalDocs: true,
  javadocAutoBrief: true,
  javadocBanner: false,
  latexBatchMode: false,
  latexBibliographyStyle: "plainnat",
  latexCommandName: "",
  latexEmojiDirectory: "",
  latexExtraFiles: [],
  latexExtraStylesheet: "",
  latexFooter: "",
  latexHeader: "",
  latexHideIndices: false,
  latexMakeindexCommand: "makeindex",
  latexOutput: "latex",
  layoutFile: "",
  lookupCacheSize: 0,
  macroExpansion: true,
  makeindexCommandName: "makeindex",
  manExtension: ".3",
  manLinks: false,
  manOutput: "man",
  manSubDir: "",
  markdownIdStyle: "DOXYGEN",
  markdownSupport: true,
  mathJaxCodeFile: "",
  mathJaxExtensions: [],
  mathJaxFormat: "HTML-CSS",
  mathJaxRelativePath: "",
  mathJaxVersion: "MathJax_2",
  maxDotGraphDepth: 0,
  maxInitializerLines: 30,
  mscfileDirs: [],
  mscgenTool: "",
  multilineCppIsBrief: false,
  numProcessingThreads: 0,
  obfuscateEmails: true,
  optimizeOutputForC: false,
  optimizeOutputForFortran: false,
  optimizeOutputForJava: false,
  optimizeOutputForSlice: false,
  optimizeOutputForVhdl: false,
  outputDirectory: "",
  outputLanguage: "English",
  pageOutlinePanel: true,
  paperType: "a4",
  pdfHyperlinks: true,
  perlModuleLatex: false,
  perlModuleMakevarPrefix: "",
  perlModulePretty: true,
  plantumlConfigFile: "",
  plantumlFileDirs: [],
  plantumlIncludePath: [],
  plantumlJarPath: "",
  predefined: [],
  projectBrief: "",
  projectIcon: "",
  projectLogo: "",
  projectName: "",
  projectNumber: "",
  pythonDocstring: true,
  qchFile: "",
  qhgLocation: "",
  qhpCustomFilterAttributes: [],
  qhpCustomFilterName: "",
  qhpNamespace: "",
  qhpSectionFilterAttributes: [],
  qhpVirtualFolder: "doc",
  qtAutoBrief: true,
  quiet: false,
  recursive: true,
  referencedByRelation: true,
  referencesLinkSource: true,
  referencesRelation: true,
  repeatBrief: true,
  resolveUnnamedParameters: true,
  rtfExtensionsFile: "",
  rtfExtraFiles: [],
  rtfHyperlinks: false,
  rtfOutput: "rtf",
  rtfStylesheetFile: "",
  searchDataFile: "searchdata.xml",
  searchEngine: true,
  searchEngineUrl: "",
  searchIncludes: true,
  separateMemberPages: false,
  serverBasedSearch: false,
  shortNames: false,
  showEnumValues: false,
  showFiles: true,
  showGroupedMemberIncludes: false,
  showHeaderFile: true,
  showIncludeFiles: true,
  showNamespaces: true,
  showUsedFiles: true,
  sipSupport: false,
  sitemapUrl: "",
  skipFunctionMacros: false,
  sortBriefDocs: true,
  sortByScopeName: false,
  sortGroupNames: true,
  sortMemberConstructorsFirst: false,
  sortMemberDocs: true,
  sourceBrowser: false,
  sourceTooltips: true,
  sqlite3Output: "sqlite3",
  sqlite3RecreateDatabase: true,
  strictPrototypeMatching: false,
  stripCodeComments: true,
  stripFromIncludePath: "",
  stripFromPath: "",
  subgrouping: true,
  tabSize: 4,
  tagFiles: [],
  templateRelations: true,
  timestamp: true,
  tocExpand: false,
  tocIncludeHeadings: 6,
  treeViewWidth: 250,
  typedefHidesStruct: false,
  umlLimitNumFields: 10,
  umlLook: false,
  umlMaxEdgeLabels: 10,
  useMathJax: false,
  useMarkdownFileAsMainPage: "",
  usePdfLatex: true,
  useHtags: false,
  verbatimHeaders: true,
  warnAsError: false,
  warnFormat: "$file:$line: $text",
  warnIfDocError: true,
  warnIfIncompleteDoc: false,
  warnIfUndocumented: false,
  warnIfUndocumentedEnumValue: false,
  warnLayoutFile: true,
  warnLineFormat: "at line $line of file $file",
  warnLogFile: "",
  warnNoParamDoc: false,
  warnings: true,
  xmlNamespaceMemberFileScope: true,
  xmlOutput: "xml",
  xmlProgramListing: true,
}

/**
 * Creates a Doxygen configuration file content based on the provided options.
 * @param options Doxygen configuration options.
 * @returns A string representing the Doxygen configuration file content.
 */
export function createDoxygenConfig(options?: DoxygenOptions): string {
  const fmtBool = (v: boolean): string => (v ? "YES" : "NO")
  const fmtNumber = (v: number): string => String(v)
  const fmtString = (v: string): string => `"${v}"`
  const fmtStringArray = (arr: string[]): string =>
    arr.map(v => `"${v}"`).join(" ")

  const config: Record<string, string> = {}

  for (const [key, value] of Object.entries(options || {})) {
    const configKey = doxygenConfigMapping[key as keyof DoxygenOptions]
    if (!configKey || value === undefined)
      continue

    let formatted: string

    // console.log(`Processing config key: ${configKey} with value:`, typeof value)

    if (typeof value === "boolean") {
      formatted = fmtBool(value)
    }
    else if (value === "true" || value === "false") {
      formatted = fmtBool(value === "true")
    }
    else if (typeof value === "number") {
      formatted = fmtNumber(value)
    }
    else if (typeof value === "string") {
      formatted = fmtString(value)
    }
    else if (Array.isArray(value)) {
      formatted = fmtStringArray(value)
    }
    else {
      formatted = String(value)
    }

    config[configKey] = formatted
  }

  for (const [key, defaultValue] of Object.entries(doxygenConfigDefaults)) {
    const configKey = doxygenConfigMapping[key as keyof DoxygenOptions]
    if (!configKey || configKey in config || defaultValue === undefined)
      continue

    let formatted: string

    if (typeof defaultValue === "boolean") {
      formatted = fmtBool(defaultValue)
    }
    else if (typeof defaultValue === "number") {
      formatted = fmtNumber(defaultValue)
    }
    else if (typeof defaultValue === "string") {
      formatted = fmtString(defaultValue)
    }
    else if (Array.isArray(defaultValue)) {
      formatted = fmtStringArray(defaultValue)
    }
    else {
      formatted = String(defaultValue)
    }

    config[configKey] = formatted
  }

  return Object.entries(config)
    .map(([key, value]) => `${key.padEnd(40)}= ${value}`)
    .join("\n")
}

/**
 * Writes a Doxygen configuration file to the specified path.
 * @param content Doxygen configuration content to write.
 * @param filePath Path to the file where the configuration should be written.
 * @returns An object indicating success or failure, and an error message if applicable.
 */
export async function writeDoxygenConfig(
  content: string,
  filePath: string,
): Promise<{ success: boolean, error?: string }> {
  try {
    if (!isAbsolute(filePath)) {
      filePath = join(process.cwd(), filePath)
    }

    await Bun.write(filePath, content)
    return { success: true }
  }
  catch (error) {
    return { success: false, error: `Failed to write config file: ${String(error)}` }
  }
}
