"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { COMPONENTS } from "@/lib/components"

export function DocsNav() {
  const pathname = usePathname()

  return (
    <aside className="bg-white p-1 text-sm shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#808080,inset_-2px_-2px_#dfdfdf,inset_2px_2px_#0a0a0a] md:sticky md:top-4 md:max-h-[calc(100svh-2rem)] md:w-56 md:self-start md:overflow-y-auto">
      <ul className="flex flex-wrap gap-x-3 p-1 md:flex-col">
        <NavItem href="/docs" active={pathname === "/docs"}>
          Getting started
        </NavItem>
        <li className="mt-2 hidden px-1 text-xs font-bold text-muted-foreground md:block">
          Components
        </li>
        {COMPONENTS.map((component) => (
          <NavItem
            key={component.name}
            href={`/docs/${component.name}`}
            active={pathname === `/docs/${component.name}`}
          >
            {component.title}
          </NavItem>
        ))}
      </ul>
    </aside>
  )
}

function NavItem({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className={
          active
            ? "block bg-[#000080] px-1 text-white"
            : "block px-1 hover:bg-[#000080] hover:text-white"
        }
      >
        {children}
      </Link>
    </li>
  )
}
