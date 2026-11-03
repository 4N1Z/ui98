import { cn } from "cn"
import {
  BriefcaseIcon,
  GlobeIcon,
  MonitorIcon,
  NetworkIcon,
  Trash2Icon,
} from "lucide-react"

const ICONS = [
  { label: "My Computer", icon: MonitorIcon, selected: true },
  { label: "Network Neighborhood", icon: NetworkIcon },
  { label: "Recycle Bin", icon: Trash2Icon },
  { label: "My Briefcase", icon: BriefcaseIcon },
  { label: "The Internet", icon: GlobeIcon },
]

export function DesktopIcons() {
  return (
    <ul className="flex flex-col gap-5">
      {ICONS.map(({ label, icon: Icon, selected }) => (
        <li key={label}>
          <button
            type="button"
            className="flex w-20 flex-col items-center gap-1 outline-none focus-visible:[&>span]:outline-1 focus-visible:[&>span]:outline-dotted focus-visible:[&>span]:outline-white"
          >
            <Icon
              className={cn(
                "size-8 text-white",
                selected && "text-primary-foreground opacity-80"
              )}
              strokeWidth={1.5}
            />
            <span
              className={cn(
                "px-0.5 text-center text-xs leading-tight text-white",
                selected && "bg-primary text-primary-foreground"
              )}
            >
              {label}
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}
