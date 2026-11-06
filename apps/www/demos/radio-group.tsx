import { Label, RadioGroup, RadioGroupItem } from "ui98"

export default function RadioGroupDemo() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-bold">
        What do you want the computer to do?
      </span>
      <RadioGroup defaultValue="shutdown">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="shutdown" id="shutdown" />
          <Label htmlFor="shutdown">Shut down the computer?</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="restart" id="restart" />
          <Label htmlFor="restart">Restart the computer?</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="msdos" id="msdos" />
          <Label htmlFor="msdos">Restart the computer in MS-DOS mode?</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
