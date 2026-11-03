import * as React from "react"
import { cn } from "cn"
import { MinusIcon, SquareIcon, XIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"

function TitleBarButton({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <Button
      variant="secondary"
      size="icon-xs"
      aria-label={label}
      className="size-4 min-w-0 [&_svg]:size-2.5 [&_svg]:stroke-[3]"
    >
      {children}
    </Button>
  )
}

export function Window({
  title,
  icon,
  className,
  children,
  footer,
  contentClassName,
  closeOnly = false,
}: {
  title: string
  icon?: React.ReactNode
  className?: string
  children: React.ReactNode
  footer?: React.ReactNode
  contentClassName?: string
  closeOnly?: boolean
}) {
  return (
    <Card className={cn("w-full gap-3", className)}>
      <CardHeader className="flex items-center">
        {icon ? <span className="mr-1 [&_svg]:size-4">{icon}</span> : null}
        <CardTitle className="truncate">{title}</CardTitle>
        <CardAction className="ml-auto flex gap-0.5">
          {closeOnly ? null : (
            <>
              <TitleBarButton label="Minimize">
                <MinusIcon />
              </TitleBarButton>
              <TitleBarButton label="Maximize">
                <SquareIcon />
              </TitleBarButton>
            </>
          )}
          <TitleBarButton label="Close">
            <XIcon />
          </TitleBarButton>
        </CardAction>
      </CardHeader>
      <CardContent className={cn("flex flex-col gap-3", contentClassName)}>
        {children}
      </CardContent>
      {footer ? (
        <CardFooter className="flex justify-end gap-2">{footer}</CardFooter>
      ) : null}
    </Card>
  )
}
