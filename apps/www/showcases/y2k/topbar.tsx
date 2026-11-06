import {
  Gamepad2Icon,
  MailIcon,
  MessageCircleIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react"

import { Badge } from "ui98"
import { Button } from "ui98"
import { InputGroup, InputGroupAddon, InputGroupInput } from "ui98"
import { Kbd } from "ui98"
import { Separator } from "ui98"
import { Tooltip, TooltipContent, TooltipTrigger } from "ui98"

function Orb() {
  return (
    <span
      aria-hidden
      className="size-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#9cc8ff_35%,#0a64d6_70%,#083d8a)] shadow-[0_2px_4px_rgba(0,0,0,.4),inset_0_1px_0_rgba(255,255,255,.8)]"
    />
  )
}

export function Topbar() {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/60 bg-white/70 px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,.2),inset_0_1px_0_#ffffff] backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
      <div className="flex items-center gap-2">
        <Orb />
        <span className="text-xl font-bold tracking-tight text-[#0a4fb9] [text-shadow:0_1px_0_#ffffff] dark:text-white dark:[text-shadow:none]">
          ui98 <span className="font-normal">Portal</span>
        </span>
      </div>
      <div role="search" className="flex flex-1 items-center gap-2">
        <InputGroup className="flex-1">
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            aria-label="Search the web"
            placeholder="Search the Web"
          />
          <InputGroupAddon align="inline-end">
            <Kbd>Enter</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <Button>Search Web</Button>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <nav aria-label="Portal links" className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger
            render={<Button variant="link" size="sm" className="gap-1.5" />}
          >
            <MailIcon />
            Mail
            <Badge className="h-4 px-1.5">3</Badge>
          </TooltipTrigger>
          <TooltipContent>You have 3 new messages</TooltipContent>
        </Tooltip>
        <Button variant="link" size="sm">
          <MessageCircleIcon />
          Messenger
        </Button>
        <Button variant="link" size="sm">
          <ShoppingCartIcon />
          Shopping
        </Button>
        <Button variant="link" size="sm">
          <Gamepad2Icon />
          Games
        </Button>
      </nav>
    </div>
  )
}
