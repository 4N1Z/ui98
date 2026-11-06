import { Skeleton } from "ui98"

export default function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <span className="text-xs">Downloading image (14.4 kbps)...</span>
      <div className="flex items-center gap-4">
        <Skeleton className="size-12" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-32 w-full" />
    </div>
  )
}
