import type { Metadata } from "next"

import "./win95.css"

// Each theme is its own root layout, so its stylesheet never leaks into the
// other themes' pages.
export const metadata: Metadata = {
  title: { default: "ui98 — Windows 95", template: "%s — ui98 Windows 95" },
}

export default function Win95ShowcaseLayout({
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
