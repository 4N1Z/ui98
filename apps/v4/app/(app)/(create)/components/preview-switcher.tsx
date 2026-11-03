"use client"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  RETRO_SHOWCASE_ITEMS,
  useDesignSystemSearchParams,
} from "@/app/(app)/(create)/lib/search-params"

const PREVIEW_ITEMS = [
  { label: "01", value: "preview-02" },
  { label: "02", value: "preview" },
]

export function PreviewSwitcher() {
  const [params, setParams] = useDesignSystemSearchParams()

  // 98ui: retro styles get a third tab for their era showcase block.
  const showcase =
    params.base === "aria" ? undefined : RETRO_SHOWCASE_ITEMS[params.style]
  const items = showcase
    ? [{ label: "Era", value: showcase }, ...PREVIEW_ITEMS]
    : PREVIEW_ITEMS

  const isPreview =
    params.item === "preview" ||
    params.item.startsWith("preview-0") ||
    params.item === showcase

  if (!isPreview) {
    return null
  }

  return (
    <div className="dark absolute right-3 bottom-3 z-20 flex items-center gap-1 rounded-xl bg-card/90 p-1 shadow-xl backdrop-blur-xl">
      {items.map((item) => (
        <Button
          key={item.value}
          variant="ghost"
          size="sm"
          data-active={params.item === item.value}
          className="h-7 min-w-8 cursor-pointer rounded-lg px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
          onClick={() => setParams({ item: item.value })}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}
