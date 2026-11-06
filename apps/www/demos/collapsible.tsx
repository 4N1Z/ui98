import { ChevronDownIcon } from "lucide-react"

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "ui98"

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-bold">My Cool Links (3)</span>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" />}>
          <ChevronDownIcon />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className="border px-3 py-2 text-sm">The Dancing Baby</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="border px-3 py-2 text-sm">The Hampster Dance</div>
        <div className="border px-3 py-2 text-sm">Space Jam Official Site</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
