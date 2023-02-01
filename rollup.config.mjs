import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import url from 'rollup-plugin-url';

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
     {
      file:  "dist/esm/index.js",
      format: "esm",
      sourcemap: true,
     },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      url({
        // by default, rollup-plugin-url will not handle font files
        include: [
          "**/*.ttf",
          "**/*.woff",
          "**/*.eot?#iefix",
          "**/*.eot",
          "**/*.svg"
        ],
        // setting infinite limit will ensure that the files 
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, /\.scss$/]
  },
];