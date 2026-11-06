import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "ui98"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Set Counter...
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverHeader>
          <PopoverTitle>Hit Counter</PopoverTitle>
          <PopoverDescription>
            Pick a starting number and digit style.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Label htmlFor="counter-start" className="w-20">
              Start at
            </Label>
            <Input id="counter-start" defaultValue="000001" />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="counter-style" className="w-20">
              Style
            </Label>
            <Input id="counter-style" defaultValue="Odometer (green LED)" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
