# Library

### Runner

Run a program with various options
  - Use local or download from github
  - Add usage for `doxygen`

### Parser

- Parse xml into a semantically accurate javascript object
  - Remove undefined values
  - Fix various urls

### Validator

- Validate the javascript object against a zod schema
  - Generate a schema from the generated library type definition file (onBuild)

### Template Engine

- Generate a document from existing or default templates using the javascript object
  - Use handlebars
  - Allow multiple sets of templates (allow for different templates for different uses cases)

--watch
bun build --entrypoints ./src/index.ts --outdir ./dist --target bun --format esm
