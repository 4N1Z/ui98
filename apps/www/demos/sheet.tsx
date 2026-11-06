import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "ui98"

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Favorites
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Add Favorite</SheetTitle>
          <SheetDescription>
            Internet Explorer will add this page to your Favorites list.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fav-name">Name</Label>
            <Input id="fav-name" defaultValue="Dave's Ultimate Pokemon Page" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="fav-url">URL</Label>
            <Input
              id="fav-url"
              defaultValue="http://www.angelfire.com/pokemon/dave"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>OK</SheetClose>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
