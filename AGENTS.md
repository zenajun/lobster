# AGENTS.md — PantryPal

## Stack
- React 19 + Vite
- Redux Toolkit for state
- MUI for UI components
- AG-Grid for data display
- SharedWorker for cross-tab local persistence (no backend)

## Commands
- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run lint` — run linter (add if not yet configured)

## Project structure
- `/src/components` — presentational UI (MUI-based)
- `/src/features` — Redux slices, one folder per domain (e.g. `pantry/`)
- `/src/worker` — SharedWorker script + data provider abstraction
- `/src/store.js` — Redux store setup

## Conventions
- Redux slices live next to the feature they belong to
- Never call `postMessage` directly from a component — always go through the data provider in `/src/worker`
- Keep components under ~150 lines; extract subcomponents past that

## Current status
- [x] Vite + React scaffolded
- [x] Redux Toolkit installed
- [ ] MUI installed
- [ ] SharedWorker not yet implemented