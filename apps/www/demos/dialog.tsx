import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "ui98"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Run...
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Run</DialogTitle>
          <DialogDescription>
            Type the name of a program, folder, or document, and Windows will
            open it for you.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-3">
          <Label htmlFor="run-open">Open:</Label>
          <Input id="run-open" defaultValue="C:\WINDOWS\NOTEPAD.EXE" />
        </div>
        <DialogFooter>
          <DialogClose render={<Button />}>OK</DialogClose>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button variant="outline">Browse...</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
