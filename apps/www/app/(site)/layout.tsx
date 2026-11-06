import type { Metadata } from "next"

import "./site.css"

export const metadata: Metadata = {
  title: {
    default: "ui98 — retro React components",
    template: "%s — ui98",
  },
  description:
    "React components for the web as it was: Windows 95, GeoCities and Y2K. Built on Base UI and Tailwind CSS. pnpm i ui98.",
}

export default function SiteLayout({
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
