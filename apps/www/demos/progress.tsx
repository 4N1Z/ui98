"use client"

import * as React from "react"

import { Progress, ProgressLabel, ProgressValue } from "ui98"

export default function ProgressDemo() {
  const [value, setValue] = React.useState(13)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : Math.min(100, v + 7)))
    }, 600)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Progress value={value}>
        <ProgressLabel>Copying files...</ProgressLabel>
        <ProgressValue />
      </Progress>
      <span className="text-xs">
        From &apos;WIN95_02.CAB&apos; to &apos;C:\WINDOWS&apos;
      </span>
    </div>
  )
}
