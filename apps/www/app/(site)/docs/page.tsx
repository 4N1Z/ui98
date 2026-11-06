import Link from "next/link"

import { COMPONENTS } from "@/lib/components"

export const metadata = { title: "Getting started" }

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto bg-black p-3 font-mono text-xs leading-relaxed text-[#c0c0c0]">
      <code>{children}</code>
    </pre>
  )
}

export default function DocsPage() {
  return (
    <article className="flex max-w-3xl flex-col gap-6 leading-relaxed">
      <header>
        <h1 className="text-2xl font-bold">Getting started</h1>
        <p className="mt-1">
          ui98 is a set of accessible React components that look like the web
          from 1995 to 2002. It follows shadcn/ui&apos;s approach (Base UI
          primitives, Tailwind CSS, class-variance-authority) but ships as a
          normal npm package.
        </p>
      </header>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">1. Install</h2>
        <Code>pnpm i ui98</Code>
        <p className="text-sm text-muted-foreground">
          npm i ui98 and yarn add ui98 work too. React 18.2+ or 19.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">2. Pick a theme</h2>
        <p>
          Import one stylesheet once, at the root of your app. It contains
          everything: colors, fonts, and the styles for every component.
        </p>
        <Code>{`import "ui98/win95.css"      // Windows 95
// import "ui98/geocities.css" // GeoCities
// import "ui98/y2k.css"       // Y2K`}</Code>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">3. Use the components</h2>
        <Code>{`import { Button, Dialog, DialogContent, DialogTrigger } from "ui98"

export function EmptyRecycleBin() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Empty Recycle Bin</DialogTrigger>
      <DialogContent>Are you sure?</DialogContent>
    </Dialog>
  )
}`}</Code>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Already using Tailwind CSS v4?</h2>
        <p>
          Import the Tailwind build of the theme instead. You get the theme
          tokens as utilities (<code>bg-primary</code>,{" "}
          <code>text-muted-foreground</code>) and no duplicate CSS reset.
        </p>
        <Code>{`/* app/globals.css */
@import "tailwindcss";
@import "ui98/tailwind/win95.css";`}</Code>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Components</h2>
        <ul className="grid grid-cols-2 gap-x-4 sm:grid-cols-3">
          {COMPONENTS.map((component) => (
            <li key={component.name}>
              <Link
                href={`/docs/${component.name}`}
                className="text-[#0000ee] underline visited:text-[#551a8b]"
              >
                {component.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
