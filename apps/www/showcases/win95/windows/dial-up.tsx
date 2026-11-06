import { MonitorIcon, PhoneIcon } from "lucide-react"

import { Window } from "@/showcases/win95/window"
import { Button } from "ui98"
import { Progress } from "ui98"

export function DialUpWindow() {
  return (
    <Window
      title="Connecting to ui98 Online"
      icon={<PhoneIcon />}
      className="w-[360px]"
      closeOnly
      footer={<Button variant="outline">Cancel</Button>}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-primary">
          <MonitorIcon className="size-8" />
          <span className="font-mono text-xs tracking-widest">·····</span>
          <MonitorIcon className="size-8" />
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p>
            <span className="font-bold">Status:</span> Verifying user name and
            password...
          </p>
          <p className="text-muted-foreground">Dialing attempt 3 of 10</p>
        </div>
      </div>
      <Progress value={65} aria-label="Connection progress" />
      <p className="font-mono text-xs">56,000 bps &middot; 00:00:42</p>
    </Window>
  )
}
