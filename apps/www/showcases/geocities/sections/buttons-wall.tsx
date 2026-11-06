import { cn } from "ui98"

import { Tooltip, TooltipContent, TooltipTrigger } from "ui98"

// 88x31 buttons: the universal currency of the 1999 web.
const BUTTONS: { label: string; className: string; tip: string }[] = [
  {
    label: "Netscape NOW!",
    className: "bg-[#000080] text-white",
    tip: "Download Netscape Navigator 4.0",
  },
  {
    label: "Best viewed 800x600",
    className: "bg-[#c0c0c0] text-black",
    tip: "Seriously, maximize your window",
  },
  {
    label: "GeoCities",
    className:
      "bg-[linear-gradient(90deg,#0000ee,#00aaff)] text-[#ffff00] italic",
    tip: "Hosted free on GeoCities",
  },
  {
    label: "Made with Notepad",
    className: "bg-white text-black",
    tip: "No WYSIWYG editors were harmed",
  },
  {
    label: "HTML 3.2",
    className: "bg-[#ff6600] text-white",
    tip: "Valid HTML 3.2",
  },
  {
    label: "Get Shockwave",
    className: "bg-[#009900] text-white",
    tip: "Required for the intro animation",
  },
  {
    label: "Y2K READY",
    className: "bg-[#ff0000] text-[#ffff00]",
    tip: "Tested and certified",
  },
  {
    label: "No Frames!",
    className: "bg-[#ff00ff] text-white",
    tip: "This site is 100% frame-free",
  },
  {
    label: "Under Construction",
    className:
      "bg-[repeating-linear-gradient(45deg,#ffcc00_0,#ffcc00_8px,#000_8px,#000_16px)] text-[#ffcc00] [&>span]:bg-black [&>span]:px-1",
    tip: "Pardon our dust",
  },
  {
    label: "Email me",
    className: "bg-[#00ffff] text-black",
    tip: "webmaster@ui98.geocities.com",
  },
  {
    label: "Sign my guestbook",
    className: "bg-[#ffff00] text-[#0000ee]",
    tip: "Please please please",
  },
  {
    label: "Link to me",
    className: "bg-black text-[#00ff00]",
    tip: "Right-click, Save Picture As...",
  },
]

export function ButtonsWall() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Buttons &amp; Awards</h2>
      <div className="flex flex-wrap justify-center gap-2 border-2 border-dashed border-border p-3">
        {BUTTONS.map((button) => (
          <Tooltip key={button.label}>
            <TooltipTrigger>
              <span
                className={cn(
                  "flex h-[31px] w-[88px] items-center justify-center border border-black px-1 text-center text-[10px] leading-[1.05] font-bold uppercase [image-rendering:pixelated]",
                  button.className
                )}
              >
                <span>{button.label}</span>
              </span>
            </TooltipTrigger>
            <TooltipContent>{button.tip}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  )
}
