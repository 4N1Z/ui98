import { About } from "@/registry/bases/radix/blocks/homepage-01/sections/about"
import { ButtonsWall } from "@/registry/bases/radix/blocks/homepage-01/sections/buttons-wall"
import { Footer } from "@/registry/bases/radix/blocks/homepage-01/sections/footer"
import { Guestbook } from "@/registry/bases/radix/blocks/homepage-01/sections/guestbook"
import { Header } from "@/registry/bases/radix/blocks/homepage-01/sections/header"
import { Nav } from "@/registry/bases/radix/blocks/homepage-01/sections/nav"
import { Webring } from "@/registry/bases/radix/blocks/homepage-01/sections/webring"

// A GeoCities personal homepage built from shadcn components. The page is a
// centered 800px "table" on a tiled starfield, split into a 170px sidebar
// and a main column, the way FrontPage laid things out in 1999.
export default function Homepage01() {
  return (
    <div className="overflow-auto bg-[#000033] bg-[radial-gradient(#ffffff_1px,transparent_1.6px),radial-gradient(#ffffff_0.8px,transparent_1.3px),radial-gradient(#ffff99_1.2px,transparent_1.8px)] bg-[length:97px_97px,53px_53px,181px_181px] bg-[position:0_0,27px_41px,70px_120px] py-6 contain-[paint]">
      <div className="flex w-full justify-center px-4">
        <div
          className="w-[800px] max-w-full border-2 border-black bg-background text-foreground"
          data-slot="capture-target"
        >
          <div className="border-b-2 border-black bg-[#ffffcc] p-4 dark:bg-[#1a1a00]">
            <Header />
          </div>
          <div className="grid grid-cols-[170px_1fr]">
            <aside className="border-r-2 border-black bg-sidebar text-sidebar-foreground">
              <Nav />
            </aside>
            <main className="flex min-w-0 flex-col gap-6 p-4">
              <About />
              <Guestbook />
              <Webring />
              <ButtonsWall />
            </main>
          </div>
          <div className="border-t-2 border-black bg-[#ffffcc] p-4 dark:bg-[#1a1a00]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
