import type { Metadata } from "next"

import "./88x31.css"

// Each theme is its own root layout, so its stylesheet never leaks into the
// other themes' pages.
export const metadata: Metadata = {
  title: { default: "ui98 — 88x31", template: "%s — ui98 88x31" },
}

export default function ButtonClubLayout({
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
