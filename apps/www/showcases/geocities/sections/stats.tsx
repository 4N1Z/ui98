import {
  Label,
  Progress,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "ui98"

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

// The old sidebar widgets: hit counter, page-load meter, last update.
export function Stats() {
  return (
    <section className="flex flex-col gap-3 text-[13px]">
      <h2 className="text-xl font-bold">Site Stats</h2>
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
    </section>
  )
}
