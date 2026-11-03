import { Button } from "@/registry/bases/base/ui/button"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"

export function Webring() {
  return (
    <section className="mx-auto w-full max-w-[460px] border-[3px] [border-style:ridge] border-[#c0c0c0] bg-background p-3 text-center text-[13px]">
      <div className="mb-2 flex items-center justify-center gap-2">
        <span
          aria-hidden
          className="inline-block size-6 rounded-full border-[3px] border-[#ff00ff] [border-style:double]"
        />
        <span className="font-bold">
          This{" "}
          <a href="#" className="text-primary underline">
            98ui Webring
          </a>{" "}
          site is owned by{" "}
          <a href="#" className="text-primary underline">
            aniz
          </a>
          .
        </span>
      </div>
      <ButtonGroup className="justify-center">
        <Button size="sm">Prev</Button>
        <Button size="sm">Random</Button>
        <Button size="sm">Next</Button>
        <Button size="sm">List Sites</Button>
      </ButtonGroup>
      <p className="mt-2 text-xs italic">
        Want to join the ring? Click{" "}
        <a href="#" className="text-primary underline">
          here
        </a>{" "}
        for info.
      </p>
    </section>
  )
}
