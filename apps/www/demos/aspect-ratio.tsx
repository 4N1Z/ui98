import { AspectRatio } from "ui98"

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={4 / 3}>
        <div className="flex size-full flex-col items-center justify-center gap-1 bg-[#008080] text-white">
          <span className="text-lg font-bold">640 x 480</span>
          <span className="text-xs">CLOUDS.BMP (4:3)</span>
        </div>
      </AspectRatio>
    </div>
  )
}
