import type { Metadata } from "next"

import "./geocities.css"

// Each theme is its own root layout, so its stylesheet never leaks into the
// other themes' pages.
export const metadata: Metadata = {
  title: { default: "ui98 — GeoCities", template: "%s — ui98 GeoCities" },
}

export default function GeoCitiesShowcaseLayout({
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
