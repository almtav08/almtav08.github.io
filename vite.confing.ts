import { defineConfig } from "vite";
import path from "path";
import * as node_fs from "fs";

function get_paths_from_tsconfig() {
  const tsconfig_s = node_fs
    .readFileSync("./tsconfig.json", "utf-8")
    .replace(/\/\/.*$/gm, ""); // Removing comments
  const tsconfig = JSON.parse(tsconfig_s);
  const aliases = {};
  for (const [key, value] of Object.entries(tsconfig.compilerOptions.paths)) {
    aliases[key] = path.resolve(__dirname, value[0]);
  }
  return aliases;
}

export default defineConfig({
  resolve: {
    alias: get_paths_from_tsconfig(),
  },
  build: {
    target: "esnext",
  },
});