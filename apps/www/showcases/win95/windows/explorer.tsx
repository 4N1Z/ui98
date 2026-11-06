import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ClipboardPasteIcon,
  CopyIcon,
  FileCode2Icon,
  FolderIcon,
  FolderOpenIcon,
  LayoutGridIcon,
  ScissorsIcon,
  Trash2Icon,
  Undo2Icon,
} from "lucide-react"

import { Window } from "@/showcases/win95/window"
import { Badge } from "ui98"
import { Button } from "ui98"
import { ButtonGroup } from "ui98"
import { Input } from "ui98"
import { Label } from "ui98"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "ui98"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "ui98"

const FILES = [
  { name: "button.tsx", size: "2 KB", type: "TSX File", modified: "8/24/95" },
  { name: "dialog.tsx", size: "4 KB", type: "TSX File", modified: "8/24/95" },
  { name: "select.tsx", size: "5 KB", type: "TSX File", modified: "8/24/95" },
  { name: "tabs.tsx", size: "2 KB", type: "TSX File", modified: "8/24/95" },
  { name: "progress.tsx", size: "1 KB", type: "TSX File", modified: "8/24/95" },
  { name: "menubar.tsx", size: "6 KB", type: "TSX File", modified: "8/24/95" },
  { name: "table.tsx", size: "2 KB", type: "TSX File", modified: "8/24/95" },
]

function ToolButton({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <Button variant="ghost" size="icon-sm" aria-label={label}>
      {children}
    </Button>
  )
}

export function ExplorerWindow() {
  return (
    <Window
      title="C:\ui98\components"
      icon={<FolderOpenIcon />}
      className="w-[560px]"
      contentClassName="gap-2"
    >
      <Menubar className="-mx-1">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New <MenubarShortcut>Ctrl+N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Open</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Close</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut <MenubarShortcut>Ctrl+X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy <MenubarShortcut>Ctrl+C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste <MenubarShortcut>Ctrl+V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Select All</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Large Icons</MenubarItem>
            <MenubarItem>Small Icons</MenubarItem>
            <MenubarItem>List</MenubarItem>
            <MenubarItem>Details</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Help Topics</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>About ui98</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center gap-1">
        <ButtonGroup>
          <ToolButton label="Back">
            <ArrowLeftIcon />
          </ToolButton>
          <ToolButton label="Forward">
            <ArrowRightIcon />
          </ToolButton>
          <ToolButton label="Up one level">
            <ArrowUpIcon />
          </ToolButton>
        </ButtonGroup>
        <ButtonGroup>
          <ToolButton label="Cut">
            <ScissorsIcon />
          </ToolButton>
          <ToolButton label="Copy">
            <CopyIcon />
          </ToolButton>
          <ToolButton label="Paste">
            <ClipboardPasteIcon />
          </ToolButton>
        </ButtonGroup>
        <ButtonGroup>
          <ToolButton label="Undo">
            <Undo2Icon />
          </ToolButton>
          <ToolButton label="Delete">
            <Trash2Icon />
          </ToolButton>
          <ToolButton label="Views">
            <LayoutGridIcon />
          </ToolButton>
        </ButtonGroup>
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="explorer-address">Address</Label>
        <Input
          id="explorer-address"
          defaultValue="C:\ui98\components"
          className="font-mono"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Size</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="flex items-center gap-1.5">
              <FolderIcon className="size-4 text-chart-4" /> blocks
            </TableCell>
            <TableCell className="text-right"></TableCell>
            <TableCell>File Folder</TableCell>
            <TableCell>8/24/95</TableCell>
          </TableRow>
          {FILES.map((file, index) => (
            <TableRow
              key={file.name}
              data-state={index === 2 ? "selected" : ""}
            >
              <TableCell className="flex items-center gap-1.5">
                <FileCode2Icon className="size-4" /> {file.name}
              </TableCell>
              <TableCell className="text-right">{file.size}</TableCell>
              <TableCell>{file.type}</TableCell>
              <TableCell>{file.modified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex gap-1">
        <Badge variant="outline" className="flex-1 justify-start">
          8 object(s)
        </Badge>
        <Badge variant="outline" className="w-24 justify-start">
          22.0 KB
        </Badge>
      </div>
    </Window>
  )
}
