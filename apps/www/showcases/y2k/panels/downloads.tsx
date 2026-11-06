import { DownloadIcon, PackageIcon, StarIcon } from "lucide-react"

import { Badge } from "ui98"
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "ui98"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "ui98"
import { Progress } from "ui98"

export function DownloadsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Download of the Day</CardTitle>
        <CardDescription>Free · 2.4 MB · 1,204,331 downloads</CardDescription>
      </CardHeader>
      <CardContent>
        <Item variant="muted">
          <ItemMedia variant="icon">
            <PackageIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              ui98 Toolbar 2.0
              <Badge variant="secondary">
                <StarIcon /> Editors&apos; pick
              </Badge>
            </ItemTitle>
            <ItemDescription>
              Pop-up blocker, web search and weather in your browser. Now with
              glossy buttons.
            </ItemDescription>
          </ItemContent>
        </Item>
      </CardContent>
      <CardFooter className="justify-end">
        <Dialog>
          <DialogTrigger render={<Button />}>
            <DownloadIcon />
            Install Toolbar
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>ui98 Toolbar 2.0 Setup</DialogTitle>
              <DialogDescription>
                Please wait while Setup installs ui98 Toolbar on your computer.
                This may take several minutes.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold">Copying new files...</span>
                <span className="text-muted-foreground tabular-nums">43%</span>
              </div>
              <Progress value={43} aria-label="Installation progress" />
              <p className="text-muted-foreground text-xs">
                Installing: C:\Program Files\ui98\Toolbar\gloss.dll
              </p>
            </div>
            <DialogFooter>
              <Button variant="secondary" disabled>
                &lt; Back
              </Button>
              <Button variant="secondary" disabled>
                Next &gt;
              </Button>
              <Button variant="secondary">Cancel</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
