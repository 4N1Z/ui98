import { FolderIcon, SaveIcon } from "lucide-react"

import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "ui98"

export default function ItemDemo() {
  return (
    <ItemGroup className="w-full max-w-md gap-2">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <SaveIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>WINZIP95.EXE</ItemTitle>
          <ItemDescription>
            WinZip 6.3 for Windows 95 - 912 KB - Shareware
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Download</Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FolderIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>MIDI Collection</ItemTitle>
          <ItemDescription>48 files - Last modified 10/31/1999</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Open
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}
