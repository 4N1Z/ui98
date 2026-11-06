import Link from "next/link"

import { DitherBackdrop } from "@/components/dither-backdrop"
import { InstallSnippet } from "@/components/install-snippet"
import { Stamp } from "@/components/stamp"
import { COMPONENTS } from "@/lib/components"

const LINKS = [
  { href: "/docs", label: "docs" },
  { href: "/win95", label: "win95" },
  { href: "/geocities", label: "geocities" },
  { href: "/y2k", label: "y2k" },
  { href: "/88x31", label: "88x31" },
  { href: "https://github.com/4N1Z/ui98", label: "github" },
  { href: "https://www.npmjs.com/package/ui98", label: "npm" },
]

const ERAS = [
  {
    href: "/win95",
    name: "Win95",
    year: "1995",
    blurb: "Bevels, title bars and the 16-color palette.",
    swatches: ["#c0c0c0", "#000080", "#008080", "#ffffff"],
  },
  {
    href: "/geocities",
    name: "GeoCities",
    year: "1998",
    blurb: "Times, blue links, guestbooks and 88×31 buttons.",
    swatches: ["#ffffff", "#0000ee", "#ffff00", "#ff00ff"],
  },
  {
    href: "/y2k",
    name: "Y2K",
    year: "2001",
    blurb: "Glossy gel, sky blue and portal sidebars.",
    swatches: ["#e8f1fb", "#0a64d6", "#7fd3ff", "#ff9900"],
  },
  {
    href: "/88x31",
    name: "88x31",
    year: "1997",
    blurb: "The button wall: silver plates, navy gradients, red Now!",
    swatches: ["#c0c0c0", "#000080", "#e00000", "#ffcc00"],
  },
]

// The framed cream card everything on this page sits in: a thin outer rule,
// a gap, then a double inner rule, like a printed ticket.
function Frame({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`border border-[#1d3b2a] bg-[#f4f1e6] p-1.5 text-[#1d3b2a] shadow-[4px_4px_0_#1d3b2a] ${className}`}
    >
      <div className="border-4 border-double border-[#1d3b2a] px-5 py-4 sm:px-7 sm:py-6">
        {children}
      </div>
    </section>
  )
}

export default function LandingPage() {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-[#1fa35a]">
      <DitherBackdrop className="fixed inset-0 h-full w-full" />

      <main className="relative mx-auto flex max-w-2xl flex-col gap-6 px-4 py-10 sm:py-16">
        <Frame>
          <div className="flex items-start gap-5">
            <div className="flex-1">
              <h1 className="font-pixel text-6xl leading-none tracking-tight sm:text-7xl">
                ui98
              </h1>
              <p className="mt-3 text-lg leading-snug">
                React components for the web as it was:
                <br />
                Windows&nbsp;95, GeoCities, Y2K and the 88x31 button wall.
              </p>
            </div>
            <Stamp className="hidden size-28 shrink-0 sm:block" />
          </div>
          <nav className="mt-5 flex flex-wrap gap-x-2 gap-y-1 border-t border-dashed border-[#1d3b2a] pt-3 text-sm">
            {LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>•</span>}
                <Link
                  href={link.href}
                  className="underline underline-offset-2 hover:bg-[#1d3b2a] hover:text-[#f4f1e6]"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
        </Frame>

        <Frame>
          <h2 className="font-pixel text-3xl leading-none">Install</h2>
          <p className="mt-2 text-sm">
            One package, three eras. Built on Base UI and Tailwind CSS, in the
            shape of shadcn/ui, but shipped as a normal dependency.
          </p>
          <InstallSnippet />
        </Frame>

        <div className="grid gap-4 sm:grid-cols-2">
          {ERAS.map((era) => (
            <Link key={era.href} href={era.href} className="group block">
              <Frame className="h-full transition-transform group-hover:-translate-y-0.5">
                <div className="font-pixel text-sm opacity-70">{era.year}</div>
                <div className="font-pixel text-3xl leading-none">
                  {era.name}
                </div>
                <div className="mt-2 flex gap-1">
                  {era.swatches.map((color) => (
                    <span
                      key={color}
                      className="size-4 border border-[#1d3b2a]"
                      style={{ background: color }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm leading-snug">{era.blurb}</p>
                <span className="mt-2 inline-block text-sm underline">
                  open showcase →
                </span>
              </Frame>
            </Link>
          ))}
        </div>

        <Frame>
          <div className="flex items-center gap-5">
            <Floppy className="size-16 shrink-0" />
            <p className="font-pixel text-2xl leading-tight">
              a modem sings low —
              <br />
              the page loads one line at once.
              <br />
              under construction.
            </p>
          </div>
        </Frame>

        <Frame>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-pixel text-3xl leading-none">
              {COMPONENTS.length} components
            </h2>
            <Link href="/docs" className="text-sm underline">
              browse all →
            </Link>
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            {COMPONENTS.map((component, i) => (
              <span key={component.name}>
                {i > 0 && " · "}
                <Link
                  href={`/docs/${component.name}`}
                  className="hover:underline"
                >
                  {component.title}
                </Link>
              </span>
            ))}
          </p>
        </Frame>

        <footer className="text-center font-pixel text-lg text-[#f4f1e6] [text-shadow:1px_1px_0_#1d3b2a]">
          site last updated november 2026 · best viewed at 800×600
        </footer>
      </main>
    </div>
  )
}

// 16×16 pixel floppy disk, drawn with one rect per run.
function Floppy({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="1" y="1" width="14" height="14" fill="#1d3b2a" />
      <rect x="4" y="1" width="7" height="5" fill="#c9c4b0" />
      <rect x="8" y="2" width="2" height="3" fill="#1d3b2a" />
      <rect x="3" y="8" width="10" height="7" fill="#f4f1e6" />
      <rect x="4" y="10" width="8" height="1" fill="#1fa35a" />
      <rect x="4" y="12" width="6" height="1" fill="#1fa35a" />
    </svg>
  )
}
