import { Input, Label } from "ui98"

export default function InputDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="screen-name">Screen Name</Label>
        <Input id="screen-name" placeholder="Enter your AOL screen name" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" defaultValue="hunter2" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" defaultValue="Home" disabled />
      </div>
    </div>
  )
}
