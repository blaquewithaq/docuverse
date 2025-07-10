export type PageAccessor
= "retain" | "copy" | "assign" | "weak" | "strong" | "unretained"

export type PageAlign
= "left" | "right" | "center"

export type PageBool
= "yes" | "no"

export type PageCheck
= "checked" | "unchecked"

export type PageGraphRelation
= "include" | "usage" | "template-instance" | "public-inheritance" | "protected-inheritance" | "private-inheritance" | "type-constraint"

export type PageHighlightClass
= "comment" | "normal" | "preprocessor" | "keyword" | "keywordtype" | "keywordflow" | "stringliteral" | "xmlcdata" | "charliteral" | "vhdlkeyword" | "vhdllogic" | "vhdlchar" | "vhdldigit"

export type PageImageKind
= "html" | "latex" | "docbook" | "rtf" | "xml"

export type PageItemKind
= "class" | "struct" | "union" | "interface" | "protocol" | "category" | "exception" | "service" | "singleton" | "module" | "type" | "file" | "namespace" | "group" | "page" | "example" | "dir" | "concept"

export type PageLanguage
= "Unknown" | "IDL" | "Java" | "C#" | "D" | "PHP" | "Objective-C" | "C++" | "JavaScript" | "Python" | "Fortran" | "VHDL" | "XML" | "SQL" | "Markdown" | "Slice" | "Lex"

export type PageMemberDefKind
= "define" | "property" | "event" | "variable" | "typedef" | "enum" | "function" | "signal" | "prototype" | "friend" | "dcop" | "slot" | "interface" | "service"

export type PageMemberKind
= "define" | "property" | "event" | "variable" | "typedef" | "enum" | "enumvalue" | "function" | "signal" | "prototype" | "friend" | "dcop" | "slot"

export type PageOl = "1" | "a" | "A" | "i" | "I"

export type PageParameterDir
= "in" | "out" | "inout"

export type PageParameterListKind
= "param" | "retval" | "exception" | "templateparam"

export type PagePlantumlEngine
= "uml" | "bpm" | "wire" | "dot" | "ditaa" | "salt" | "math" | "latex" | "gantt" | "mindmap" | "wbs" | "yaml" | "creole" | "json" | "flow" | "board" | "git" | "hcl" | "regex" | "ebnf" | "files"

export type PageProtectionKind
= "public" | "protected" | "private" | "package"

export type PageReferenceKind
= "compound" | "member"

export type PageRefQualifierKind
= "lvalue" | "rvalue"

export type PageSectionKind
= "user-defined" | "public-type" | "public-func" | "public-attrib" | "public-slot" | "signal" | "dcop-func" | "property" | "event" | "public-static-func" | "public-static-attrib" | "protected-type" | "protected-func" | "protected-attrib" | "protected-slot" | "protected-static-func" | "protected-static-attrib" | "package-type" | "package-func" | "package-attrib" | "package-static-func" | "package-static-attrib" | "private-type" | "private-func" | "private-attrib" | "private-slot" | "private-static-func" | "private-static-attrib" | "friend" | "related" | "define" | "prototype" | "typedef" | "enum" | "func" | "var"

export type PageSimpleSectKind
= "see" | "return" | "author" | "authors" | "version" | "since" | "date" | "note" | "warning" | "pre" | "post" | "copyright" | "invariant" | "remark" | "attention" | "important" | "par" | "rcs"

export type PageVerticalAlign
= "bottom" | "top" | "middle"

export type PageVirtualKind
= "non-virtual" | "virtual" | "pure-virtual"
