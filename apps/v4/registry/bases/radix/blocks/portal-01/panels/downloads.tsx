import { DownloadIcon, PackageIcon, StarIcon } from "lucide-react"

import { Badge } from "@/registry/bases/radix/ui/badge"
import { Button } from "@/registry/bases/radix/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/radix/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/radix/ui/dialog"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/radix/ui/item"
import { Progress } from "@/registry/bases/radix/ui/progress"

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
              98ui Toolbar 2.0
              <Badge variant="secondary">
                <StarIcon /> Editors&apos; pick
              </Badge>
            </ItemTitle>
            <ItemDescription>
              Pop-up blocker, web search and weather in your browser. Now
              with glossy buttons.
            </ItemDescription>
          </ItemContent>
        </Item>
      </CardContent>
      <CardFooter className="justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <DownloadIcon />
              Install Toolbar
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>98ui Toolbar 2.0 Setup</DialogTitle>
              <DialogDescription>
                Please wait while Setup installs 98ui Toolbar on your
                computer. This may take several minutes.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold">Copying new files...</span>
                <span className="text-muted-foreground tabular-nums">43%</span>
              </div>
              <Progress value={43} aria-label="Installation progress" />
              <p className="text-muted-foreground text-xs">
                Installing: C:\Program Files\98ui\Toolbar\gloss.dll
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
