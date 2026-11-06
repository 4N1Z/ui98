import { HardDriveIcon } from "lucide-react"
import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from "ui98"

import { Taskbar } from "@/showcases/win95/taskbar"
import { Topbar } from "@/showcases/win95/topbar"
import { DialUpWindow } from "@/showcases/win95/windows/dial-up"
import { DisplayPropertiesWindow } from "@/showcases/win95/windows/display-properties"
import { ErrorBox } from "@/showcases/win95/windows/error-box"
import { ExplorerWindow } from "@/showcases/win95/windows/explorer"
import { FindWindow } from "@/showcases/win95/windows/find"
import { NotepadWindow } from "@/showcases/win95/windows/notepad"
import { RunWindow } from "@/showcases/win95/windows/run"
import { WelcomeWindow } from "@/showcases/win95/windows/welcome"

// A Windows 95 session built from ui98 components, laid out like the Y2K
// portal: a toolbar, a system notice, three columns of windows and the
// taskbar. The page is a fixed 1280px canvas so it reads like a screenshot.
export default function Desktop01() {
  return (
    <div className="overflow-auto bg-[#008080] contain-[paint] dark:bg-[#1a1a1a]">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="relative flex min-h-[1000px] w-[1280px] flex-col"
          data-slot="capture-target"
        >
          <div className="relative flex flex-1 flex-col gap-4 p-4 pb-16">
            <Topbar />
            <Alert>
              <HardDriveIcon />
              <AlertTitle>New Hardware Found</AlertTitle>
              <AlertDescription>
                Windows has found a Standard 28800 bps Modem and is installing
                the software for it.
              </AlertDescription>
              <AlertAction>
                <Button size="xs" variant="secondary">
                  Details
                </Button>
              </AlertAction>
            </Alert>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="flex flex-col gap-4">
                <WelcomeWindow />
                <DisplayPropertiesWindow />
                <RunWindow />
              </div>
              <div className="flex flex-col gap-4">
                <ExplorerWindow />
                <FindWindow />
              </div>
              <div className="flex flex-col gap-4">
                <NotepadWindow />
                <DialUpWindow />
                <ErrorBox />
              </div>
            </div>
          </div>
          <Taskbar />
        </div>
      </div>
    </div>
  )
}
