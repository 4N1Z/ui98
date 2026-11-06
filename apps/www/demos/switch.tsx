import { Label, Switch } from "ui98"

export default function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch id="active-desktop" defaultChecked />
        <Label htmlFor="active-desktop">
          View as Web Page (Active Desktop)
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="offline" />
        <Label htmlFor="offline">Work Offline</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="clock" size="sm" defaultChecked />
        <Label htmlFor="clock">Show the clock</Label>
      </div>
    </div>
  )
}
