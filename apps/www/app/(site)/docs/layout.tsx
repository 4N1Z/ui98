import Link from "next/link"

import { DocsNav } from "@/components/docs-nav"

// The docs are dressed as one big Win95 window: title bar, menu strip,
// a sunken list pane on the left and the page on the right.
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-svh bg-[#008080] p-2 sm:p-4">
      <div className="mx-auto flex max-w-6xl flex-col bg-background shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf,inset_-2px_-2px_#808080,inset_2px_2px_#ffffff] p-[3px]">
        <header className="flex items-center justify-between bg-[linear-gradient(90deg,#000080,#1084d0)] px-2 py-1 text-sm font-bold text-white">
          <Link href="/docs">ui98 Documentation</Link>
          <Link
            href="/"
            aria-label="Close"
            className="grid size-4 place-items-center bg-background text-[10px] leading-none text-black shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_#808080,inset_2px_2px_#dfdfdf]"
          >
            ✕
          </Link>
        </header>
        <nav className="flex gap-4 px-2 py-1 text-sm">
          <Link href="/" className="hover:underline">
            <u>H</u>ome
          </Link>
          <Link href="/docs" className="hover:underline">
            <u>G</u>etting started
          </Link>
          <Link href="/win95" className="hover:underline">
            <u>W</u>in95
          </Link>
          <Link href="/geocities" className="hover:underline">
            G<u>e</u>oCities
          </Link>
          <Link href="/y2k" className="hover:underline">
            <u>Y</u>2K
          </Link>
          <a
            href="https://github.com/4N1Z/ui98"
            className="ml-auto hover:underline"
          >
            GitHub
          </a>
        </nav>
        <div className="flex flex-col gap-1 md:flex-row">
          <DocsNav />
          <main className="min-w-0 flex-1 bg-white p-4 shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#808080,inset_-2px_-2px_#dfdfdf,inset_2px_2px_#0a0a0a] sm:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
