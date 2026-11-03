import { LightbulbIcon, SparklesIcon } from "lucide-react"

import { Window } from "@/registry/bases/base/blocks/desktop-01/window"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Field, FieldLabel } from "@/registry/bases/base/ui/field"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export function WelcomeWindow() {
  return (
    <Window
      title="Welcome to 98ui"
      icon={<SparklesIcon />}
      className="w-[460px]"
      footer={
        <>
          <Button variant="outline">What&apos;s New</Button>
          <Button variant="outline">Next Tip</Button>
          <Button>Close</Button>
        </>
      }
    >
      <Tabs defaultValue="welcome">
        <TabsList>
          <TabsTrigger value="welcome">Welcome</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
          <TabsTrigger value="new">What&apos;s New</TabsTrigger>
        </TabsList>
        <TabsContent value="welcome" className="flex flex-col gap-3">
          <div className="flex gap-3">
            <LightbulbIcon className="size-8 shrink-0 text-chart-4" />
            <div className="flex flex-col gap-2">
              <p className="font-bold">Did you know...</p>
              <p>
                Every component on this desktop is a shadcn component. The
                behaviour, keyboard handling and accessibility are untouched.
                Only the skin is from 1995.
              </p>
              <p>
                Install any of them with{" "}
                <code className="font-mono">npx shadcn add @98ui/button</code>.
              </p>
            </div>
          </div>
          <Field orientation="horizontal">
            <Checkbox id="welcome-show" defaultChecked />
            <FieldLabel htmlFor="welcome-show" className="font-normal">
              Show this Welcome Screen next time you start 98ui
            </FieldLabel>
          </Field>
        </TabsContent>
        <TabsContent value="tips" className="flex flex-col gap-2">
          <p>Press Tab to move the dotted focus rectangle between controls.</p>
          <p>Hold a button down to see it sink in.</p>
          <p>Right-click anywhere on the desktop for a context menu.</p>
        </TabsContent>
        <TabsContent value="new" className="flex flex-col gap-2">
          <p>
            New in this release: a GeoCities homepage and a Y2K portal, each
            with its own style file.
          </p>
        </TabsContent>
      </Tabs>
    </Window>
  )
}
