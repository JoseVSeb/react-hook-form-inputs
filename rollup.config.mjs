import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import { glob } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pkg from "./package.json" assert { type: "json" };

/** @type {import("rollup").RollupOptions[]} */
export default [
  {
    input: Object.fromEntries(
      glob.sync("src/**/*.{js,ts,jsx,tsx}").map((file) => [
        // This remove `src/` as well as the file extension from each
        // file, so e.g. src/nested/foo.js becomes nested/foo
        path.relative(
          "src",
          file.slice(0, file.length - path.extname(file).length),
        ),
        // This expands the relative paths to absolute paths, so e.g.
        // src/nested/foo becomes /project/src/nested/foo.js
        fileURLToPath(new URL(file, import.meta.url)),
      ]),
    ),
    output: [
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
      },
      // TODO: support cjs, umd exports?
    ],
    plugins: [
      del({ targets: "dist/*" }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      commonjs(),
      resolve(),
    ],
    external: Object.keys(pkg.peerDependencies),
  },
];
