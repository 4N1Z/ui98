import { PlayIcon } from "lucide-react"

import { Window } from "@/registry/bases/radix/blocks/desktop-01/window"
import { Button } from "@/registry/bases/radix/ui/button"
import { Field, FieldLabel } from "@/registry/bases/radix/ui/field"
import { Input } from "@/registry/bases/radix/ui/input"

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
          Type the name of a program, folder, or document, and 98ui will open
          it for you.
        </p>
      </div>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="run-open" className="w-12">
          Open:
        </FieldLabel>
        <Input
          id="run-open"
          defaultValue="npx shadcn add @98ui/button"
          className="font-mono"
        />
      </Field>
    </Window>
  )
}
