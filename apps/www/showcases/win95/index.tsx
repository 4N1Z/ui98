import { DesktopIcons } from "@/showcases/win95/desktop-icons"
import { Taskbar } from "@/showcases/win95/taskbar"
import { DialUpWindow } from "@/showcases/win95/windows/dial-up"
import { DisplayPropertiesWindow } from "@/showcases/win95/windows/display-properties"
import { ErrorBox } from "@/showcases/win95/windows/error-box"
import { ExplorerWindow } from "@/showcases/win95/windows/explorer"
import { FindWindow } from "@/showcases/win95/windows/find"
import { NotepadWindow } from "@/showcases/win95/windows/notepad"
import { RunWindow } from "@/showcases/win95/windows/run"
import { WelcomeWindow } from "@/showcases/win95/windows/welcome"

// A Windows 95 desktop built from ui98 components. The "desktop" is a fixed
// 1600x1000 canvas with absolutely positioned windows so it reads like a
// screenshot of a real session rather than a grid of cards.
export default function Desktop01() {
  return (
    <div className="overflow-auto bg-[#008080] contain-[paint] dark:bg-[#1a1a1a]">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="relative flex h-[1000px] w-[1600px] flex-col"
          data-slot="capture-target"
        >
          <div className="relative flex-1">
            <div className="absolute top-4 left-4">
              <DesktopIcons />
            </div>
            <div className="absolute top-6 left-36">
              <WelcomeWindow />
            </div>
            <div className="absolute top-[420px] left-36">
              <DisplayPropertiesWindow />
            </div>
            <div className="absolute top-10 left-[640px]">
              <ExplorerWindow />
            </div>
            <div className="absolute top-[560px] left-[600px]">
              <FindWindow />
            </div>
            <div className="absolute top-6 left-[1210px]">
              <NotepadWindow />
            </div>
            <div className="absolute top-[480px] left-[1100px]">
              <DialUpWindow />
            </div>
            <div className="absolute top-[730px] left-[1200px]">
              <ErrorBox />
            </div>
            <div className="absolute top-[740px] left-[180px]">
              <RunWindow />
            </div>
          </div>
          <Taskbar />
        </div>
      </div>
    </div>
  )
}
