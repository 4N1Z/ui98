import { SaveIcon, TrashIcon } from "lucide-react"

import { Button } from "ui98"

export default function ButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button>OK</Button>
        <Button variant="outline">Cancel</Button>
        <Button variant="secondary">Apply</Button>
        <Button variant="ghost">Help</Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm">
          <SaveIcon /> Save As...
        </Button>
        <Button variant="destructive" size="sm">
          <TrashIcon /> Delete
        </Button>
        <Button variant="link" size="sm">
          Click here!
        </Button>
        <Button size="icon" variant="outline" aria-label="Save">
          <SaveIcon />
        </Button>
      </div>
    </div>
  )
}
