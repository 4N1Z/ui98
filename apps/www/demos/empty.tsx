import { MailIcon } from "lucide-react"

import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "ui98"

export default function EmptyDemo() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <MailIcon />
        </EmptyMedia>
        <EmptyTitle>No new messages</EmptyTitle>
        <EmptyDescription>
          Your Inbox is empty. Check back after your next dial-up session.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Send and Receive</Button>
      </EmptyContent>
    </Empty>
  )
}
