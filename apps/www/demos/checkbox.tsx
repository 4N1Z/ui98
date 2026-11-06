import { Checkbox, Label } from "ui98"

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="welcome" defaultChecked />
        <Label htmlFor="welcome">
          Show this Welcome Screen next time you start Windows
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="hidden" />
        <Label htmlFor="hidden">Show all files</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="readonly" disabled />
        <Label htmlFor="readonly">Read-only</Label>
      </div>
    </div>
  )
}
