import type { Metadata } from "next"

import "./y2k.css"

// Each theme is its own root layout, so its stylesheet never leaks into the
// other themes' pages.
export const metadata: Metadata = {
  title: { default: "ui98 — Y2K", template: "%s — ui98 Y2K" },
}

export default function Y2KShowcaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-svh antialiased">{children}</body>
    </html>
  )
}
