import { notFound } from "next/navigation"

import { COMPONENTS } from "@/lib/components"
import { DEMOS } from "@/lib/demos"

export function generateStaticParams() {
  return COMPONENTS.map((component) => ({ name: component.name }))
}

// Rendered inside the theme's root layout, then framed by the docs page.
export async function PreviewPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const Demo = DEMOS[name]
  if (!Demo) notFound()

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Demo />
    </main>
  )
}
