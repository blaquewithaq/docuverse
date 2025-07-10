/** @type {import('docuverse').Config} */
const config = {
  run: {
    doxygen: {
      input: "tests",
      output: ".temp",
      options: {
        generateHtml: true,
        verbose: false,
      },
    },
  },
  parse: {
    input: ".temp/xml",
    output: ".temp/json",
    options: {
      verbose: false,
    },
  },
  validate: {
    input: ".temp/json",
    output: ".temp/validation",
    options: {
      verbose: true,
    },
  },
  transmute: {
    input: ".temp/json",
    output: ".temp/transmute",
    options: {
      preset: "basic",
      verbose: false,
    },
  },
}

export default config
