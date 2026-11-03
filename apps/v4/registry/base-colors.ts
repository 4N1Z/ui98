import { THEMES } from "@/registry/themes"

export const BASE_COLORS = THEMES.filter((theme) =>
  [
    "neutral",
    "stone",
    "zinc",
    "mauve",
    "olive",
    "mist",
    "taupe",
    "win95",
    "geocities",
    "y2k",
  ].includes(theme.name)
)

export type BaseColor = (typeof BASE_COLORS)[number]
