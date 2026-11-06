import { Tabs, TabsContent, TabsList, TabsTrigger } from "ui98"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="background" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="background">Background</TabsTrigger>
        <TabsTrigger value="screensaver">Screen Saver</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="background" className="p-3 text-sm">
        Wallpaper: Clouds (Tile). Pattern: (None).
      </TabsContent>
      <TabsContent value="screensaver" className="p-3 text-sm">
        Screen Saver: Flying Windows. Wait 10 minutes.
      </TabsContent>
      <TabsContent value="appearance" className="p-3 text-sm">
        Scheme: Windows Standard. Item: Desktop. Color: Teal.
      </TabsContent>
      <TabsContent value="settings" className="p-3 text-sm">
        Color palette: High Color (16 bit). Desktop area: 800 by 600 pixels.
      </TabsContent>
    </Tabs>
  )
}
