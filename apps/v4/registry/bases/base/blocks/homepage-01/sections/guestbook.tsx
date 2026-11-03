import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/bases/base/ui/native-select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/bases/base/ui/pagination"
import { RadioGroup, RadioGroupItem } from "@/registry/bases/base/ui/radio-group"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const ENTRIES = [
  {
    name: "Jenny",
    date: "10/29/99",
    message:
      "OMG your page is sooo cool!! I love the cat pics. Come visit my page too, it has a MIDI of my favorite song.",
  },
  {
    name: "WebmasterDave",
    date: "10/12/99",
    message:
      "Nice site. Consider adding frames, it makes navigation a lot easier. Also your counter is broken in IE4.",
  },
]

export function Guestbook() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Sign My Guestbook!</h2>
      <form className="border-2 border-black bg-[#ffffcc] p-4 text-black dark:bg-[#1a1a00] dark:text-white">
        <FieldGroup className="gap-4">
          <Field>
            <FieldLabel htmlFor="gb-name">Your name:</FieldLabel>
            <Input id="gb-name" placeholder="cool_dude_99" />
          </Field>
          <Field>
            <FieldLabel htmlFor="gb-email">Your email:</FieldLabel>
            <Input id="gb-email" type="email" placeholder="you@hotmail.com" />
            <FieldDescription>
              I will never give your email to anyone, I promise!!
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="gb-found">How did you find me?</FieldLabel>
            <NativeSelect id="gb-found" defaultValue="webring">
              <NativeSelectOption value="webring">A webring</NativeSelectOption>
              <NativeSelectOption value="yahoo">Yahoo!</NativeSelectOption>
              <NativeSelectOption value="altavista">
                AltaVista
              </NativeSelectOption>
              <NativeSelectOption value="friend">A friend</NativeSelectOption>
              <NativeSelectOption value="icq">ICQ</NativeSelectOption>
              <NativeSelectOption value="other">Other</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel htmlFor="gb-message">Your message:</FieldLabel>
            <Textarea
              id="gb-message"
              rows={4}
              placeholder="Say something nice..."
            />
          </Field>
          <FieldSet>
            <FieldLegend variant="label">Rate my page:</FieldLegend>
            <RadioGroup defaultValue="5" className="flex flex-wrap gap-4">
              {["1", "2", "3", "4", "5"].map((n) => (
                <Field key={n} orientation="horizontal" className="w-auto">
                  <RadioGroupItem value={n} id={`gb-rate-${n}`} />
                  <FieldLabel htmlFor={`gb-rate-${n}`} className="font-normal">
                    {n}
                    {n === "5" ? " (best!)" : ""}
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Checkbox id="gb-mailing" defaultChecked />
            <FieldLabel htmlFor="gb-mailing" className="font-normal">
              Add me to your mailing list
            </FieldLabel>
          </Field>
          <div className="flex gap-2">
            <Button type="button">Sign Guestbook</Button>
            <Button type="reset">Clear</Button>
          </div>
        </FieldGroup>
      </form>

      <h3 className="text-base font-bold">
        What people are saying ({ENTRIES.length + 35} entries):
      </h3>
      <ItemGroup>
        {ENTRIES.map((entry) => (
          <Item key={entry.name} variant="outline" size="sm">
            <ItemContent>
              <ItemTitle>
                {entry.name}{" "}
                <span className="font-normal italic">wrote on {entry.date}:</span>
              </ItemTitle>
              <ItemDescription>{entry.message}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
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
    </section>
  )
}
