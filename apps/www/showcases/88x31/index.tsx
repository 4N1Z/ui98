import Link from "next/link"
import { SparklesIcon } from "lucide-react"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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

const LINK_SNIPPET = `<WebButton href="https://ui98.dev"
  border="plate" font="verdana"
  background="linear-gradient(180deg,#2a5bd7,#000080)"
  color="#fff">
  <WebButtonStrip>get</WebButtonStrip>
  <WebButtonLabel top="pnpm i">ui98</WebButtonLabel>
</WebButton>`

// The 88x31 Button Club, laid out like the Y2K portal: a top bar, a notice,
// three columns of panels and a webring bar along the bottom. Everything is
// drawn in the vocabulary of the 1990s button wall.
export default function ButtonClub() {
  return (
    <div className="overflow-auto contain-[paint]">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="relative flex min-h-[1000px] w-[1280px] flex-col"
          data-slot="capture-target"
        >
          <div className="relative flex flex-1 flex-col gap-4 p-4 pb-16">
            {/* Top bar: the starry navy intro box with the gold rule. */}
            <header className="flex items-center gap-4 border-[5px] border-double border-[#ffcc00] bg-[#000080] bg-[radial-gradient(#ffffff_0.5px,transparent_1px),radial-gradient(#8080ff_0.5px,transparent_1px)] bg-[length:13px_13px,7px_7px] bg-[position:0_0,3px_4px] px-4 py-3 text-white shadow-[4px_4px_0_#000]">
              <div className="flex flex-col">
                <h1 className="font-heading text-[28px] leading-none tracking-wide whitespace-nowrap text-[#ffcc00] italic [text-shadow:2px_2px_0_#c00000]">
                  The 88x31 Button Club
                </h1>
                <p className="mt-1 font-[family-name:'Times_New_Roman',Tinos,serif] text-[15px]">
                  Every button here is a live ui98 component, not a GIF.
                </p>
              </div>
              <nav
                aria-label="Sections"
                className="ml-auto flex items-center gap-2"
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
            </header>

            <Alert>
              <SparklesIcon />
              <AlertTitle>NEW! Button Maker 2.0 is here</AlertTitle>
              <AlertDescription>
                Make your own 88x31 in seconds, 100% FREE!! No GIF editor
                required.
              </AlertDescription>
              <AlertAction>
                <Button size="xs" render={<Link href="#maker" />}>
                  Try it
                </Button>
              </AlertAction>
            </Alert>

            <div className="grid grid-cols-3 items-start gap-4">
              <div className="flex flex-col gap-4">
                <Card id="wall" className="scroll-mt-4">
                  <CardHeader>
                    <CardTitle>The Wall</CardTitle>
                    <CardDescription>
                      {WALL.length} buttons and counting. Hover for the alt
                      text.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="all">
                      <TabsList className="flex-wrap">
                        {CATEGORIES.map((category) => (
                          <TabsTrigger
                            key={category.value}
                            value={category.value}
                            className="px-2"
                          >
                            {category.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {CATEGORIES.map((category) => (
                        <TabsContent
                          key={category.value}
                          value={category.value}
                          className="p-2"
                        >
                          <div className="flex flex-wrap justify-center gap-[6px]">
                            {WALL.filter(
                              (b) =>
                                category.value === "all" ||
                                b.category === category.value
                            ).map((b) => (
                              <Tooltip key={b.id}>
                                <TooltipTrigger
                                  render={<span tabIndex={0} />}
                                  className="outline-none focus-visible:outline-1 focus-visible:outline-black focus-visible:outline-dotted"
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
              </div>

              <div id="maker" className="flex scroll-mt-4 flex-col gap-4">
                <ButtonMaker />
              </div>

              <div className="flex flex-col gap-4">
                <Card id="link" className="scroll-mt-4">
                  <CardHeader>
                    <CardTitle>Link to us!</CardTitle>
                    <CardDescription>
                      Put our button on your page.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
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
                    <pre className="overflow-x-auto bg-black p-3 font-mono text-[11px] leading-relaxed text-[#00ff40]">
                      <code>{LINK_SNIPPET}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Banner Exchange</CardTitle>
                    <CardDescription>
                      468x60. Show one, get one.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center gap-2">
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
                      Make your OWN button!!
                      <WebButtonNow className="text-[18px] text-[#ffff00]" />
                    </WebBanner>
                    <span className="text-xs text-muted-foreground">
                      Ad · banner rotation 1 of 12
                    </span>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Club Stats</CardTitle>
                    <CardDescription>Updated every Sunday</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Buttons on the wall</span>
                      <Badge variant="outline">{WALL.length}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Members</span>
                      <Badge variant="outline">1,337</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Hottest button</span>
                      <Badge>Now!</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* The webring bar, where the portal has its taskbar. */}
          <footer className="flex h-11 items-center gap-2 border-t-2 border-black bg-(image:--navy-plate) px-3 text-sm text-white">
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
            <span className="ml-auto flex items-center gap-2 [text-shadow:1px_1px_0_#000]">
              You are visitor
              <span className="bg-black px-1 font-mono text-[#00ff40] [text-shadow:none]">
                002417
              </span>
              · Best viewed at 800x600
            </span>
          </footer>
        </div>
      </div>
    </div>
  )
}
