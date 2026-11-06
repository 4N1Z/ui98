# ui98

React components for the web as it was: Windows 95, GeoCities and Y2K.

```bash
pnpm i ui98
```

```tsx
import "ui98/win95.css"
import { Button } from "ui98"
```

See [`packages/ui98/README.md`](packages/ui98/README.md) for usage.

## Repo layout

| Path            | What                                                                         |
| --------------- | ---------------------------------------------------------------------------- |
| `packages/ui98` | The `ui98` npm package: components (`src/components`), themes (`src/themes`) |
| `apps/www`      | The website: landing page, docs, and the three era showcases                 |

## Develop

```bash
pnpm install
pnpm dev     # builds ui98, then runs the site on http://localhost:3000
pnpm build   # builds the package and the site
```

Change a component in `packages/ui98/src/components`, or a theme's look in `packages/ui98/src/themes/<theme>.css`. Each component carries `cn-*` class names (for example `cn-button-variant-default`); the theme files define what those look like.

## Publish

```bash
cd packages/ui98
npm publish
```

## License

MIT. Component structure derived from [shadcn/ui](https://github.com/shadcn-ui/ui).
