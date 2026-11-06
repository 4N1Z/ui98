import { WebButton, WebButtonTag } from "ui98"

export default function WebButtonDemo() {
  return (
    <div className="flex max-w-[400px] flex-wrap justify-center gap-1.5">
      <WebButton href="#" background="#000080" color="#ffffff" border="outset">
        Netscape NOW!
      </WebButton>
      <WebButton background="#c0c0c0" color="#000000" font="verdana">
        Best viewed 800x600
      </WebButton>
      <WebButton background="#000000" color="#00ff00" font="dos">
        <WebButtonTag background="#00ff00" color="#000000">
          ui
        </WebButtonTag>
        ui98 powered
      </WebButton>
      <WebButton
        background="linear-gradient(90deg,#0000ee,#00aaff)"
        color="#ffff00"
        font="times"
        className="italic"
      >
        GeoCities
      </WebButton>
      <WebButton background="#ff0000" color="#ffff00" border="double">
        Y2K READY
      </WebButton>
      <WebButton background="#ffffff" color="#000000" border="dashed">
        Made with Notepad
      </WebButton>
      <WebButton
        background="#ff00ff"
        color="#ffffff"
        border="dotted"
        font="arial"
      >
        No Frames!
      </WebButton>
      <WebButton
        background="#ffff00"
        color="#0000ee"
        border="inset"
        font="verdana"
      >
        Sign my guestbook
      </WebButton>
    </div>
  )
}
