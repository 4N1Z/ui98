import { Button, Label, Textarea } from "ui98"

export default function TextareaDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="guestbook">Sign my Guestbook!</Label>
      <Textarea
        id="guestbook"
        placeholder="Cool page!! Love the dancing baby. Check out my site too..."
        rows={4}
      />
      <Button size="sm" className="self-end">
        Submit Entry
      </Button>
    </div>
  )
}
