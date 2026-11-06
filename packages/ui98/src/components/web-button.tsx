import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils.js"

// 88x31 buttons and 468x60 banners: the badges and ads of the 1990s web.
// The sizes are fixed on purpose; they look the same in every theme.

const webArtVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden text-center leading-[1.05] break-words [text-wrap:balance] select-none [image-rendering:pixelated] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      border: {
        solid: "border border-black",
        outset: "border-2 border-[#dfdfdf] [border-style:outset]",
        inset: "border-2 border-[#dfdfdf] [border-style:inset]",
        dashed: "border border-dashed border-black",
        dotted: "border border-dotted border-black",
        double: "border-[3px] border-double border-black",
        none: "border-0",
        // The bevelled silver plate most of the 1990s wall was cut from:
        // a black keyline around a raised edge.
        plate:
          "border-0 shadow-[0_0_0_1px_#000,inset_-1px_-1px_#404040,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e8e8]",
      },
      font: {
        pixel:
          "font-[family-name:'Silkscreen','Press_Start_2P',monospace] [--web-art-size:8px] text-(length:--web-art-size)",
        dos: "font-[family-name:'VT323','Perfect_DOS_VGA_437','Courier_New',monospace] [--web-art-size:13px] text-(length:--web-art-size)",
        verdana:
          "font-[family-name:Verdana,Geneva,sans-serif] [--web-art-size:9px] text-(length:--web-art-size) font-bold",
        times:
          "font-[family-name:'Times_New_Roman',Tinos,Times,serif] [--web-art-size:11px] text-(length:--web-art-size) font-bold",
        arial:
          "font-[family-name:Arial,Arimo,Helvetica,sans-serif] [--web-art-size:9px] text-(length:--web-art-size) font-bold",
      },
    },
    defaultVariants: {
      border: "solid",
      font: "pixel",
    },
  }
)

type WebArtProps = useRender.ComponentProps<"a"> &
  VariantProps<typeof webArtVariants> & {
    /** Background, any CSS background value (color, gradient, url()). */
    background?: string
    /** Text color. */
    color?: string
  }

function useWebArt(
  slot: string,
  size: string,
  {
    className,
    border,
    font,
    background,
    color,
    style,
    render,
    ...props
  }: WebArtProps
) {
  return useRender({
    // A link when it has an href, as most 88x31s were; a plain image otherwise.
    defaultTagName: props.href ? "a" : "span",
    props: mergeProps<"a">(
      {
        className: cn(webArtVariants({ border, font }), size, className),
        style: { background, color, ...style },
      },
      props
    ),
    render,
    state: { slot },
  })
}

/** An 88x31 web button ("Netscape NOW!", "Best viewed with…"). */
function WebButton(props: WebArtProps) {
  return useWebArt("web-button", "h-[31px] w-[88px] gap-0.5 px-1", props)
}

/** A 468x60 full-banner ad. */
function WebBanner(props: WebArtProps) {
  return useWebArt(
    "web-banner",
    "h-[60px] w-[468px] max-w-full gap-2 px-3 text-[length:calc(var(--web-art-size)*2)]",
    props
  )
}

/**
 * The classic split 88x31: a colored block on the left holding a short tag,
 * the name on the right. Put it inside a WebButton.
 */
function WebButtonTag({
  className,
  background,
  color,
  style,
  ...props
}: React.ComponentProps<"span"> & { background?: string; color?: string }) {
  return (
    <span
      data-slot="web-button-tag"
      className={cn(
        "-my-px -ml-1 flex h-[calc(100%+2px)] shrink-0 items-center px-1",
        className
      )}
      style={{ background, color, ...style }}
      {...props}
    />
  )
}

/**
 * The narrow colored strip down the left edge with sideways text
 * ("FREE", "GET", "NEW"). Put it first inside a WebButton.
 */
function WebButtonStrip({
  className,
  background = "#e00000",
  color = "#ffffff",
  style,
  ...props
}: React.ComponentProps<"span"> & { background?: string; color?: string }) {
  return (
    <span
      data-slot="web-button-strip"
      className={cn(
        "-my-px -ml-1 flex h-[calc(100%+2px)] w-[11px] shrink-0 items-center justify-center font-[family-name:Verdana,Geneva,sans-serif] text-[6px] leading-none font-bold tracking-wide uppercase [writing-mode:vertical-rl] rotate-180",
        className
      )}
      style={{ background, color, ...style }}
      {...props}
    />
  )
}

/**
 * Two stacked lines: a small lead-in over a big word
 * ("Best viewed with" / "ANY BROWSER").
 */
function WebButtonLabel({
  className,
  top,
  children,
  ...props
}: React.ComponentProps<"span"> & { top?: React.ReactNode }) {
  return (
    <span
      data-slot="web-button-label"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center leading-[1.05]",
        className
      )}
      {...props}
    >
      {top && <span className="text-[0.8em] font-normal">{top}</span>}
      <span className="text-[1.3em] whitespace-nowrap">{children}</span>
    </span>
  )
}

/** The red italic "Now!" flourish, bottom-right. */
function WebButtonNow({
  className,
  children = "Now!",
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="web-button-now"
      className={cn(
        "absolute right-1 bottom-0 font-[family-name:'Times_New_Roman',Tinos,serif] text-[12px] leading-none font-bold text-[#e00000] italic [text-shadow:1px_1px_0_#000]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export {
  WebButton,
  WebBanner,
  WebButtonTag,
  WebButtonStrip,
  WebButtonLabel,
  WebButtonNow,
  webArtVariants,
}
