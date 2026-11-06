import {
  Button,
  Checkbox,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "ui98"

export default function FieldDemo() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Dial-Up Networking</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="dun-user">User name</FieldLabel>
          <Input id="dun-user" defaultValue="webmaster@geocities.com" />
        </Field>
        <Field>
          <FieldLabel htmlFor="dun-phone">Phone number</FieldLabel>
          <Input id="dun-phone" placeholder="555-0199" />
          <FieldDescription>
            Dial 9 first to reach an outside line.
          </FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="dun-save" defaultChecked />
          <FieldLabel htmlFor="dun-save">Save password</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Button>Connect</Button>
          <Button variant="outline">Cancel</Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
