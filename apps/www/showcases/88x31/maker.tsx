"use client"

import * as React from "react"
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  NativeSelect,
  NativeSelectOption,
  Switch,
  WebButton,
  WebButtonLabel,
  WebButtonNow,
  WebButtonStrip,
} from "ui98"

type Border =
  | "plate"
  | "solid"
  | "outset"
  | "inset"
  | "dashed"
  | "dotted"
  | "double"
  | "none"
type Font = "verdana" | "arial" | "times" | "pixel" | "dos"

const BORDERS: Border[] = [
  "plate",
  "solid",
  "outset",
  "inset",
  "dashed",
  "dotted",
  "double",
  "none",
]
const FONTS: Font[] = ["verdana", "arial", "times", "pixel", "dos"]

export function ButtonMaker() {
  const [top, setTop] = React.useState("Best viewed with")
  const [text, setText] = React.useState("ui98")
  const [font, setFont] = React.useState<Font>("verdana")
  const [border, setBorder] = React.useState<Border>("plate")
  const [from, setFrom] = React.useState("#2a5bd7")
  const [to, setTo] = React.useState("#000080")
  const [gradient, setGradient] = React.useState(true)
  const [color, setColor] = React.useState("#ffffff")
  const [strip, setStrip] = React.useState(true)
  const [stripText, setStripText] = React.useState("get")
  const [now, setNow] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const background = gradient ? `linear-gradient(180deg,${from},${to})` : from

  const preview = (
    <WebButton
      border={border}
      font={font}
      background={background}
      color={color}
    >
      {strip && <WebButtonStrip>{stripText}</WebButtonStrip>}
      <WebButtonLabel top={top || undefined}>{text}</WebButtonLabel>
      {now && <WebButtonNow />}
    </WebButton>
  )

  const code = [
    `<WebButton border="${border}" font="${font}" background="${background}" color="${color}">`,
    strip ? `  <WebButtonStrip>${stripText}</WebButtonStrip>` : null,
    top
      ? `  <WebButtonLabel top="${top}">${text}</WebButtonLabel>`
      : `  <WebButtonLabel>${text}</WebButtonLabel>`,
    now ? `  <WebButtonNow />` : null,
    `</WebButton>`,
  ]
    .filter(Boolean)
    .join("\n")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Button Maker 2.0</CardTitle>
        <CardDescription>Make your own 88x31. Free!!</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col-reverse gap-5">
        <div className="grid grid-cols-2 gap-3">
          <Row label="Small line" htmlFor="bm-top">
            <Input
              id="bm-top"
              value={top}
              maxLength={20}
              onChange={(e) => setTop(e.target.value)}
            />
          </Row>
          <Row label="Big line" htmlFor="bm-text">
            <Input
              id="bm-text"
              value={text}
              maxLength={10}
              onChange={(e) => setText(e.target.value)}
            />
          </Row>
          <Row label="Font" htmlFor="bm-font">
            <NativeSelect
              id="bm-font"
              value={font}
              onChange={(e) => setFont(e.target.value as Font)}
            >
              {FONTS.map((f) => (
                <NativeSelectOption key={f} value={f}>
                  {f}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </Row>
          <Row label="Border" htmlFor="bm-border">
            <NativeSelect
              id="bm-border"
              value={border}
              onChange={(e) => setBorder(e.target.value as Border)}
            >
              {BORDERS.map((b) => (
                <NativeSelectOption key={b} value={b}>
                  {b}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </Row>
          <Row
            label={gradient ? "Background (top / bottom)" : "Background"}
            htmlFor="bm-from"
          >
            <div className="flex gap-2">
              <ColorInput id="bm-from" value={from} onChange={setFrom} />
              {gradient && (
                <ColorInput id="bm-to" value={to} onChange={setTo} />
              )}
            </div>
          </Row>
          <Row label="Text color" htmlFor="bm-color">
            <ColorInput id="bm-color" value={color} onChange={setColor} />
          </Row>
          <Toggle
            id="bm-gradient"
            label="Gradient"
            checked={gradient}
            onChange={setGradient}
          />
          <Toggle
            id="bm-now"
            label='Red "Now!"'
            checked={now}
            onChange={setNow}
          />
          <Toggle
            id="bm-strip"
            label="Side strip"
            checked={strip}
            onChange={setStrip}
          />
          {strip && (
            <Row label="Strip text" htmlFor="bm-strip-text">
              <Input
                id="bm-strip-text"
                value={stripText}
                maxLength={5}
                onChange={(e) => setStripText(e.target.value)}
              />
            </Row>
          )}
        </div>

        <div className="flex flex-col items-center gap-3">
          <Badge>New!</Badge>
          <div className="grid place-items-center bg-white p-3 shadow-[inset_1px_1px_#808080,inset_-1px_-1px_#fff]">
            {preview}
          </div>
          <div
            aria-hidden
            className="grid h-[124px] w-[352px] max-w-full place-items-center overflow-hidden bg-white shadow-[inset_1px_1px_#808080,inset_-1px_-1px_#fff]"
          >
            <div className="origin-center scale-[3] [image-rendering:pixelated]">
              {preview}
            </div>
          </div>
          <span className="text-xs text-muted-foreground">
            actual size · 300%
          </span>
        </div>
      </CardContent>
      <CardContent className="flex flex-col gap-2">
        <pre className="overflow-x-auto bg-black p-3 font-mono text-xs leading-relaxed text-[#00ff40]">
          <code>{code}</code>
        </pre>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              navigator.clipboard?.writeText(code).then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
              })
            }}
          >
            {copied ? "Copied!" : "Copy code"}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setTop("Best viewed with")
              setText("ui98")
              setFont("verdana")
              setBorder("plate")
              setFrom("#2a5bd7")
              setTo("#000080")
              setGradient(true)
              setColor("#ffffff")
              setStrip(true)
              setStripText("get")
              setNow(false)
            }}
          >
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function Row({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  )
}

function Toggle({
  id,
  label,
  checked,
  onChange,
}: {
  id: string
  label: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <div className="flex items-center gap-2">
      <Switch id={id} checked={checked} onCheckedChange={onChange} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}

function ColorInput({
  id,
  value,
  onChange,
}: {
  id: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <span className="flex items-center gap-1">
      <input
        id={id}
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 w-10 cursor-pointer bg-white p-0.5 shadow-[inset_1px_1px_#808080,inset_-1px_-1px_#fff]"
      />
      <code className="text-xs">{value}</code>
    </span>
  )
}
