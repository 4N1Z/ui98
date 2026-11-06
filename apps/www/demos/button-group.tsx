import { ChevronLeftIcon, ChevronRightIcon, RefreshCwIcon } from "lucide-react"

import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "ui98"

export default function ButtonGroupDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ButtonGroup>
        <Button variant="outline">
          <ChevronLeftIcon /> Back
        </Button>
        <Button variant="outline">
          Forward <ChevronRightIcon />
        </Button>
        <ButtonGroupSeparator />
        <Button variant="outline">
          <RefreshCwIcon /> Refresh
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>Zoom</ButtonGroupText>
        <Button variant="outline">50%</Button>
        <Button variant="outline">100%</Button>
        <Button variant="outline">200%</Button>
      </ButtonGroup>
    </div>
  )
}
