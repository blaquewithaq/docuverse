/** @type {import('docuverse').Config} */
const config = {
  run: {
    doxygen: {
      input: "tests/projectM-4",
      output: ".temp",
      options: {
        generateHtml: true,
        verbose: true,
      },
    },
  },
  parse: {
    input: ".temp/xml",
    output: ".temp/json",
    options: {
      verbose: true,
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
      verbose: true,
    },
  },
}

export default config
