import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "ui98"

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Welcome to my Homepage!</CardTitle>
        <CardDescription>Last updated: March 14, 1998</CardDescription>
        <CardAction>
          <Badge>NEW!</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="text-sm">
        Here you will find my Star Trek links, MIDI collection, and pictures of
        my cat Mr. Whiskers. You are visitor #004,217.
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Sign Guestbook</Button>
        <Button size="sm" variant="outline">
          Join Webring
        </Button>
      </CardFooter>
    </Card>
  )
}
