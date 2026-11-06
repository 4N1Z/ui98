import { BoldIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "ui98"

export default function ToggleDemo() {
  return (
    <div className="flex items-center gap-2">
      <Toggle aria-label="Toggle bold" defaultPressed>
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon />
      </Toggle>
      <Toggle variant="outline">Status Bar</Toggle>
    </div>
  )
}
