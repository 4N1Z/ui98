"use client"

import * as React from "react"

// Ordered (Bayer 8x8) dither of a photo into two inks: the "dot matrix" look of
// a 1-bit scan. The source is downscaled first so every dot is a chunky
// 3x3 screen pixel, then blown back up with smoothing off.
const BAYER_8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
]

const DOT = 3 // screen pixels per dither cell

type Ink = [number, number, number]

function hexToInk(hex: string): Ink {
  const n = parseInt(hex.replace("#", ""), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

// A sea-ish field used when the photo cannot be fetched: layered sines plus
// hash noise, lighter towards the top left like a sky.
function proceduralLuma(x: number, y: number, w: number, h: number) {
  const u = x / w
  const v = y / h
  const swell =
    Math.sin(u * 14 + v * 9) * 0.18 +
    Math.sin(u * 31 - v * 17 + 1.3) * 0.12 +
    Math.sin((u + v) * 53) * 0.06
  const grain = (Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1
  const sky = Math.max(0, 1 - (u * 0.9 + v * 1.4))
  return Math.min(1, Math.max(0, 0.35 + swell + grain * 0.08 + sky * 0.9 - v * 0.15))
}

function renderDither(
  canvas: HTMLCanvasElement,
  source: HTMLImageElement | null,
  light: Ink,
  dark: Ink
) {
  const width = Math.ceil(canvas.clientWidth / DOT)
  const height = Math.ceil(canvas.clientHeight / DOT)
  if (width === 0 || height === 0) return

  const small = document.createElement("canvas")
  small.width = width
  small.height = height
  const sctx = small.getContext("2d", { willReadFrequently: true })
  if (!sctx) return

  let luma: Float32Array
  if (source) {
    // cover-fit the photo
    const scale = Math.max(width / source.width, height / source.height)
    const dw = source.width * scale
    const dh = source.height * scale
    sctx.drawImage(source, (width - dw) / 2, (height - dh) / 2, dw, dh)
    const { data } = sctx.getImageData(0, 0, width, height)
    luma = new Float32Array(width * height)
    for (let i = 0; i < width * height; i++) {
      const r = data[i * 4]
      const g = data[i * 4 + 1]
      const b = data[i * 4 + 2]
      luma[i] = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
    }
  } else {
    luma = new Float32Array(width * height)
    for (let y = 0; y < height; y++)
      for (let x = 0; x < width; x++)
        luma[y * width + x] = proceduralLuma(x, y, width, height)
  }

  const out = sctx.createImageData(width, height)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x
      // push contrast and lift the top-left so the cards sit on a bright sky
      const lift = Math.max(0, 1 - (x / width) * 1.1 - (y / height) * 1.3) * 0.55
      let v = (luma[i] - 0.5) * 1.6 + 0.5 + lift
      v = Math.min(1, Math.max(0, v))
      const threshold = (BAYER_8[y & 7][x & 7] + 0.5) / 64
      const ink = v > threshold ? light : dark
      out.data[i * 4] = ink[0]
      out.data[i * 4 + 1] = ink[1]
      out.data[i * 4 + 2] = ink[2]
      out.data[i * 4 + 3] = 255
    }
  }
  sctx.putImageData(out, 0, 0)

  canvas.width = width * DOT
  canvas.height = height * DOT
  const ctx = canvas.getContext("2d")
  if (!ctx) return
  ctx.imageSmoothingEnabled = false
  ctx.drawImage(small, 0, 0, canvas.width, canvas.height)
}

export function DitherBackdrop({
  src,
  light = "#f1f3ec",
  dark = "#1fa35a",
  className,
}: {
  src: string
  light?: string
  dark?: string
  className?: string
}) {
  const ref = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const lightInk = hexToInk(light)
    const darkInk = hexToInk(dark)
    let image: HTMLImageElement | null = null
    let cancelled = false

    const draw = () => {
      if (!cancelled) renderDither(canvas, image, lightInk, darkInk)
    }

    // Paint the procedural field at once so there is never a blank frame,
    // then swap in the photo when (if) it arrives.
    draw()
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      image = img
      draw()
    }
    img.src = src

    const observer = new ResizeObserver(draw)
    observer.observe(canvas)
    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [src, light, dark])

  return <canvas ref={ref} aria-hidden className={className} />
}
