# ui98

React components for the web as it was: **Windows 95**, **GeoCities**, **Y2K** and the **88x31 button wall**.

Accessible primitives from [Base UI](https://base-ui.com), styled with Tailwind CSS, in the shape of [shadcn/ui](https://ui.shadcn.com), but shipped as a normal npm package.

## Install

```bash
pnpm i ui98
```

## Use

Import one theme stylesheet once, at the root of your app:

```tsx
import "ui98/win95.css" // or "ui98/geocities.css", "ui98/y2k.css", "ui98/88x31.css"
```

Then use the components:

```tsx
import { Button } from "ui98"

export default function App() {
  return <Button>Start</Button>
}
```

The stylesheet is self-contained: colors, fonts, reset, and the styles for every component. You don't need Tailwind.

### Already using Tailwind CSS v4?

Import the Tailwind build of the theme instead, so you get the theme tokens as utilities (`bg-primary`, `text-muted-foreground`, …) without a second CSS reset:

```css
@import "tailwindcss";
@import "ui98/tailwind/win95.css";
```

## Components

Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Button Group, Card, Checkbox, Collapsible, Combobox, Context Menu, Dialog, Dropdown Menu, Empty, Field, Hover Card, Input, Input Group, Item, Kbd, Label, Menubar, Native Select, Navigation Menu, Pagination, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Spinner, Switch, Table, Tabs, Textarea, Toast, Toggle, Toggle Group, Tooltip, Web Banner (468×60), Web Button (88×31).

Docs and live previews: https://github.com/4N1Z/ui98

## Credits

Component structure derived from [shadcn/ui](https://github.com/shadcn-ui/ui) (MIT).
