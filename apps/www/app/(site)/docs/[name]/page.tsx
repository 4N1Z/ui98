import { readFile } from "node:fs/promises"
import path from "node:path"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ThemePreview } from "@/components/theme-preview"
import { COMPONENTS } from "@/lib/components"

export const dynamicParams = false

export function generateStaticParams() {
  return COMPONENTS.map((component) => ({ name: component.name }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>
}): Promise<Metadata> {
  const { name } = await params
  const component = COMPONENTS.find((c) => c.name === name)
  return component
    ? { title: component.title, description: component.description }
    : {}
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const component = COMPONENTS.find((c) => c.name === name)
  if (!component) notFound()

  const source = await readFile(
    path.join(process.cwd(), "demos", `${name}.tsx`),
    "utf8"
  )

  return (
    <article className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold">{component.title}</h1>
        <p className="mt-1 text-muted-foreground">{component.description}</p>
      </header>

      <ThemePreview name={name} />

      <section>
        <h2 className="mb-2 font-bold">Usage</h2>
        <pre className="overflow-x-auto bg-black p-3 font-mono text-xs leading-relaxed text-[#c0c0c0]">
          <code>{source}</code>
        </pre>
      </section>
    </article>
  )
}
