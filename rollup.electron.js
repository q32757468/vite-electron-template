import resolve from "rollup-plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/main/app.ts",
  output: {
    file: "dist/main/app.js",
    format: "cjs",
  },
  plugins: [resolve(), typescript({ target: "esnext" })],

  external: ["electron"],
};
