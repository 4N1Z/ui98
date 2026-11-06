// Builds the theme stylesheets into dist/:
//   dist/<theme>.css           standalone, compiled (no Tailwind needed)
//   dist/tailwind/<theme>.css  source, for apps that already run Tailwind v4
import { execFileSync } from "node:child_process"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { createRequire } from "node:module"
import path from "node:path"

// Theme name -> the theme files it is made of, in cascade order. 88x31 is
// drawn on top of the win95 plates and bevels.
const LAYERS = {
  win95: ["win95"],
  geocities: ["geocities"],
  y2k: ["y2k"],
  "88x31": ["win95", "88x31"],
}
const THEMES = Object.keys(LAYERS)
const root = path.resolve(import.meta.dirname, "..")
const src = (p) => readFileSync(path.join(root, "src", p), "utf8")
const cli = path.join(
  path.dirname(
    createRequire(import.meta.url).resolve("@tailwindcss/cli/package.json")
  ),
  "dist/index.mjs"
)

mkdirSync(path.join(root, "dist/tailwind"), { recursive: true })

for (const theme of THEMES) {
  execFileSync(
    process.execPath,
    [cli, "-i", `src/${theme}.css`, "-o", `dist/${theme}.css`, "--minify"],
    { cwd: root, stdio: "inherit" }
  )

  const fontImport = src(`${theme}.css`).split("\n")[0]
  writeFileSync(
    path.join(root, `dist/tailwind/${theme}.css`),
    [
      `/* ui98 ${theme} theme for Tailwind CSS v4.`,
      ` * Usage: @import "tailwindcss"; @import "ui98/tailwind/${theme}.css";`,
      ` * Fonts: ${fontImport} */`,
      `@import "tw-animate-css";`,
      `@source "../components";`,
      src("styles/variants.css"),
      src("styles/base.css"),
      ...LAYERS[theme].map((layer) => src(`themes/${layer}.css`)),
    ].join("\n")
  )
}
console.log("built css for", THEMES.join(", "))
