# iCanchero Landing

Public marketing pages for iCanchero, built with React, TanStack Start, and
Tailwind CSS. `/terms` and `/privacy` load published legal documents from the
Players API in the browser, including an optional immutable `?version=<UUID>`.

## Local development

Use Bun to match the GitHub Pages workflow and the tracked `bun.lock`:

```bash
bun install --frozen-lockfile
bun run dev
```

The development server runs on port 3000. Vite selects the Players API at build
time using the checked-in mode files:

| Command                                        | Env file           | Players API                                                  |
| ---------------------------------------------- | ------------------ | ------------------------------------------------------------ |
| `bun run dev`                                  | `.env.development` | `https://paulenovo-wsl-ubuntu.tail4c02d6.ts.net/api/players` |
| `bun run build` / `bun run build:github-pages` | `.env.production`  | `https://api.icanchero.com/api/players`                      |

`bunfig.toml` disables Bun's automatic env loading so Vite controls mode
precedence. Mode files override the generic `.env`; to use your Mac API locally,
put `VITE_PLAYERS_API_URL=http://paulmac:7070/api/players` in
`.env.development.local` (ignored by Git). Restart the dev server after changes.
An explicitly exported shell/CI variable still takes precedence over Vite's env
files. The GitHub Pages workflow uses `.env.production` without a repository
variable override. `VITE_*` values are public and bundled into the browser code.

## Verification

```bash
bun run typecheck
bun run test
bun run lint
bun run build
bun run build:github-pages
```

Tests mock legal-document requests; they do not validate the live API. Devtools
are available during development and stripped from production builds.

## Production output

The Start configuration keeps prerendering for `/`, `/terms`, and `/privacy`,
plus a static SPA fallback. The shell uses `/?__spa_shell=1` as its mask URL so
its prerender task does not replace the homepage task. The checked-in GitHub Actions workflow installs with
`bun install --frozen-lockfile`, runs `bun run build:github-pages`, and uploads
`.output/public` to GitHub Pages. The Pages script preserves the prerendered
homepage in `index.html`, copies the SPA shell to `404.html` for client navigation,
and creates `.nojekyll`. Deployments run on pushes to `main` or manual workflow
dispatch.

The Pages build verifies the rendered homepage, legal page files, SPA fallback,
and referenced assets before upload. It rejects development-server HTML. The
preview server binds to `127.0.0.1` so prerendering does not reach a running
development server through a different `localhost` address.

GitHub Pages publishes only `.output/public`; it does not run `bun run start`
or any files in `.output/server`. The env values are compiled into the client
JavaScript, and legal documents are fetched by the browser from the external
Players API.

For a local Bun server instead:

```bash
bun run build
bun run start
```

Nitro selects its Bun preset when built with this project's Bun scripts.
This starts `.output/server/index.mjs`; deploy the complete `.output/` directory
when using a Bun host. For a Node server, build with
`NITRO_PRESET=node-server bun run build` and run
`node .output/server/index.mjs` instead. Node-based tooling and Node deployments
require Node.js 22.12 or newer.

## TanStack Start stable baseline

Start 1.169 is the first stable release; this project uses 1.169.2 or newer,
Vite 8, and the published Nitro package through `nitro/vite`, replacing the old
Nitro nightly alias. Nitro itself still ships as a beta. TanStack dependencies
use explicit version ranges rather than `latest`; update `bun.lock` whenever
dependencies change.

The app uses Start's built-in client/server entries, a `getRouter()` factory,
and per-router Query clients. It does not use the removed `useSession` or
`.inputValidator()` APIs, request middleware, or server functions, so those RC
migration changes require no application rewrite.

Reference: [TanStack RC migration guide](https://tanstack.com/start/latest/docs/framework/react/migrate-from-release-candidate).

## UI components and formatting

Compose the existing components under `src/components/ui`. To add a shadcn
component, use the project package runner:

```bash
bunx --bun shadcn@latest add button
```

`bun run check` checks repository formatting; `bun run format` rewrites it and
runs ESLint fixes.
