import {
  GlobeIcon,
  MessageCircleIcon,
  MusicIcon,
  ShieldAlertIcon,
  Volume2Icon,
} from "lucide-react"

import { Button } from "ui98"
import { Separator } from "ui98"
import { Toggle } from "ui98"
import { Tooltip, TooltipContent, TooltipTrigger } from "ui98"

function Flag() {
  return (
    <span aria-hidden className="grid size-4 -skew-y-6 grid-cols-2 gap-px">
      <span className="rounded-tl-sm bg-[#f35325]" />
      <span className="rounded-tr-sm bg-[#81bc06]" />
      <span className="rounded-bl-sm bg-[#05a6f0]" />
      <span className="rounded-br-sm bg-[#ffba08]" />
    </span>
  )
}

export function Taskbar() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-10 items-center gap-1 bg-[linear-gradient(to_bottom,#3168d5_0%,#4a8af4_8%,#245edb_40%,#1f4fc4_100%)] pr-0 shadow-[inset_0_1px_0_rgba(255,255,255,.4)]">
      <Button className="h-10 min-w-0 rounded-l-none rounded-r-xl border-0 bg-[linear-gradient(to_bottom,#7fe07f_0%,#3cb43c_45%,#2a9a2a_50%,#4cc44c_100%)] px-3 pr-4 text-base italic shadow-[inset_0_1px_0_rgba(255,255,255,.6),2px_0_6px_rgba(0,0,0,.35)] hover:brightness-110">
        <Flag />
        start
      </Button>
      <Separator orientation="vertical" className="mx-1 h-7 bg-white/30" />
      <Toggle
        pressed
        aria-label="ui98 Portal - Internet Explorer"
        className="h-7 w-60 min-w-0 justify-start overflow-hidden border-[#0c3a9a] bg-[linear-gradient(to_bottom,#1d4fb8,#163f98)] px-2 text-white shadow-[inset_0_1px_3px_rgba(0,0,0,.45)] hover:bg-[linear-gradient(to_bottom,#1d4fb8,#163f98)] hover:text-white"
      >
        <GlobeIcon />
        <span className="truncate">ui98 Portal - Internet Explorer</span>
      </Toggle>
      <Toggle
        aria-label="Windows Messenger"
        className="h-7 w-52 min-w-0 justify-start overflow-hidden border-[#1a4bb8] bg-[linear-gradient(to_bottom,#5c95f0,#3a74dc)] px-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.4)] hover:bg-[linear-gradient(to_bottom,#6ca2f5,#4a84e8)] hover:text-white"
      >
        <MessageCircleIcon />
        <span className="truncate">Windows Messenger</span>
      </Toggle>
      <Toggle
        aria-label="Windows Media Player"
        className="h-7 w-52 min-w-0 justify-start overflow-hidden border-[#1a4bb8] bg-[linear-gradient(to_bottom,#5c95f0,#3a74dc)] px-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.4)] hover:bg-[linear-gradient(to_bottom,#6ca2f5,#4a84e8)] hover:text-white"
      >
        <MusicIcon />
        <span className="truncate">Windows Media Player</span>
      </Toggle>
      <div className="ml-auto flex h-10 items-center gap-3 bg-[linear-gradient(to_bottom,#1b9de9_0%,#0f8ad8_8%,#0b7bc9_40%,#0a6fb8_100%)] px-3 text-xs text-white shadow-[inset_1px_0_0_rgba(0,0,0,.25),inset_2px_1px_0_rgba(255,255,255,.3)]">
        <Tooltip>
          <TooltipTrigger>
            <ShieldAlertIcon
              className="size-4 text-[#ffcf40]"
              aria-label="Security Center"
            />
          </TooltipTrigger>
          <TooltipContent>Your computer might be at risk</TooltipContent>
        </Tooltip>
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
          <TooltipContent>Friday, August 22, 2003</TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
