import { SaveIcon, SearchIcon, TrashIcon } from "lucide-react"

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "ui98"

const tools = [
  { label: "Save (Ctrl+S)", icon: SaveIcon },
  { label: "Find (Ctrl+F)", icon: SearchIcon },
  { label: "Delete (Del)", icon: TrashIcon },
]

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex gap-1">
        {tools.map(({ label, icon: Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger
              render={
                <Button variant="outline" size="icon" aria-label={label} />
              }
            >
              <Icon />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
