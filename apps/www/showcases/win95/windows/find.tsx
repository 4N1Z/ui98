import { SearchIcon } from "lucide-react"

import { Window } from "@/showcases/win95/window"
import { Button } from "ui98"
import { Checkbox } from "ui98"
import { Field, FieldGroup, FieldLabel } from "ui98"
import { Input } from "ui98"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "ui98"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "ui98"

export function FindWindow() {
  return (
    <Window title="Find: All Files" icon={<SearchIcon />} closeOnly>
      <div className="flex gap-3">
        <Tabs defaultValue="name" className="flex-1">
          <TabsList>
            <TabsTrigger value="name">Name &amp; Location</TabsTrigger>
            <TabsTrigger value="date">Date</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="name">
            <FieldGroup className="gap-3">
              <Field orientation="horizontal">
                <FieldLabel htmlFor="find-named" className="w-20">
                  Named:
                </FieldLabel>
                <Input id="find-named" defaultValue="*.tsx" />
              </Field>
              <Field orientation="horizontal">
                <FieldLabel htmlFor="find-text" className="w-20">
                  Containing:
                </FieldLabel>
                <Input id="find-text" placeholder="data-slot" />
              </Field>
              <Field orientation="horizontal">
                <FieldLabel htmlFor="find-in" className="w-20">
                  Look in:
                </FieldLabel>
                <Select defaultValue="c">
                  <SelectTrigger id="find-in" className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="c">Local Disk (C:)</SelectItem>
                    <SelectItem value="d">Playground (D:)</SelectItem>
                    <SelectItem value="net">Network Neighborhood</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="find-sub" defaultChecked />
                <FieldLabel htmlFor="find-sub" className="font-normal">
                  Include subfolders
                </FieldLabel>
              </Field>
            </FieldGroup>
          </TabsContent>
          <TabsContent value="date">
            <p>Find all files modified in the last 90 days.</p>
          </TabsContent>
          <TabsContent value="advanced">
            <p>Of type: TSX File. At least 1 KB.</p>
          </TabsContent>
        </Tabs>
        <div className="flex w-24 flex-col gap-1.5 pt-7">
          <Button className="min-w-0">Find Now</Button>
          <Button variant="outline" className="min-w-0" disabled>
            Stop
          </Button>
          <Button variant="outline" className="min-w-0">
            New Search
          </Button>
        </div>
      </div>
    </Window>
  )
}
