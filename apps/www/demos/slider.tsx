import { Label, Slider } from "ui98"

export default function SliderDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Label>Volume Control</Label>
        <Slider defaultValue={[75]} max={100} step={1} />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Mouse pointer speed</Label>
        <Slider defaultValue={[3]} min={1} max={10} step={1} />
        <div className="flex justify-between text-xs">
          <span>Slow</span>
          <span>Fast</span>
        </div>
      </div>
    </div>
  )
}
