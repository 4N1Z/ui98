import { Badge } from "ui98"

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>NEW!</Badge>
      <Badge variant="destructive">HOT</Badge>
      <Badge variant="secondary">Y2K READY</Badge>
      <Badge variant="outline">Shareware</Badge>
      <Badge variant="ghost">v1.0b</Badge>
    </div>
  )
}
