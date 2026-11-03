import { Badge } from "@/registry/bases/radix/ui/badge"

export function Header() {
  return (
    <header className="text-center">
      <h1 className="text-[34px] leading-tight font-bold text-[#ff0000] [text-shadow:2px_2px_0_#ffff00] dark:text-[#ff3333] dark:[text-shadow:2px_2px_0_#660000]">
        Welcome to my Homepage!!!
      </h1>
      <p className="mt-1 text-[15px] font-bold">
        <span className="text-[#ff00ff]">***</span> Welcome to my corner of the
        web <span className="text-[#ff00ff]">***</span>
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[13px]">
        <Badge>NEW!</Badge>
        <Badge variant="secondary">UPDATED 11/02/99</Badge>
        <span className="italic">
          This page is best viewed at 800x600 with Netscape Navigator 4.0
        </span>
      </div>
    </header>
  )
}
