import { NewspaperIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"
import { Badge } from "@/registry/bases/base/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/bases/base/ui/pagination"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

const HEADLINES = {
  top: [
    { title: "Blackout leaves 50 million without power across the Northeast", time: "2h ago", hot: true },
    { title: "Mars makes closest approach to Earth in 60,000 years", time: "4h ago", hot: false },
    { title: "California recall election draws 135 candidates", time: "6h ago", hot: false },
    { title: "Record heat wave sweeps across Europe", time: "9h ago", hot: false },
  ],
  tech: [
    { title: "Blaster worm spreads through unpatched Windows machines", time: "1h ago", hot: true },
    { title: "Apple opens iTunes Music Store to Windows users this fall", time: "3h ago", hot: false },
    { title: "Nokia unveils N-Gage, a phone you can play games on", time: "5h ago", hot: false },
    { title: "Friendster passes one million members", time: "8h ago", hot: false },
  ],
  sports: [
    { title: "Lance Armstrong wins fifth straight Tour de France", time: "2h ago", hot: true },
    { title: "Marlins stun Yankees, lead the World Series 3-2", time: "5h ago", hot: false },
    { title: "Serena Williams takes Wimbledon crown again", time: "7h ago", hot: false },
    { title: "LeBron James signs record shoe deal before first NBA game", time: "11h ago", hot: false },
  ],
}

const MORE = [
  { title: "Entertainment", items: ["Finding Nemo becomes top-grossing animated film", "The Matrix Reloaded sets midnight record"] },
  { title: "Business", items: ["Dow closes above 9,000 for the first time this year", "Google rumored to be eyeing an IPO"] },
  { title: "Local", items: ["City council approves new wireless hotspot downtown", "Library extends weekend hours"] },
]

function HeadlineList({
  items,
}: {
  items: { title: string; time: string; hot: boolean }[]
}) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.title} className="flex items-start gap-2 text-sm">
          <NewspaperIcon className="text-primary mt-0.5 size-4 shrink-0" />
          <a href="#" className="text-primary font-bold hover:underline">
            {item.title}
          </a>
          {item.hot ? <Badge variant="destructive">Hot</Badge> : null}
          <span className="text-muted-foreground ml-auto shrink-0 text-xs">
            {item.time}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function NewsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today&apos;s News</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Tabs defaultValue="top">
          <TabsList>
            <TabsTrigger value="top">Top</TabsTrigger>
            <TabsTrigger value="tech">Tech</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
          </TabsList>
          <TabsContent value="top">
            <HeadlineList items={HEADLINES.top} />
          </TabsContent>
          <TabsContent value="tech">
            <HeadlineList items={HEADLINES.tech} />
          </TabsContent>
          <TabsContent value="sports">
            <HeadlineList items={HEADLINES.sports} />
          </TabsContent>
        </Tabs>
        <Accordion defaultValue={["more-0"]}>
          {MORE.map((section, index) => (
            <AccordionItem key={section.title} value={`more-${index}`}>
              <AccordionTrigger>More stories: {section.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-1.5">
                  {section.items.map((story) => (
                    <li key={story}>
                      <a href="#" className="text-primary hover:underline">
                        {story}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
      <CardFooter className="justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  )
}
