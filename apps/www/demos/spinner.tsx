import { Button, Spinner } from "ui98"

export default function SpinnerDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-sm">
        <Spinner />
        Dialing 555-0199... Verifying user name and password
      </div>
      <Button disabled size="sm">
        <Spinner /> Connecting...
      </Button>
    </div>
  )
}
