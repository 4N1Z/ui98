"use client"

import * as React from "react"

const THEMES = [
  { name: "win95", label: "Win95" },
  { name: "geocities", label: "GeoCities" },
  { name: "y2k", label: "Y2K" },
] as const

// Each theme lives in its own root layout, so a component is previewed in an
// iframe pointing at /<theme>/preview/<name>.
export function ThemePreview({ name }: { name: string }) {
  const [theme, setTheme] =
    React.useState<(typeof THEMES)[number]["name"]>("win95")

  return (
    <div>
      <div role="tablist" className="flex gap-0.5 pl-1">
        {THEMES.map((t) => (
          <button
            key={t.name}
            role="tab"
            type="button"
            aria-selected={theme === t.name}
            onClick={() => setTheme(t.name)}
            className={
              theme === t.name
                ? "relative top-px z-10 bg-background px-3 pt-1.5 pb-1 text-sm shadow-[inset_1px_1px_#ffffff,inset_-1px_0_#0a0a0a,inset_2px_2px_#dfdfdf,inset_-2px_0_#808080]"
                : "mt-0.5 bg-background px-3 pt-1 pb-0.5 text-sm shadow-[inset_1px_1px_#ffffff,inset_-1px_0_#0a0a0a,inset_2px_2px_#dfdfdf,inset_-2px_0_#808080]"
            }
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-background p-1 shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_#808080,inset_2px_2px_#dfdfdf]">
        <iframe
          key={theme}
          src={`/${theme}/preview/${name}`}
          title={`${name} in ${theme}`}
          className="block h-[420px] w-full bg-white"
          loading="lazy"
        />
      </div>
    </div>
  )
}
