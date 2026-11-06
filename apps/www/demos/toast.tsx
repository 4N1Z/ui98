"use client"

import { Button, Toaster, toast } from "ui98"

export default function ToastDemo() {
  return (
    <Toaster>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          onClick={() =>
            toast.add({
              title: "You've got mail!",
              description: "1 new message from SkaterBoi99.",
              type: "info",
            })
          }
        >
          Check Mail
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              title: "Download complete",
              description: "WINAMP20.EXE saved to C:\\DOWNLOAD",
              type: "success",
            })
          }
        >
          Download Winamp
        </Button>
      </div>
    </Toaster>
  )
}
