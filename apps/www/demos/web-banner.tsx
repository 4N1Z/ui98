import { WebBanner } from "ui98"

export default function WebBannerDemo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <WebBanner
        href="#"
        background="linear-gradient(90deg,#000080,#1084d0)"
        color="#ffffff"
        border="outset"
        font="verdana"
      >
        FREE web hosting! 10 MB of space — click here!!
      </WebBanner>
      <WebBanner
        background="repeating-linear-gradient(45deg,#ffcc00 0 12px,#000 12px 24px)"
        color="#ffcc00"
        font="pixel"
      >
        <span className="bg-black px-2 py-1">Under construction</span>
      </WebBanner>
      <WebBanner
        background="#000000"
        color="#00ff00"
        font="dos"
        border="double"
      >
        You are visitor #004217!
      </WebBanner>
    </div>
  )
}
