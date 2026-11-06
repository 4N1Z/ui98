import { TriangleAlertIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "ui98"

import { Statusbar } from "@/showcases/geocities/statusbar"
import { Topbar } from "@/showcases/geocities/topbar"
import { About } from "@/showcases/geocities/sections/about"
import { ButtonsWall } from "@/showcases/geocities/sections/buttons-wall"
import { Guestbook } from "@/showcases/geocities/sections/guestbook"
import { Stats } from "@/showcases/geocities/sections/stats"
import { Webring } from "@/showcases/geocities/sections/webring"

// One "table cell" of the homepage: white, black-bordered, Times.
function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-black bg-background p-4 text-foreground">
      {children}
    </div>
  )
}

// A GeoCities personal homepage built from ui98 components, laid out like the
// Y2K portal: a top bar, a notice, three columns of boxes and a status bar,
// on a tiled starfield. The page is a fixed 1280px canvas.
export default function Homepage01() {
  return (
    <div className="overflow-auto bg-[#000033] bg-[radial-gradient(#ffffff_1px,transparent_1.6px),radial-gradient(#ffffff_0.8px,transparent_1.3px),radial-gradient(#ffff99_1.2px,transparent_1.8px)] bg-[length:97px_97px,53px_53px,181px_181px] bg-[position:0_0,27px_41px,70px_120px] contain-[paint]">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="relative flex min-h-[1000px] w-[1280px] flex-col"
          data-slot="capture-target"
        >
          <div className="relative flex flex-1 flex-col gap-4 p-4 pb-16">
            <Topbar />
            <Alert>
              <TriangleAlertIcon />
              <AlertTitle>This page is under construction!!!</AlertTitle>
              <AlertDescription>
                Some links may not work yet. Check back soon for the Cats
                section and my new MIDI jukebox.
              </AlertDescription>
            </Alert>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="flex flex-col gap-4">
                <Panel>
                  <About />
                </Panel>
              </div>
              <div className="flex flex-col gap-4">
                <Panel>
                  <Guestbook />
                </Panel>
              </div>
              <div className="flex flex-col gap-4">
                <Panel>
                  <Stats />
                </Panel>
                <Panel>
                  <Webring />
                </Panel>
                <Panel>
                  <ButtonsWall />
                </Panel>
              </div>
            </div>
          </div>
          <Statusbar />
        </div>
      </div>
    </div>
  )
}
