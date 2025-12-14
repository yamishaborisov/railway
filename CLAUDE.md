# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev              # Start Vite dev server
pnpm storybook        # Start Storybook on port 6006

# Build
pnpm build            # TypeScript check + Vite build
pnpm build-storybook  # Build Storybook static files

# Code Quality
pnpm lint             # Check with Biome
pnpm lint:fix         # Fix linting issues
pnpm format           # Check formatting
pnpm format:fix       # Fix formatting
pnpm typecheck        # TypeScript check only
```

## Architecture

This is a React 19 railway booking application using **Feature-Sliced Design (FSD)** architecture.

### Layer Structure (`src/`)

- **app/** - Application entry, providers, global styles. Router setup using TanStack Router
- **pages/** - Full page components (`StartPage`, `TrainsList`, `ReviewBooking`)
- **widgets/** - Composite UI blocks (`Header`, `Footer`, `BoardingDetails`, `PassengerProfile`, `TrainResult`, `TripBar`)
- **features/** - User interactions with business logic (`trip-search-form`)
- **entities/** - Business entities (`fare-option`, `cities-input`, `meal-card`)
- **shared/** - Reusable UI components and utilities
  - `ui/` - Base components (Button, Card, Input variants, DateInput, Icons, etc.)
  - `lib/` - Utilities and constants
  - `styles/` - Global SCSS variables

### Key Patterns

- **Import alias**: `@/*` maps to `src/*`
- **State management**: Jotai atoms (see `features/*/model/atoms.ts`)
- **Styling**: SCSS modules (`*.module.scss`) + PrimeReact components
- **Routing**: TanStack Router with route tree in `app/providers/router/config/routeTree.tsx`
- **Component stories**: Storybook files colocated as `*.stories.tsx`

### Code Style (Biome)

- 4-space indentation
- Single quotes, no semicolons
- Trailing commas
- No `console.log` (use `console.warn`, `console.error`, or `console.debug`)
