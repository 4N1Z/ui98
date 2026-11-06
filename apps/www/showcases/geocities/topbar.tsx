import { Badge, Button } from "ui98"

const LINKS = [
  "Home",
  "About Me",
  "My Cats",
  "Links",
  "Guestbook",
  "Webrings",
  "Email Me",
]

// The homepage banner squeezed into the portal's top bar: the big red title,
// the NEW!/UPDATED badges, and the navigation links in a row.
export function Topbar() {
  return (
    <header className="flex items-center gap-4 border-2 border-black bg-[#ffffcc] px-4 py-3 dark:bg-[#1a1a00]">
      <div className="flex flex-col">
        <h1 className="text-[28px] leading-none font-bold whitespace-nowrap text-[#ff0000] [text-shadow:2px_2px_0_#ffff00] dark:text-[#ff3333] dark:[text-shadow:2px_2px_0_#660000]">
          Welcome to my Homepage!!!
        </h1>
        <p className="mt-1 text-[13px] font-bold">
          <span className="text-[#ff00ff]">***</span> my corner of the web{" "}
          <span className="text-[#ff00ff]">***</span>
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-start gap-1">
        <Badge>NEW!</Badge>
        <Badge variant="secondary">UPDATED 11/02/99</Badge>
      </div>
      <nav
        aria-label="Homepage"
        className="ml-auto flex flex-wrap items-center justify-end gap-x-1 text-[13px]"
      >
        {LINKS.map((link) => (
          <span key={link} className="flex items-center">
            <span aria-hidden className="text-[#ff0000]">
              &raquo;
            </span>
            <Button variant="link" size="sm" className="h-6 min-w-0 px-1">
              {link}
            </Button>
          </span>
        ))}
      </nav>
    </header>
  )
}
