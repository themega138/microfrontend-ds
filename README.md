# ds-angular

An Nx monorepo that hosts the DS Angular design system and a showroom app.

## Getting Started

```bash
npm install
```

### Run the showroom app

```bash
nx serve showroom
```

### Storybook

```bash
nx storybook ui
```

### Tests and lint

```bash
nx test ui
nx lint ui
```

## Design Tokens + Theming

Tokens are defined as CSS custom properties in `libs/design-tokens/src/lib/tokens.scss`. Base scales live on `:root`, and theme-specific overrides live under `[data-theme="light"]` and `[data-theme="dark"]`. The showroom toggles themes by setting `data-theme` on the `html` element.

## Adding a new component

1. Create a new standalone component in `libs/ui/src/lib`.
2. Style it using the design token CSS variables (no hardcoded colors).
3. Export it from `libs/ui/src/index.ts`.
4. Add a Storybook story next to the component.
5. Demonstrate it in the showroom app.
