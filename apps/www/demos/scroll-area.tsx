import { ScrollArea, Separator } from "ui98"

const midis = [
  "CANYON.MID",
  "PASSPORT.MID",
  "TOWN.MID",
  "FLOURISH.MID",
  "ONESTOP.MID",
  "XFILES.MID",
  "TITANIC.MID",
  "MACARENA.MID",
  "MISSION.MID",
  "ZELDA.MID",
  "MARIO64.MID",
  "TETRIS.MID",
  "FRIENDS.MID",
  "STARWARS.MID",
]

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-64 w-56 border">
      <div className="p-3">
        <h4 className="mb-3 text-sm font-bold">My MIDI Jukebox</h4>
        {midis.map((midi) => (
          <div key={midi}>
            <div className="text-sm">{midi}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
