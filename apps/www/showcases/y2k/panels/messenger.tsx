import {
  BellRingIcon,
  FrownIcon,
  HeartIcon,
  SendIcon,
  SmileIcon,
} from "lucide-react"

import { Avatar, AvatarBadge, AvatarFallback } from "ui98"
import { Button } from "ui98"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "ui98"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "ui98"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "ui98"
import { Separator } from "ui98"
import { Toggle } from "ui98"

const CONTACTS = [
  {
    initials: "xX",
    name: "xXsk8erboiXx",
    status: "Online",
    note: "brb dinner",
    dot: "bg-[#2cb52c]",
  },
  {
    initials: "JZ",
    name: "jenny~*",
    status: "Away",
    note: "~*~ listening to Clocks ~*~",
    dot: "bg-[#ff9900]",
  },
  {
    initials: "MK",
    name: "mike_k",
    status: "Busy",
    note: "Do not disturb",
    dot: "bg-[#d9341b]",
  },
]

const TRANSCRIPT = [
  {
    from: "xXsk8erboiXx",
    text: "yo did u see the new xp theme?? its so glossy lol",
  },
  { from: "me", text: "haha yeah the green start button is wild" },
  { from: "xXsk8erboiXx", text: "send me that wallpaper, the hill one" },
  { from: "me", text: "its called bliss. sending now :)" },
]

export function MessengerPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Windows Messenger</CardTitle>
        <CardDescription>xXsk8erboiXx - Conversation</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ItemGroup>
          {CONTACTS.map((contact) => (
            <Item key={contact.name} size="xs">
              <ItemMedia>
                <Avatar size="sm">
                  <AvatarFallback>{contact.initials}</AvatarFallback>
                  <AvatarBadge className={contact.dot} />
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>
                  {contact.name}
                  <span className="text-muted-foreground font-normal">
                    ({contact.status})
                  </span>
                </ItemTitle>
                <ItemDescription>{contact.note}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
        <Separator />
        <div className="flex h-36 flex-col gap-1.5 overflow-hidden rounded-sm border border-[#7f9db9] bg-white p-2 text-xs dark:border-[#2f4f80] dark:bg-[#0f2447]">
          {TRANSCRIPT.map((line, index) => (
            <p key={index}>
              <span
                className={
                  line.from === "me"
                    ? "font-bold text-[#1f9a1f]"
                    : "font-bold text-primary"
                }
              >
                {line.from === "me" ? "You" : line.from} says:
              </span>{" "}
              {line.text}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Toggle size="sm" aria-label="Smile emoticon" pressed>
            <SmileIcon />
          </Toggle>
          <Toggle size="sm" aria-label="Frown emoticon">
            <FrownIcon />
          </Toggle>
          <Toggle size="sm" aria-label="Heart emoticon">
            <HeartIcon />
          </Toggle>
          <Button
            variant="secondary"
            size="sm"
            className="ml-auto min-w-0"
            aria-label="Send a nudge"
          >
            <BellRingIcon />
            Nudge
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <InputGroup className="w-full">
          <InputGroupInput
            aria-label="Message"
            placeholder="Type a message..."
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="default" size="xs">
              <SendIcon />
              Send
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </CardFooter>
    </Card>
  )
}
