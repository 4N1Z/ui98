import { Separator } from "ui98"

export default function SeparatorDemo() {
  return (
    <div className="w-full max-w-sm text-sm">
      <div className="flex flex-col gap-1">
        <span className="font-bold">Microsoft Windows 98</span>
        <span>Second Edition 4.10.2222 A</span>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4">
        <span>Registered to:</span>
        <Separator orientation="vertical" />
        <span>Bill G.</span>
        <Separator orientation="vertical" />
        <span>64.0MB RAM</span>
      </div>
    </div>
  )
}
