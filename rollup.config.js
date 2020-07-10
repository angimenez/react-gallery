import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "index.js",
    format: "cjs",
  },
  plugins: [resolve(), babel({ babelHelpers: "bundled" }), commonjs()],
  external: ["react", "styled-components", "@angimenez/custom-hooks"],
};
