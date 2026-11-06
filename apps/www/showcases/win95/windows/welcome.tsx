import { LightbulbIcon, SparklesIcon } from "lucide-react"

import { Window } from "@/showcases/win95/window"
import { Button } from "ui98"
import { Checkbox } from "ui98"
import { Field, FieldLabel } from "ui98"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "ui98"

export function WelcomeWindow() {
  return (
    <Window
      title="Welcome to ui98"
      icon={<SparklesIcon />}
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
                Every window on this desktop is built from ui98 components. The
                behaviour, keyboard handling and accessibility come from Base
                UI. Only the skin is from 1995.
              </p>
              <p>
                Install them all with{" "}
                <code className="font-mono">pnpm i ui98</code>.
              </p>
            </div>
          </div>
          <Field orientation="horizontal">
            <Checkbox id="welcome-show" defaultChecked />
            <FieldLabel htmlFor="welcome-show" className="font-normal">
              Show this Welcome Screen next time you start ui98
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
