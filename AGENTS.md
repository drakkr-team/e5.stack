# PROJECT KNOWLEDGE BASE

**Generated:** 2026-05-22
**Commit:** 63ae49d
**Branch:** main

## OVERVIEW

pnpm/Turbo TypeScript monorepo with an AdonisJS API, TanStack Start web app, and split UI packages for React components plus generated Tailwind theme tokens.

## STRUCTURE

```text
e5.stack/
├── apps/api/              # AdonisJS API; feature-first user management; generated Tuyau/Adonis artifacts
├── apps/web/              # TanStack Start app; file routes, Tuyau client, compiled i18n bundle
├── packages/ui/react/     # Storybook-backed component library; Base UI wrappers
├── packages/ui/theme/     # token source + generated Tailwind CSS
├── package.json           # root Turbo scripts; pnpm@10.33.2; Node 24
├── pnpm-workspace.yaml    # workspace globs: apps/*, packages/**
├── turbo.json             # task graph
└── biome.json             # tabs, line width 100, organize imports
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Root commands / package manager | `package.json`, `turbo.json`, `pnpm-workspace.yaml` | Use pnpm, not npm/yarn. |
| API runtime / CLI | `apps/api/bin/server.ts`, `apps/api/bin/console.ts`, `apps/api/adonisrc.ts` | `ace.js` is generated. |
| API routes | `apps/api/start/routes.ts`, `apps/api/src/features/**/routes.ts` | Feature routes import `#generated/controllers`. |
| API auth/session/mail | `apps/api/config/*.ts`, `apps/api/start/kernel.ts`, `apps/api/src/exceptions/handler.ts` | JSON-only API behavior is middleware-enforced. |
| Web routes | `apps/web/src/routes/**/{layout,page}.tsx`, `apps/web/src/router.tsx` | `routeTree.gen.ts` is generated. |
| Web API client | `apps/web/src/libs/tuyau.ts`, `@workspace/api/registry` | Registry comes from the API build hooks. |
| Web forms | `apps/web/src/libs/form.ts`, `apps/web/src/components/form/*` | TanStack Form components registered centrally. |
| Web translations | `apps/web/scripts/compile-locales.js`, `apps/web/src/**/locales/fr.json` | Build output is generated under `src/libs/i18n/build`. |
| React UI components | `packages/ui/react/src/components/*` | Folder-per-component with story + barrel. |
| Theme tokens | `packages/ui/theme/src/tokens.ts` | Source of truth for `tailwind.css`. |
| Docker / CI | `.github/workflows/ci.yml`, `apps/*/Dockerfile` | CI runs code-quality, typecheck, build; test job is commented out. |

## CODE MAP

| Symbol / module | Type | Location | Role |
|-----------------|------|----------|------|
| `getRouter` | function | `apps/web/src/router.tsx` | Creates QueryClient-backed TanStack router. |
| `Providers` | component | `apps/web/src/providers/index.tsx` | Theme + TanStack devtools shell. |
| `api` | client | `apps/web/src/libs/tuyau.ts` | Typed API query/mutation surface. |
| `useAppForm` | hook factory | `apps/web/src/libs/form.ts` | App-standard form wrapper. |
| `User` | model | `apps/api/src/models/user.ts` | Auth model; `toJSON()` hides password. |
| `UserTokenService` | service | `apps/api/src/services/user_token.service.ts` | Token generate/verify/revoke workflow. |
| `middleware` | registry | `apps/api/start/kernel.ts` | Named auth/guest middleware. |
| `Button`, `Menu`, etc. | components | `packages/ui/react/src/components/*/index.ts` | Public UI exports. |
| `colors`, `fonts` | tokens | `packages/ui/theme/src/tokens.ts` | Theme generation input. |

## CONVENTIONS

- Format with Biome: tabs, line width 100, recommended lint rules, organize imports.
- Package manager is `pnpm@10.33.2`; Node engine is `24`; `.npmrc` enforces engine strictness.
- Workspace package imports use `@workspace/*`.
- API imports use package `imports` aliases: `#start/*`, `#features/*`, `#models/*`, `#generated/*`, etc.
- Web imports use `#/*` for `apps/web/src/*`.
- Web route files are `layout.tsx` and `page.tsx`; route groups use parentheses.
- UI component folders use `component.tsx`, `index.ts`, `component.stories.tsx`.
- No `.editorconfig`, `.eslintrc`, or `tailwind.config` files exist; Biome is the single lint/format source.
- API `tsconfig.json` inherits strictness from `@adonisjs/tsconfig` preset; web/ui packages set `strict: true` locally.
- API-specific Biome allows non-null assertions and value imports used as types.
- Web Biome enables `useSortedClasses` for `cn`/`cva`; UI React Biome enables it for `tv`.

## ANTI-PATTERNS (THIS PROJECT)

- Do not edit generated files: `apps/api/.adonisjs/**`, `apps/api/database/schema.ts`, `apps/api/ace.js`, `apps/web/src/routeTree.gen.ts`, `apps/web/src/libs/i18n/build/**`, `packages/ui/theme/src/tailwind.css`.
- Do not send responses from `apps/api/src/exceptions/handler.ts` `report()`.
- Preserve `apps/api/src/middlewares/force_json_response.middleware.ts`; it forces `Accept: application/json`.
- Do not normalize existing typoed API mail filename casually: `password_changed_notifiction.mail.ts` is referenced by current code.
- Do not bypass `apps/api/src/middlewares/force_json_response.middleware.ts`; clients expect JSON errors/responses.

## UNIQUE STYLES

- API feature modules are colocated by domain under `src/features/user_management` instead of a flat controller/service tree.
- Web mirrors backend domain names in feature paths and i18n namespaces.
- Theme package checks in generated CSS; edit tokens, then regenerate.
- Storybook is dev-only for UI React; there is no package build script there.
- API dev is "composed": Turbo runs `dev` with `docker-compose` and `worker` alongside the server.
- Web dev uses `concurrently` for Vite port 3000 plus locale watcher.
- CI uses `--affected` for typecheck and build; `TURBO_SCM_BASE` is explicitly set in CI for PR diffs.
- API Docker image runs DB migrations in `ENTRYPOINT` before server start.
- Web Docker image is static-only nginx; `VITE_API_BASE_URL` baked at build time.

## COMMANDS

```bash
pnpm dev
pnpm build
pnpm typecheck
pnpm test
pnpm code-quality
pnpm code-quality:fix
pnpm adonis
pnpm --filter @workspace/api dev
pnpm --filter @workspace/web dev
pnpm --filter @workspace/ui-react dev
pnpm --filter @workspace/ui-theme generate:tailwind
```

## NOTES

- Root `turbo dev` is persistent and uncached.
- API `dev` depends on the `docker-compose` sidecar task.
- `@workspace/api/registry` is generated by Adonis/Tuyau during API build; web type-safety depends on it.
- `@workspace/ui-theme/tailwind.css` is generated from `src/tokens.ts`; run `generate:tailwind` after token edits.
- `@workspace/ui-react` has no build script; apps consume its source exports directly.
- Build order: Turbo `^build` ensures API registry and theme CSS are generated before web build.
- Current tests are scaffolded for API/Japa; no `*.spec.ts` files were found.
- LSP TypeScript server was not installed during generation; codemap came from direct reads, rg, and ast-grep.
- CI test job is present but commented out.
- No `Makefile` exists in the repo.
