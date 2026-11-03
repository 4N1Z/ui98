import { MonitorIcon } from "lucide-react"

import { Window } from "@/registry/bases/base/blocks/desktop-01/window"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/bases/base/ui/native-select"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Slider } from "@/registry/bases/base/ui/slider"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

const SCHEMES = [
  "Windows Standard",
  "Brick",
  "Desert",
  "Eggplant",
  "High Contrast Black",
  "Lilac",
  "Maple",
  "Marine",
  "Plum",
  "Pumpkin",
  "Rainy Day",
  "Rose",
  "Slate",
  "Spruce",
  "Storm",
  "Teal",
  "Wheat",
]

export function DisplayPropertiesWindow() {
  return (
    <Window
      title="Display Properties"
      icon={<MonitorIcon />}
      className="w-[420px]"
      closeOnly
      footer={
        <>
          <Button>OK</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="outline" disabled>
            Apply
          </Button>
        </>
      }
    >
      <Tabs defaultValue="appearance">
        <TabsList>
          <TabsTrigger value="background">Background</TabsTrigger>
          <TabsTrigger value="screensaver">Screen Saver</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="appearance">
          <FieldGroup className="gap-4">
            <Field>
              <FieldLabel htmlFor="scheme">Scheme</FieldLabel>
              <Select defaultValue="Windows Standard">
                <SelectTrigger id="scheme" className="w-full">
                  <SelectValue placeholder="Select a scheme" />
                </SelectTrigger>
                <SelectContent>
                  {SCHEMES.map((scheme) => (
                    <SelectItem key={scheme} value={scheme}>
                      {scheme}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="item">Item</FieldLabel>
              <NativeSelect id="item" defaultValue="Active Title Bar">
                <NativeSelectOption>Active Title Bar</NativeSelectOption>
                <NativeSelectOption>Desktop</NativeSelectOption>
                <NativeSelectOption>Menu</NativeSelectOption>
                <NativeSelectOption>Message Box</NativeSelectOption>
                <NativeSelectOption>Scrollbar</NativeSelectOption>
                <NativeSelectOption>ToolTip</NativeSelectOption>
              </NativeSelect>
            </Field>
          </FieldGroup>
        </TabsContent>
        <TabsContent value="settings">
          <FieldGroup className="gap-4">
            <FieldSet>
              <FieldLegend>Colors</FieldLegend>
              <RadioGroup defaultValue="256">
                <Field orientation="horizontal">
                  <RadioGroupItem value="16" id="colors-16" />
                  <FieldLabel htmlFor="colors-16" className="font-normal">
                    16 Color
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <RadioGroupItem value="256" id="colors-256" />
                  <FieldLabel htmlFor="colors-256" className="font-normal">
                    256 Color
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <RadioGroupItem value="16bit" id="colors-16bit" />
                  <FieldLabel htmlFor="colors-16bit" className="font-normal">
                    High Color (16 bit)
                  </FieldLabel>
                </Field>
              </RadioGroup>
            </FieldSet>
            <Field>
              <FieldLabel>Desktop area</FieldLabel>
              <Slider defaultValue={[2]} max={4} step={1} />
              <div className="flex justify-between text-xs">
                <span>Less</span>
                <span>800 by 600 pixels</span>
                <span>More</span>
              </div>
            </Field>
          </FieldGroup>
        </TabsContent>
        <TabsContent value="background">
          <p>Select a wallpaper or pattern for your desktop.</p>
        </TabsContent>
        <TabsContent value="screensaver">
          <p>Flying through space. Wait 14 minutes.</p>
        </TabsContent>
      </Tabs>
    </Window>
  )
}
