import { TriangleAlertIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "ui98"

export default function AlertDemo() {
  return (
    <Alert className="max-w-md">
      <TriangleAlertIcon />
      <AlertTitle>Low Disk Space</AlertTitle>
      <AlertDescription>
        You are running out of disk space on drive C:. Click here to see if you
        can free space on this drive.
      </AlertDescription>
    </Alert>
  )
}
