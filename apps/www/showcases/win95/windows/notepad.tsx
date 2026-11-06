import { FileTextIcon } from "lucide-react"

import { Window } from "@/showcases/win95/window"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "ui98"
import { Textarea } from "ui98"

const README = `ui98 README.TXT
================

ui98 is a design system for the internet
that was. Accessible React components
in the skin of one of three eras:

  * win95      bevels, title bars, 16 colors
  * geocities  tables, Times, blue links
  * y2k        glossy, rounded, very blue

Install:

  pnpm i ui98

Best viewed at 800x600.
`

export function NotepadWindow() {
  return (
    <Window
      title="readme.txt - Notepad"
      icon={<FileTextIcon />}
      contentClassName="gap-2"
    >
      <Menubar className="-mx-1">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New <MenubarShortcut>Ctrl+N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Open... <MenubarShortcut>Ctrl+O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Save <MenubarShortcut>Ctrl+S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Word Wrap</MenubarItem>
            <MenubarItem>Set Font...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Search</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Find... <MenubarShortcut>F3</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>About Notepad</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Textarea
        aria-label="readme.txt"
        defaultValue={README}
        className="min-h-[300px] resize-none font-mono text-xs leading-4 whitespace-pre"
      />
    </Window>
  )
}
