/*
 * 98ui — retro style generator.
 *
 * Derives a registry/styles/style-<name>.css from style-vega.css:
 *   1. Renames the `.style-vega` wrapper.
 *   2. Applies mechanical transforms to every `@apply` list (flags below).
 *   3. Replaces whole `/* MARK: X *\/` sections with the ones found in an
 *      overrides file, and appends override sections vega doesn't have.
 *
 * Usage:
 *   node scripts/gen-retro-style.mjs --name win95 \
 *     --overrides registry/styles/retro/win95.overrides.css \
 *     [--square] [--flat] [--no-motion] [--no-transition] [--regular-weight]
 *
 * The overrides file is plain CSS using the same `/* MARK: X *\/` + `.cn-*`
 * layout as the style files, without the `.style-x { }` wrapper. A section
 * named `MARK: Tokens` is placed first (for raw declarations such as
 * CSS variables).
 */
import fs from "node:fs"
import path from "node:path"

const args = process.argv.slice(2)
const opt = (flag) => args.includes(flag)
const val = (flag) => {
  const i = args.indexOf(flag)
  return i === -1 ? undefined : args[i + 1]
}

const name = val("--name")
const overridesPath = val("--overrides")
if (!name) {
  console.error("Missing --name")
  process.exit(1)
}

const root = process.cwd()
const read = (p) => fs.readFileSync(p, "utf8").replace(/\r\n/g, "\n")
const source = read(path.join(root, "registry/styles/style-vega.css"))
const outPath = path.join(root, `registry/styles/style-${name}.css`)

// ---------------------------------------------------------------------------
// Mechanical transforms on @apply token lists.
// ---------------------------------------------------------------------------

// Split a token list on spaces that are not inside [...] or (...).
function splitTokens(list) {
  const out = []
  let depthSq = 0
  let depthPar = 0
  let cur = ""
  for (const ch of list) {
    if (ch === "[") depthSq++
    if (ch === "]") depthSq--
    if (ch === "(") depthPar++
    if (ch === ")") depthPar--
    if (ch === " " && depthSq === 0 && depthPar === 0) {
      if (cur) out.push(cur)
      cur = ""
    } else {
      cur += ch
    }
  }
  if (cur) out.push(cur)
  return out
}

// Returns [variantPrefix, utility] for a token like "hover:focus:rounded-md".
function splitVariant(token) {
  // Variants end at the last ":" that is not inside brackets/parens.
  let depthSq = 0
  let depthPar = 0
  let lastColon = -1
  for (let i = 0; i < token.length; i++) {
    const ch = token[i]
    if (ch === "[") depthSq++
    if (ch === "]") depthSq--
    if (ch === "(") depthPar++
    if (ch === ")") depthPar--
    if (ch === ":" && depthSq === 0 && depthPar === 0) lastColon = i
  }
  if (lastColon === -1) return ["", token]
  return [token.slice(0, lastColon + 1), token.slice(lastColon + 1)]
}

const MOTION = /^(animate-in|animate-out|fade-in(-\d+)?|fade-out(-\d+)?|zoom-in(-\d+)?|zoom-out(-\d+)?|slide-in-from-[a-z]+(-\d+)?|slide-out-to-[a-z]+(-\d+)?|duration-\d+|ease-\[.*\]|backdrop-blur-[a-z0-9]+|animate-caret-blink)$/
const TRANSITION = /^(transition|transition-[a-z]+|transition-\[.*\])$/
const SHADOW = /^(shadow|shadow-(xs|sm|md|lg|xl|2xl|none)|ring-1|ring-foreground\/10|ring-foreground\/5)$/

function transformToken(token) {
  const [variant, util] = splitVariant(token)
  const bang = util.endsWith("!") ? "!" : ""
  const u = bang ? util.slice(0, -1) : util

  if (opt("--square") && /^rounded(-[a-z]{1,2})?(-.+)?$/.test(u)) {
    // rounded, rounded-md, rounded-t-xl, rounded-[min(...)], rounded-full ...
    return `${variant}rounded-none${bang}`
  }
  if (opt("--flat") && SHADOW.test(u)) {
    return null
  }
  if (opt("--no-motion") && MOTION.test(u)) {
    return null
  }
  if (opt("--no-transition") && TRANSITION.test(u)) {
    return null
  }
  if (opt("--regular-weight") && u === "font-medium") {
    return `${variant}font-normal${bang}`
  }
  return token
}

function transformApply(list) {
  const tokens = splitTokens(list.trim())
  const seen = new Set()
  const out = []
  for (const t of tokens) {
    const nt = transformToken(t)
    if (nt && !seen.has(nt)) {
      seen.add(nt)
      out.push(nt)
    }
  }
  return out.join(" ")
}

let css = source.replace(/\.style-vega\b/g, `.style-${name}`)
css = css.replace(/@apply ([^;]+);/g, (_, list) => {
  const t = transformApply(list)
  return t ? `@apply ${t};` : "@apply;"
})
// Drop rules that ended up empty.
css = css.replace(/\n\s*\.[^{]+\{\s*@apply;\s*\}\n/g, "\n")

// ---------------------------------------------------------------------------
// Section replacement.
// ---------------------------------------------------------------------------

const MARK = /\/\* MARK: ([^*]+?) \*\//g

function sections(text) {
  // Returns { pre, list: [{name, body}], post } where body includes the MARK.
  const marks = [...text.matchAll(MARK)]
  if (!marks.length) return { pre: text, list: [], post: "" }
  const pre = text.slice(0, marks[0].index)
  const list = marks.map((m, i) => {
    const start = m.index
    const end = i + 1 < marks.length ? marks[i + 1].index : undefined
    return { name: m[1].trim(), body: text.slice(start, end) }
  })
  return { pre, list, post: "" }
}

if (overridesPath) {
  const overrides = read(path.join(root, overridesPath))
  const o = sections(overrides)
  const indent = (body) =>
    body
      .trimEnd()
      .split("\n")
      .map((line) => (line.trim() ? `  ${line}` : line))
      .join("\n") + "\n\n"
  const byName = new Map(o.list.map((s) => [s.name, indent(s.body)]))

  const closingIdx = css.lastIndexOf("}")
  const inner = css.slice(0, closingIdx)
  const closing = css.slice(closingIdx)
  const s = sections(inner)

  let rebuilt = s.pre
  if (byName.has("Tokens")) {
    rebuilt += byName.get("Tokens")
    byName.delete("Tokens")
  }
  for (const sec of s.list) {
    if (byName.has(sec.name)) {
      rebuilt += byName.get(sec.name)
      byName.delete(sec.name)
    } else {
      rebuilt += sec.body
    }
  }
  for (const [, body] of byName) {
    rebuilt += body
  }
  css = rebuilt.trimEnd() + "\n" + closing
}

// Drop rules that are empty after overrides (`@apply;` is used in override
// files to blank a vega rule).
css = css.replace(/\n[ \t]*\.[^{\n]+\{\s*@apply;\s*\}[ \t]*\n/g, "\n")
css = css.replace(/\n{3,}/g, "\n\n")
if (css.includes("@apply;")) {
  const at = css.indexOf("@apply;")
  console.error(
    `Empty @apply left in output near: ${JSON.stringify(css.slice(at - 120, at + 10))}`
  )
  process.exit(1)
}

fs.writeFileSync(outPath, css)
console.log(`wrote ${path.relative(root, outPath)}`)
