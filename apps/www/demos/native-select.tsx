import {
  Label,
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "ui98"

export default function NativeSelectDemo() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="modem">Connect using</Label>
      <NativeSelect id="modem" defaultValue="usr56k">
        <NativeSelectOptGroup label="Modems">
          <NativeSelectOption value="usr56k">
            U.S. Robotics 56K Voice
          </NativeSelectOption>
          <NativeSelectOption value="hayes">
            Hayes Accura 33.6
          </NativeSelectOption>
          <NativeSelectOption value="std">
            Standard 28800 bps Modem
          </NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Other">
          <NativeSelectOption value="isdn">ISDN Adapter</NativeSelectOption>
          <NativeSelectOption value="dcc">
            Direct Cable Connection
          </NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  )
}
