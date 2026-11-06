import { TriangleAlertIcon } from "lucide-react"

import { Window } from "@/showcases/win95/window"
import { Button } from "ui98"

export function ErrorBox() {
  return (
    <Window
      title="ui98"
      className="w-[380px]"
      closeOnly
      footer={
        <>
          <Button>Close</Button>
          <Button variant="outline">Details &gt;&gt;</Button>
        </>
      }
    >
      <div className="flex items-start gap-3">
        <TriangleAlertIcon className="size-8 shrink-0 fill-chart-4 text-black" />
        <p>
          This program has performed an illegal operation and will be shut down.
          If the problem persists, contact the program vendor.
        </p>
      </div>
    </Window>
  )
}
