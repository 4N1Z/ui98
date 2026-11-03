import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/radix/ui/accordion"
import { Avatar, AvatarFallback } from "@/registry/bases/radix/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/radix/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/radix/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/radix/ui/tabs"

const FAVORITES = [
  { thing: "Band", answer: "Smash Mouth" },
  { thing: "Movie", answer: "The Matrix (1999)" },
  { thing: "Browser", answer: "Netscape Navigator 4.08" },
  { thing: "Font", answer: "Comic Sans MS" },
  { thing: "Cat", answer: "Mittens (she is 3)" },
  { thing: "Search engine", answer: "AltaVista" },
]

const FAQ = [
  {
    q: "Why does this page take so long to load?",
    a: "Because of all the animated GIFs. Please be patient, it is worth it. If you are on a 28.8k modem go make a sandwich.",
  },
  {
    q: "Can I use your graphics?",
    a: "Yes!! Just link back to me and sign my guestbook. Do NOT hotlink, my bandwidth is only 25 MB a month.",
  },
  {
    q: "Is this page Y2K compliant?",
    a: "I checked with the Y2K checker and it said yes. I also have the button on the bottom of the page.",
  },
]

export function About() {
  return (
    <section className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          <CardDescription>a.k.a. aniz, Webmaster</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Avatar size="lg" className="size-16 shrink-0">
              <AvatarFallback className="text-xl">AZ</AvatarFallback>
            </Avatar>
            <p className="text-[15px] leading-normal">
              Hi!! My name is aniz and this is my homepage. I made it myself
              in Notepad over spring break. Here you will find pictures of my
              cats, my favorite links, some poems I wrote, and my guestbook
              (please sign it!!). I am currently learning JavaScript so check
              back soon for a cool mouse trail effect.
            </p>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>My Favorite Things</TableHead>
                <TableHead>Answer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {FAVORITES.map((row) => (
                <TableRow key={row.thing}>
                  <TableCell className="font-bold">{row.thing}</TableCell>
                  <TableCell>{row.answer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Tabs defaultValue="photos">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="links">Links</TabsTrigger>
          <TabsTrigger value="poems">Poems</TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <div className="grid grid-cols-3 gap-3">
            {["Mittens", "Me at Six Flags", "My new PC"].map((caption) => (
              <figure key={caption} className="flex flex-col gap-1 text-center">
                <div className="flex h-20 items-center justify-center border-2 border-border bg-muted text-xs italic">
                  [image loading...]
                </div>
                <figcaption className="text-xs font-bold">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="links">
          <ul className="list-disc pl-5 text-[13px] leading-relaxed">
            <li>
              <a href="#" className="text-primary underline">
                Yahoo!
              </a>{" "}
              - the best directory on the web
            </li>
            <li>
              <a href="#" className="text-primary underline">
                HTML Goodies
              </a>{" "}
              - where I learned everything
            </li>
            <li>
              <a href="#" className="text-primary underline">
                Cool Site of the Day
              </a>
            </li>
            <li>
              <a href="#" className="text-primary underline">
                Jenny&apos;s Homepage
              </a>{" "}
              - my best friend&apos;s page!
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="poems">
          <pre className="font-serif text-[13px] leading-relaxed whitespace-pre-wrap italic">
            {`The modem sings its lonely song,
A screech, a hiss, it won't be long.
Three minutes more and I'll be free
To surf the web at 28.8 (point three).`}
          </pre>
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="mb-1 text-xl font-bold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible defaultValue="faq-0">
          {FAQ.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>Q: {item.q}</AccordionTrigger>
              <AccordionContent>A: {item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
