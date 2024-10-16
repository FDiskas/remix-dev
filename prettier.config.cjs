import { dirname, resolve } from "node:path";
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import("prettier").Config} */
module.exports = {
  tailwindConfig: resolve(__dirname, "./tailwind.config.ts"),
  plugins: ["prettier-plugin-tailwindcss"],
};
