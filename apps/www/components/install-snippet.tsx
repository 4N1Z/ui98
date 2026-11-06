"use client"

import * as React from "react"

const INSTALL = "pnpm i ui98"

const USAGE = `import "ui98/win95.css" // or geocities.css, y2k.css, 88x31.css
import { Button } from "ui98"

export default function App() {
  return <Button>Start</Button>
}`

export function InstallSnippet() {
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3 bg-[#1d3b2a] px-3 py-2 font-mono text-sm text-[#f4f1e6]">
        <code>
          <span className="opacity-60">$ </span>
          {INSTALL}
        </code>
        <button
          type="button"
          className="border border-[#f4f1e6] px-2 text-xs hover:bg-[#f4f1e6] hover:text-[#1d3b2a]"
          onClick={() => {
            navigator.clipboard?.writeText(INSTALL).then(() => {
              setCopied(true)
              setTimeout(() => setCopied(false), 1500)
            })
          }}
        >
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="overflow-x-auto border border-dashed border-[#1d3b2a] p-3 font-mono text-xs leading-relaxed">
        <code>{USAGE}</code>
      </pre>
    </div>
  )
}
