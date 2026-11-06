import {
  BriefcaseIcon,
  FolderOpenIcon,
  GlobeIcon,
  MonitorIcon,
  NetworkIcon,
  Trash2Icon,
} from "lucide-react"
import {
  Badge,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "ui98"

function Flag() {
  return (
    <span
      aria-hidden
      className="grid size-6 grid-cols-2 gap-px [image-rendering:pixelated]"
    >
      <span className="bg-destructive" />
      <span className="bg-chart-2" />
      <span className="bg-primary" />
      <span className="bg-chart-4" />
    </span>
  )
}

// The desktop shortcuts, as a row of toolbar links.
const LINKS = [
  {
    label: "My Computer",
    icon: MonitorIcon,
    tip: "C:\\, D:\\ and the Control Panel",
  },
  {
    label: "Network",
    icon: NetworkIcon,
    tip: "Network Neighborhood: 2 computers",
  },
  {
    label: "Recycle Bin",
    icon: Trash2Icon,
    tip: "3 items, 1.2 MB",
    badge: "3",
  },
  {
    label: "Briefcase",
    icon: BriefcaseIcon,
    tip: "My Briefcase is up to date",
  },
  { label: "Internet", icon: GlobeIcon, tip: "Connect to the Internet" },
]

// A Win95 toolbar strip in the place of the portal's search bar: the
// Explorer address bar plus the desktop shortcuts.
export function Topbar() {
  return (
    <div className="flex items-center gap-4 bg-background px-3 py-2 shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf,inset_-2px_-2px_#808080,inset_2px_2px_#ffffff]">
      <div className="flex items-center gap-2">
        <Flag />
        <span className="text-lg font-bold tracking-tight">
          ui98 <span className="font-normal">Desktop</span>
        </span>
      </div>
      <div role="search" className="flex flex-1 items-center gap-2">
        <span className="text-sm">Address</span>
        <InputGroup className="flex-1">
          <InputGroupAddon align="inline-start">
            <FolderOpenIcon />
          </InputGroupAddon>
          <InputGroupInput
            aria-label="Address"
            defaultValue="C:\ui98\components"
          />
          <InputGroupAddon align="inline-end">
            <Kbd>Enter</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <Button>Go</Button>
      </div>
      <Separator orientation="vertical" className="h-8" />
      <nav aria-label="Desktop shortcuts" className="flex items-center gap-0.5">
        {LINKS.map((link) => (
          <Tooltip key={link.label}>
            <TooltipTrigger
              render={<Button variant="ghost" size="sm" className="gap-1.5" />}
            >
              <link.icon />
              {link.label}
              {link.badge ? (
                <Badge className="h-4 px-1.5">{link.badge}</Badge>
              ) : null}
            </TooltipTrigger>
            <TooltipContent>{link.tip}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </div>
  )
}
