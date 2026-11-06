import {
  Avatar,
  AvatarFallback,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "ui98"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link" />}>
        ~cyberkat/
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>CK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 text-sm">
            <span className="font-bold">CyberKat&apos;s Lair</span>
            <span>
              Sailor Moon fan art, MIDI files, and the best Tamagotchi tips on
              the web.
            </span>
            <span className="text-xs text-muted-foreground">
              Member of the Anime Webring since 1997
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
