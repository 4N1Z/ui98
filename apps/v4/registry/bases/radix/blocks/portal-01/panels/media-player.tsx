import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
  SquareIcon,
  Volume2Icon,
} from "lucide-react"

import { Button } from "@/registry/bases/radix/ui/button"
import { ButtonGroup } from "@/registry/bases/radix/ui/button-group"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/radix/ui/card"
import { Slider } from "@/registry/bases/radix/ui/slider"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/radix/ui/table"

const PLAYLIST = [
  { title: "Clocks", artist: "Coldplay", length: "5:07" },
  { title: "Hey Ya!", artist: "OutKast", length: "3:55" },
  { title: "Crazy in Love", artist: "Beyoncé", length: "3:56" },
  { title: "Seven Nation Army", artist: "The White Stripes", length: "3:52" },
]

export function MediaPlayerPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Windows Media Player</CardTitle>
        <CardDescription>Now Playing</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex h-20 items-end justify-between rounded-md border border-[#1b5fb8] bg-[linear-gradient(135deg,#0b2545,#0a64d6_60%,#3a8bf0)] p-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.3)]">
          <div>
            <div className="text-sm font-bold [text-shadow:0_1px_1px_rgba(0,0,0,.5)]">
              Clocks
            </div>
            <div className="text-xs text-white/80">
              Coldplay · A Rush of Blood to the Head
            </div>
          </div>
          <div className="text-xs tabular-nums text-white/80">01:53 / 05:07</div>
        </div>
        <Slider
          defaultValue={[37]}
          max={100}
          step={1}
          aria-label="Seek"
        />
        <div className="flex items-center gap-3">
          <ButtonGroup>
            <Button variant="secondary" size="icon-sm" aria-label="Previous">
              <SkipBackIcon />
            </Button>
            <Button size="icon-sm" aria-label="Play">
              <PlayIcon />
            </Button>
            <Button variant="secondary" size="icon-sm" aria-label="Pause">
              <PauseIcon />
            </Button>
            <Button variant="secondary" size="icon-sm" aria-label="Stop">
              <SquareIcon />
            </Button>
            <Button variant="secondary" size="icon-sm" aria-label="Next">
              <SkipForwardIcon />
            </Button>
          </ButtonGroup>
          <div className="ml-auto flex w-32 items-center gap-2">
            <Volume2Icon className="text-muted-foreground size-4" />
            <Slider defaultValue={[70]} max={100} aria-label="Volume" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8">#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Artist</TableHead>
              <TableHead className="text-right">Length</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PLAYLIST.map((track, index) => (
              <TableRow
                key={track.title}
                data-state={index === 0 ? "selected" : undefined}
              >
                <TableCell className="tabular-nums">{index + 1}</TableCell>
                <TableCell>{track.title}</TableCell>
                <TableCell>{track.artist}</TableCell>
                <TableCell className="text-right tabular-nums">
                  {track.length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
