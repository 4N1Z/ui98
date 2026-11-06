import { Checkbox, Label } from "ui98"

export default function LabelDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">I accept the End User License Agreement</Label>
    </div>
  )
}
