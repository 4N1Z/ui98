import { Button } from "@/registry/bases/base/ui/button"
import { Label } from "@/registry/bases/base/ui/label"
import { Progress } from "@/registry/bases/base/ui/progress"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

const LINKS = [
  "Home",
  "About Me",
  "My Cats",
  "Links",
  "Guestbook",
  "Webrings",
  "Email Me",
]

const COUNTER = "004217"

function HitCounter() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <span
          className="inline-flex gap-px border-2 border-[#808080] bg-[#808080] p-px"
          aria-label={`Visitor number ${Number(COUNTER)}`}
        >
          {COUNTER.split("").map((digit, i) => (
            <span
              key={i}
              className="flex h-6 w-4 items-center justify-center bg-black font-mono text-[15px] leading-none font-bold text-[#00ff00]"
            >
              {digit}
            </span>
          ))}
        </span>
      </TooltipTrigger>
      <TooltipContent>Counting since 03/14/99</TooltipContent>
    </Tooltip>
  )
}

export function Nav() {
  return (
    <nav className="flex flex-col gap-3 p-3 text-[13px]">
      <div className="text-center font-bold uppercase">~ Navigation ~</div>
      <ul className="flex flex-col">
        {LINKS.map((link) => (
          <li key={link} className="flex items-center gap-1">
            <span aria-hidden className="text-[#ff0000]">
              &raquo;
            </span>
            <Button
              variant="link"
              size="sm"
              className="h-6 min-w-0 justify-start px-1"
            >
              {link}
            </Button>
          </li>
        ))}
      </ul>
      <Separator />
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="font-bold">You are visitor #</span>
        <HitCounter />
      </div>
      <Separator />
      <div className="flex flex-col gap-1">
        <Label htmlFor="page-load">Page load (56k):</Label>
        <Progress id="page-load" value={72} aria-label="Page load progress" />
        <span className="text-right font-mono text-xs">72%</span>
      </div>
      <Separator />
      <div className="flex flex-col gap-1 text-center text-xs">
        <span className="font-bold">Sign my guestbook!</span>
        <span className="italic">Last update: 11/02/99</span>
      </div>
    </nav>
  )
}
