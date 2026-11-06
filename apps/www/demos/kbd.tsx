import { Kbd, KbdGroup } from "ui98"

export default function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-sm">
      <p className="flex items-center gap-2">
        Press
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>Alt</Kbd>
          <span>+</span>
          <Kbd>Del</Kbd>
        </KbdGroup>
        to close a program that is not responding.
      </p>
      <p className="flex items-center gap-2">
        Switch windows with
        <KbdGroup>
          <Kbd>Alt</Kbd>
          <span>+</span>
          <Kbd>Tab</Kbd>
        </KbdGroup>
      </p>
    </div>
  )
}
