// import type { Config } from "docuverse";
import type { Config } from "./src-cli"

export default {
  run: {
    doxygen: {
      input: "tests",
      output: ".temp",
      options: {
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
      verbose: false,
    },
  },
} satisfies Config
