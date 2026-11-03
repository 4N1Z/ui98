import { KeyRoundIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export function SignInPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-1.5">
          <KeyRoundIcon className="size-4" />
          .NET Passport Sign In
        </CardTitle>
        <CardDescription>One name. One password. Everywhere.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-3">
          <Field>
            <FieldLabel htmlFor="passport-email">E-mail address</FieldLabel>
            <Input
              id="passport-email"
              type="email"
              autoComplete="off"
              placeholder="someone@hotmail.com"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="passport-password">Password</FieldLabel>
            <Input
              id="passport-password"
              type="password"
              autoComplete="off"
              placeholder="••••••••"
            />
            <FieldDescription>
              Passwords are case sensitive.
            </FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="passport-remember" />
            <FieldLabel htmlFor="passport-remember">
              Sign me in automatically
            </FieldLabel>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button variant="link" size="sm" className="px-0">
          Get a Passport
        </Button>
        <Button>Sign In</Button>
      </CardFooter>
    </Card>
  )
}
