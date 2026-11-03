import { ShieldAlertIcon } from "lucide-react"

import { DownloadsPanel } from "@/registry/bases/base/blocks/portal-01/panels/downloads"
import { MediaPlayerPanel } from "@/registry/bases/base/blocks/portal-01/panels/media-player"
import { MessengerPanel } from "@/registry/bases/base/blocks/portal-01/panels/messenger"
import { NewsPanel } from "@/registry/bases/base/blocks/portal-01/panels/news"
import { SignInPanel } from "@/registry/bases/base/blocks/portal-01/panels/signin"
import { StocksPanel } from "@/registry/bases/base/blocks/portal-01/panels/stocks"
import { WeatherPanel } from "@/registry/bases/base/blocks/portal-01/panels/weather"
import { Taskbar } from "@/registry/bases/base/blocks/portal-01/taskbar"
import { Topbar } from "@/registry/bases/base/blocks/portal-01/topbar"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import { Button } from "@/registry/bases/base/ui/button"

// A 2003 web portal built from shadcn components: a Bliss-sky backdrop, a
// search bar, three columns of "desktop widgets" and an XP taskbar. The page
// is a fixed 1280px canvas so it reads like a screenshot of a real session.
export default function Portal01() {
  return (
    <div className="overflow-auto bg-[linear-gradient(180deg,#245edb_0%,#3a8bf0_30%,#bfe3ff_100%)] contain-[paint] dark:bg-[linear-gradient(180deg,#06142b_0%,#0f2447_40%,#1b3360_100%)]">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="relative flex min-h-[1000px] w-[1280px] flex-col"
          data-slot="capture-target"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,.45),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,.25),transparent_24%),radial-gradient(circle_at_60%_90%,rgba(255,255,255,.35),transparent_30%)]"
          />
          <div className="relative flex flex-1 flex-col gap-4 p-4 pb-16">
            <Topbar />
            <Alert>
              <ShieldAlertIcon />
              <AlertTitle>Your computer might be at risk</AlertTitle>
              <AlertDescription>
                Antivirus software might not be installed. Click this balloon
                to fix this problem.
              </AlertDescription>
              <AlertAction>
                <Button size="xs" variant="secondary">
                  Fix now
                </Button>
              </AlertAction>
            </Alert>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="flex flex-col gap-4">
                <WeatherPanel />
                <SignInPanel />
                <DownloadsPanel />
              </div>
              <div className="flex flex-col gap-4">
                <NewsPanel />
                <StocksPanel />
              </div>
              <div className="flex flex-col gap-4">
                <MessengerPanel />
                <MediaPlayerPanel />
              </div>
            </div>
          </div>
          <Taskbar />
        </div>
      </div>
    </div>
  )
}
