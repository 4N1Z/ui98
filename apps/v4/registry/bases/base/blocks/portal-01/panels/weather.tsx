import {
  CloudIcon,
  CloudRainIcon,
  CloudSunIcon,
  SunIcon,
  WindIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/bases/base/ui/native-select"
import { Separator } from "@/registry/bases/base/ui/separator"

const FORECAST = [
  { day: "Fri", hi: 78, lo: 61, icon: SunIcon },
  { day: "Sat", hi: 74, lo: 58, icon: CloudSunIcon },
  { day: "Sun", hi: 69, lo: 55, icon: CloudRainIcon },
  { day: "Mon", hi: 71, lo: 56, icon: CloudIcon },
  { day: "Tue", hi: 76, lo: 60, icon: SunIcon },
]

export function WeatherPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather</CardTitle>
        <CardDescription>Updated 4:15 PM</CardDescription>
        <CardAction>
          <NativeSelect
            size="sm"
            aria-label="City"
            defaultValue="redmond"
            className="w-36 text-foreground"
          >
            <NativeSelectOption value="redmond">Redmond, WA</NativeSelectOption>
            <NativeSelectOption value="cupertino">
              Cupertino, CA
            </NativeSelectOption>
            <NativeSelectOption value="sonoma">Sonoma, CA</NativeSelectOption>
            <NativeSelectOption value="bliss">Bliss, Napa Valley</NativeSelectOption>
          </NativeSelect>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <SunIcon className="size-14 text-[#ff9900] drop-shadow-[0_2px_2px_rgba(0,0,0,.2)]" />
          <div>
            <div className="text-4xl font-bold tabular-nums">
              78<span className="align-top text-lg">°F</span>
            </div>
            <div className="text-muted-foreground text-sm">
              Sunny · Feels like 80°
            </div>
          </div>
          <div className="text-muted-foreground ml-auto flex flex-col items-end gap-1 text-xs">
            <span className="flex items-center gap-1">
              <WindIcon className="size-3.5" /> 6 mph NW
            </span>
            <span>Humidity 41%</span>
            <span>UV index 7</span>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between gap-1">
          {FORECAST.map((day) => (
            <div
              key={day.day}
              className="flex flex-col items-center gap-1 text-xs"
            >
              <span className="font-bold">{day.day}</span>
              <day.icon className="size-5 text-primary" />
              <Badge variant={day.day === "Fri" ? "default" : "secondary"}>
                {day.hi}°
              </Badge>
              <span className="text-muted-foreground tabular-nums">
                {day.lo}°
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
