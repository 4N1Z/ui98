import { KeyRoundIcon } from "lucide-react"

import { Button } from "ui98"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "ui98"
import { Checkbox } from "ui98"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "ui98"
import { Input } from "ui98"

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
            <FieldDescription>Passwords are case sensitive.</FieldDescription>
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
