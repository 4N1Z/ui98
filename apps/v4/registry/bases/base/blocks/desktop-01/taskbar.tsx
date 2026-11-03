import {
  FileTextIcon,
  FolderOpenIcon,
  MonitorIcon,
  PhoneIcon,
  Volume2Icon,
} from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Toggle } from "@/registry/bases/base/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

function Flag() {
  return (
    <span
      aria-hidden
      className="grid size-4 grid-cols-2 gap-px [image-rendering:pixelated]"
    >
      <span className="bg-destructive" />
      <span className="bg-chart-2" />
      <span className="bg-primary" />
      <span className="bg-chart-4" />
    </span>
  )
}

export function Taskbar() {
  return (
    <div className="flex h-10 items-center gap-1 border-t border-t-white bg-background px-1 pt-0.5 shadow-[inset_0_1px_#dfdfdf]">
      <Button variant="outline" className="min-w-0 gap-1.5 px-2 font-bold">
        <Flag />
        Start
      </Button>
      <Separator orientation="vertical" className="mx-1 h-7" />
      <Toggle
        aria-label="C:\98ui\components"
        className="w-44 justify-start px-2"
      >
        <FolderOpenIcon /> C:\98ui\components
      </Toggle>
      <Toggle
        pressed
        aria-label="readme.txt - Notepad"
        className="w-44 justify-start px-2"
      >
        <FileTextIcon /> readme.txt - Notepad
      </Toggle>
      <Toggle
        aria-label="Display Properties"
        className="w-44 justify-start px-2"
      >
        <MonitorIcon /> Display Properties
      </Toggle>
      <Toggle
        aria-label="Connecting to 98ui Online"
        className="w-44 justify-start px-2"
      >
        <PhoneIcon /> Connecting to 98ui...
      </Toggle>
      <div className="ml-auto flex h-7 items-center gap-2 bg-background px-2 text-xs shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#808080]">
        <Tooltip>
          <TooltipTrigger>
            <Volume2Icon className="size-4" aria-label="Volume" />
          </TooltipTrigger>
          <TooltipContent>Volume</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <span className="tabular-nums">4:20 PM</span>
          </TooltipTrigger>
          <TooltipContent>Thursday, August 24, 1995</TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
