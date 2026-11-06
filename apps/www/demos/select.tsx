import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "ui98"

const resolutions = [
  { label: "640 by 480 pixels", value: "640x480" },
  { label: "800 by 600 pixels", value: "800x600" },
  { label: "1024 by 768 pixels", value: "1024x768" },
  { label: "1280 by 1024 pixels", value: "1280x1024" },
]

export default function SelectDemo() {
  return (
    <Select items={resolutions} defaultValue="800x600">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Screen area" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Screen area</SelectLabel>
          {resolutions.map((res) => (
            <SelectItem key={res.value} value={res.value}>
              {res.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
