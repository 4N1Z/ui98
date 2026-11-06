import { PlayIcon } from "lucide-react"

import { Window } from "@/showcases/win95/window"
import { Button } from "ui98"
import { Field, FieldLabel } from "ui98"
import { Input } from "ui98"

export function RunWindow() {
  return (
    <Window
      title="Run"
      className="w-[360px]"
      closeOnly
      footer={
        <>
          <Button>OK</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="outline">Browse...</Button>
        </>
      }
    >
      <div className="flex items-start gap-3">
        <PlayIcon className="size-8 shrink-0 fill-primary text-primary" />
        <p>
          Type the name of a program, folder, or document, and ui98 will open it
          for you.
        </p>
      </div>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="run-open" className="w-12">
          Open:
        </FieldLabel>
        <Input id="run-open" defaultValue="pnpm i ui98" className="font-mono" />
      </Field>
    </Window>
  )
}
