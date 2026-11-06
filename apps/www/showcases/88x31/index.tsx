import Link from "next/link"
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  WebBanner,
  WebButton,
  WebButtonLabel,
  WebButtonNow,
  WebButtonStrip,
} from "ui98"

import { CATEGORIES, WALL } from "@/showcases/88x31/buttons"
import { ButtonMaker } from "@/showcases/88x31/maker"

const navy = "linear-gradient(180deg,#2a5bd7,#000080 55%,#00005a)"
const silver = "linear-gradient(180deg,#f4f4f4,#c8c8c8 60%,#a8a8a8)"

const NAV = [
  { href: "#wall", top: "the", label: "WALL" },
  { href: "#maker", top: "button", label: "MAKER" },
  { href: "#link", top: "link to", label: "US" },
  { href: "/", top: "ui98", label: "HOME" },
]

const LINK_SNIPPET = `import { WebButton, WebButtonLabel, WebButtonStrip } from "ui98"

<WebButton href="https://ui98.dev" border="plate" font="verdana"
  background="linear-gradient(180deg,#2a5bd7,#000080)" color="#fff">
  <WebButtonStrip>get</WebButtonStrip>
  <WebButtonLabel top="pnpm i">ui98</WebButtonLabel>
</WebButton>`

// The 88x31 Button Club: a whole page drawn in the vocabulary of the
// late-90s button wall: bevelled silver plates, navy gradients, red "Now!".
export default function ButtonClub() {
  return (
    <div className="mx-auto flex max-w-[980px] flex-col gap-6 px-3 py-6 sm:px-6">
      {/* The starry navy intro box with the gold double rule. */}
      <header className="border-[5px] border-double border-[#ffcc00] bg-[#000080] bg-[radial-gradient(#ffffff_0.5px,transparent_1px),radial-gradient(#8080ff_0.5px,transparent_1px)] bg-[length:13px_13px,7px_7px] bg-[position:0_0,3px_4px] px-4 py-5 text-center font-[family-name:'Times_New_Roman',Tinos,serif] text-white shadow-[4px_4px_0_#000]">
        <h1 className="font-heading text-3xl tracking-wide text-[#ffcc00] italic [text-shadow:2px_2px_0_#c00000] sm:text-4xl">
          The 88x31 Button Club
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-lg leading-snug">
          Here is a collection of web buttons in the style of the 1990s and
          2000s, the tiny ads every homepage traded. Every one is a live ui98
          component, not a GIF. Make your own below, and use them to your
          liking.
        </p>
        <div className="mt-4 flex justify-center">
          <WebBanner
            href="#maker"
            border="plate"
            font="arial"
            background="linear-gradient(90deg,#c00000,#ff6000,#ffcc00)"
            color="#ffffff"
            className="[text-shadow:1px_1px_0_#000]"
          >
            <WebButtonStrip
              background="#000"
              color="#ffcc00"
              className="-ml-3 w-[18px] text-[9px]"
            >
              free
            </WebButtonStrip>
            Make your OWN button, 100% FREE!!
            <WebButtonNow className="text-[18px] text-[#ffff00]" />
          </WebBanner>
        </div>
      </header>

      <nav
        aria-label="Sections"
        className="flex flex-wrap justify-center gap-2"
      >
        {NAV.map((item) => (
          <WebButton
            key={item.href}
            render={<Link href={item.href} />}
            border="plate"
            font="verdana"
            background={silver}
            color="#000080"
          >
            <WebButtonLabel top={item.top}>{item.label}</WebButtonLabel>
          </WebButton>
        ))}
      </nav>

      <section id="wall" className="scroll-mt-4">
        <Card>
          <CardHeader>
            <CardTitle>The Wall</CardTitle>
            <CardDescription>
              {WALL.length} buttons and counting. Hover for the alt text.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                {CATEGORIES.map((category) => (
                  <TabsTrigger key={category.value} value={category.value}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {CATEGORIES.map((category) => (
                <TabsContent key={category.value} value={category.value}>
                  <div className="flex flex-wrap justify-center gap-[6px]">
                    {WALL.filter(
                      (b) =>
                        category.value === "all" ||
                        b.category === category.value
                    ).map((b) => (
                      <Tooltip key={b.id}>
                        <TooltipTrigger
                          render={<span tabIndex={0} />}
                          className="outline-none focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-black"
                        >
                          {b.button}
                        </TooltipTrigger>
                        <TooltipContent>{b.tip}</TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </section>

      <section id="maker" className="scroll-mt-4">
        <ButtonMaker />
      </section>

      <section id="link" className="scroll-mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Link to us!</CardTitle>
            <CardDescription>Put our button on your page.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4 sm:flex-row">
            <div className="flex flex-col items-center gap-2">
              <WebButton
                border="plate"
                font="verdana"
                background={navy}
                color="#ffffff"
              >
                <WebButtonStrip>get</WebButtonStrip>
                <WebButtonLabel top="pnpm i">ui98</WebButtonLabel>
              </WebButton>
              <Badge variant="secondary">88 x 31</Badge>
            </div>
            <pre className="min-w-0 flex-1 overflow-x-auto bg-black p-3 font-mono text-xs leading-relaxed text-[#00ff40]">
              <code>{LINK_SNIPPET}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <footer className="flex flex-col items-center gap-3 pb-4 text-center text-sm">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <WebButton
            href="/geocities"
            border="plate"
            font="verdana"
            background={silver}
            color="#000"
          >
            « prev
          </WebButton>
          <WebButton
            href="/win95"
            border="plate"
            font="pixel"
            background="#000"
            color="#ff40ff"
          >
            ui98 webring
          </WebButton>
          <WebButton
            href="/y2k"
            border="plate"
            font="verdana"
            background={silver}
            color="#000"
          >
            next »
          </WebButton>
        </div>
        <p>
          You are visitor{" "}
          <span className="bg-black px-1 font-mono text-[#00ff40]">002417</span>{" "}
          · Best viewed at 800x600 · <Badge>Now!</Badge>
        </p>
      </footer>
    </div>
  )
}
