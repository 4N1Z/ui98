import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "ui98"

const buddies = [
  { name: "SkaterBoi99", initials: "SB" },
  { name: "xXAngelXx", initials: "AX" },
  { name: "N64Kid", initials: "NK" },
]

export default function AvatarDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        {buddies.map((buddy) => (
          <div key={buddy.name} className="flex flex-col items-center gap-1">
            <Avatar size="lg">
              <AvatarFallback>{buddy.initials}</AvatarFallback>
              <AvatarBadge />
            </Avatar>
            <span className="text-xs">{buddy.name}</span>
          </div>
        ))}
      </div>
      <AvatarGroup>
        {buddies.map((buddy) => (
          <Avatar key={buddy.name}>
            <AvatarFallback>{buddy.initials}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+12</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}
