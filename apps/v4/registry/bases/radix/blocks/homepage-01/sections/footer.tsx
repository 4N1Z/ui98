import { TriangleAlertIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/radix/ui/alert"
import { Separator } from "@/registry/bases/radix/ui/separator"

export function Footer() {
  return (
    <footer className="flex flex-col gap-3 text-center text-[13px]">
      <Alert>
        <TriangleAlertIcon />
        <AlertTitle>This page is under construction!!!</AlertTitle>
        <AlertDescription>
          Some links may not work yet. Check back soon for the Cats section
          and my new MIDI jukebox.
        </AlertDescription>
      </Alert>
      <Separator />
      <p>
        This page is best viewed with Netscape Navigator 4.0 at 800x600.
        <br />
        &copy; 1999 aniz. Last updated: 11/02/99. Page created with Notepad.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:webmaster@98ui.geocities.com"
          className="text-primary underline"
        >
          webmaster@98ui.geocities.com
        </a>
      </p>
      <p className="text-xs">
        <a href="#" className="text-primary underline">
          [ Back to top ]
        </a>{" "}
        |{" "}
        <a href="#" className="text-primary underline">
          [ Sign Guestbook ]
        </a>{" "}
        |{" "}
        <a href="#" className="text-primary underline">
          [ View Guestbook ]
        </a>
      </p>
    </footer>
  )
}
