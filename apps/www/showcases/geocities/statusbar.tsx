import { LockIcon } from "lucide-react"
import { Progress, Separator } from "ui98"

// The browser's status bar, where the portal has its taskbar: "Document:
// Done", the page-load meter, and the footer links.
export function Statusbar() {
  return (
    <footer className="flex h-10 items-center gap-3 border-t-2 border-black bg-[#c0c0c0] px-3 text-[13px] text-black">
      <span className="font-bold">Document: Done</span>
      <Progress value={100} aria-label="Page loaded" className="w-32" />
      <Separator orientation="vertical" className="h-6" />
      <span>
        &copy; 1999 aniz · Made with Notepad · Best viewed with Netscape
        Navigator 4.0 at 800x600
      </span>
      <span className="ml-auto flex items-center gap-2 text-xs">
        <a href="#" className="text-[#0000ee] underline">
          [ Back to top ]
        </a>
        <a
          href="mailto:webmaster@ui98.geocities.com"
          className="text-[#0000ee] underline"
        >
          [ Email me ]
        </a>
        <LockIcon aria-label="Not secure" className="size-4 opacity-40" />
      </span>
    </footer>
  )
}
