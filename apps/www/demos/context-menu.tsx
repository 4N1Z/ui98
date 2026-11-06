import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "ui98"

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-72 items-center justify-center border border-dashed bg-[#008080] text-sm text-white">
        Right-click the desktop
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuSub>
          <ContextMenuSubTrigger>Arrange Icons</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>by Name</ContextMenuItem>
            <ContextMenuItem>by Type</ContextMenuItem>
            <ContextMenuItem>by Size</ContextMenuItem>
            <ContextMenuItem>by Date</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>Line up Icons</ContextMenuItem>
        <ContextMenuCheckboxItem defaultChecked>
          Auto Arrange
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem disabled>Paste</ContextMenuItem>
        <ContextMenuItem>
          Refresh <ContextMenuShortcut>F5</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Properties</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
