# Documentation Plan

The plan for turning this repository into complete, easy-to-follow documentation for the
Jose Madrid Salsa platform. It records what the platform is made of today, what the docs
already cover, what is stale or missing, and the outline every new page will fit into.

Surveyed against `jordolang/josemadridsalsa` at commit `12ec8fa` (6 October 2026).

---

## 1. Goals

1. **Anyone can find their way in.** An owner, a staff member, a new developer and an
   on-call engineer each have an obvious first page and a short path to what they need.
2. **One page per question.** "How do I add a fundraising group?", "How does a BigCommerce
   order reach QuickBooks?", "How do I ship a new Windows build?" each have exactly one
   answer, linked from everywhere else.
3. **True to the code.** Every page names the files, routes, env vars and Vercel projects
   it describes, so it can be checked and kept current.
4. **One home, one mirror.** Pages are written in the monorepo's `apps/docs`, next to the
   code they describe, and a sync job mirrors them into this repo (decided 6 October 2026).

## 2. Audiences

| Audience | What they need first | Entry page |
|---|---|---|
| Owners and managers | What the platform does, what each site is for, what runs where | Platform overview |
| Staff (office, events, fundraising) | Step-by-step how-tos in the admin panel, desktop apps, kiosks and mobile app | Staff handbook |
| Developers | Set up, architecture, where code lives, how to add a feature, how to ship | Developer quick start |
| Operators | Deploys, crons, webhooks, secrets, rollbacks, incident checklists | Operations runbook index |

## 3. Platform inventory

What exists in the monorepo today, and how each piece is built, run and deployed.

### 3.1 Apps

| App | Path | Stack | Run locally | Build and deploy |
|---|---|---|---|---|
| Storefront (+ admin, POS, kiosk screens, desktop shell, all webhooks and crons) | `apps/storefront` | Next.js 16, React 19, Prisma 6, NextAuth 4 | `npm run dev` → :3000 | Vercel project `josemadridsalsa`, root `apps/storefront`, `main` only; `vercel-build` runs migrate, generate, permission seed, `next build` |
| Fundraising site + fundraiser pages, portal, arena | `apps/fundraising` | Next.js 16, shares core + storefront Prisma schema | `npm run dev:fundraising` → :3001 | Own Vercel project, `main` only, `turbo-ignore`; `vercel-build` generates Prisma from `../storefront/prisma/schema.prisma` |
| Fundraiser mobile app | `apps/fundraiser-app` | Expo SDK 57, React Native 0.86, Expo Router, Square Mobile Payments SDK via config plugin | `npx expo start`; dev build needed for Square | EAS Build / Submit (`build:ios`, `build:android`, `submit:*`); not an npm workspace |
| Windows admin | `apps/windows-admin` | Electron 44, TypeScript, electron-updater | `npm run start --workspace=@jose-madrid/windows-admin` | **Desktop Apps** workflow → NSIS installer, optional code signing, update feed on Vercel Blob via `/api/desktop/updates` |
| macOS admin | `apps/macos-admin` | Swift package, SwiftUI + WKWebView | `./build-app.sh` | Same workflow → `.dmg`, optional Developer ID signing and notarisation |
| Android kiosk | `apps/android-kiosk` | Kotlin, Gradle | Android Studio | Sideloaded APK (to document) |
| iPad kiosk | `apps/ios-kiosk` | Swift, XcodeGen | `xcodegen generate`, Xcode | To document |
| Docs site | `apps/docs` | Fumadocs on Next.js 16 | `npm run dev:docs` → :3002 | Own Vercel project, `main` only, `turbo-ignore` |
| Admin (placeholder) | `apps/admin` | Next.js | `npm run dev:admin` → :3003 | Not deployed; redirects to storefront `/admin` |
| Operations agent | `apps/agent` | eve framework, AI SDK | `eve dev` | Local only; excluded from `npm run build` |
| Shared code | `packages/core` | TypeScript | n/a | Compiled into each app that imports it |

### 3.2 How they share data

- **Database.** One PostgreSQL database on Supabase (moved from Neon), about 145 Prisma
  models. `DATABASE_URL` (transaction pooler) at runtime, `DATABASE_URL_UNPOOLED` for
  migrations. Only the storefront build runs migrations.
- **Shared code.** `packages/core` mirrors the storefront layout; `@/` resolves to the app
  first, then core. Core never imports from an app.
- **Cross-app links.** The storefront 308-redirects fundraiser paths to
  `NEXT_PUBLIC_FUNDRAISING_SITE_URL` (`apps/storefront/proxy.ts`); the fundraising app
  sends main-site paths back to `NEXT_PUBLIC_SITE_URL` (`apps/fundraising/next.config.mjs`).
- **BigCommerce.** Main store `dsk4gx4` (retail checkout, customers, gift certificates)
  and fundraising store `c034x363rd`. Carts are rebuilt in BigCommerce and paid on its
  hosted checkout when `NEXT_PUBLIC_COMMERCE_BACKEND=bigcommerce`. Orders flow back by
  webhook (`/api/webhooks/bigcommerce`) and the hourly `/api/cron/bigcommerce-orders` job.
  Client code is in `packages/core/lib/bigcommerce` and `apps/storefront/lib/bigcommerce`.
- **Mobile app.** Talks only to `/api/fundraiser-app/*` on the storefront
  (`EXPO_PUBLIC_API_URL`, default `https://www.josemadrid.net`). Gets a Square OAuth token
  from the storefront; payments land at `SQUARE_LOCATION_ID`.
- **Desktop and kiosk apps.** Load storefront pages (`/admin-desktop`, `/kiosk`) and so
  share its sessions, data and deploys.
- **QuickBooks.** Hourly `/api/cron/quickbooks-sync`; BigCommerce orders only sync when
  `BIGCOMMERCE_ORDERS_TO_QUICKBOOKS=true`.
- **Email, social, analytics.** Resend + Nodemailer, scheduled publishing crons, Sentry,
  Amplitude, Vercel Analytics, all from the storefront.

### 3.3 Domains

| Host | Serves |
|---|---|
| www.josemadrid.net | Storefront, admin, APIs |
| fundraising.josemadrid.net | Fundraising app |
| josemadridsalsa.com | Legacy BigCommerce storefront; moving in front of this platform per the cutover runbook |
| josemadridsalsafundraising.com | Legacy BigCommerce fundraising store and its checkout |

## 4. Current state of the docs

| | This repo | Monorepo `apps/docs` |
|---|---|---|
| MDX pages | 115 | 169 |
| Pages only here | 2 (`integrations/shopify*.mdx`, Shopify is no longer used) | 56 |
| Shared pages whose text differs | 42 | |
| Last change | June 2026 | Ongoing, ships with code |

**Missing here entirely** include the BigCommerce cutover runbook, the fundraising site,
the fundraiser mobile app, kiosks, desktop apps, macOS admin, shared code strategy,
monorepo deployment, Supabase migration, QuickBooks, EasyPost, POS, wholesale, staff and
permissions, and the testing and versioning guides.

**Known inaccuracies to fix wherever they live:**

- `deployment/vercel.mdx` says no `vercel.json` is used; the storefront has one with a
  custom build command and 13 crons.
- The monorepo `README.md` and `CLAUDE.md` describe four apps; there are eleven
  directories under `apps/`, and `CLAUDE.md` refers to `apps/ios/**`, which does not exist
  (the iPad app is `apps/ios-kiosk`).
- `deployment/monorepo.mdx` lists fundraising as "once its project is created", but
  `fundraising.josemadrid.net` is live.
- Node versions disagree (`.nvmrc` 20, CI 22, Vercel storefront 22, Vercel docs 20).
- The monorepo README links to screenshot placeholders that are not in the repo.

## 5. Proposed outline

The sidebar groups below replace the current folder-per-type layout. Each line is one page;
**new** marks pages that do not exist in either copy yet, and everything else is moved or
merged from existing pages.

### Start here
- Platform overview: the four sales channels, the app map, the data-flow diagram (**new**, adapted from this README)
- Glossary: group ID, organizer seat, arena, Heat Index, store hash, channel (**new**)
- Who to call: BigCommerce, Square, Vercel, Supabase, QuickBooks support paths (**new**)

### Apps
One page per app, each with the same sections: *What it is · Who uses it · Where it runs ·
How it talks to the rest · Run it locally · Build and ship · Configuration · Troubleshooting*.

- Storefront
- Admin panel and desktop shell
- Fundraising site
- Fundraiser mobile app (merge `fundraiser-mobile-app.mdx`, add an EAS release section) (**new** release section)
- Windows admin app (**new**, split from `desktop-apps.mdx`)
- macOS admin app
- Self-order kiosks (Android and iPad) (add build and install steps) (**new** build section)
- Operations agent (**new**)

### Architecture
- Monorepo layout and Turborepo task graph
- Shared code (`packages/core`) and the `@/` alias
- Data model map: the ~145 Prisma models grouped by domain, with an ER diagram per domain (**new**)
- Commerce backends: BigCommerce headless vs. native checkout, and which sales use which (**new**)
- Order lifecycle across all channels: web, BigCommerce, fundraiser app, kiosk, POS (merge `order-lifecycle.mdx` and `payment-architecture.mdx`)
- Auth, roles and permissions; credential vault

### Features (staff-facing how-tos)
Keep the existing feature pages, regrouped under *Selling*, *Fundraising*, *Events*,
*Marketing*, *Money*, *Content* and *Admin*, each opening with a "How do I…" task list.

### Integrations
BigCommerce, Square, Stripe, PayPal, QuickBooks, EasyPost, Resend and email DNS, Google,
social platforms, UploadThing, Sentry and Amplitude. Remove the Shopify pages.

### Operations
- Deploying: Vercel projects, domains, `main`-only deploys, `turbo-ignore`, rollback
- Releasing the desktop apps (Desktop Apps workflow, signing secrets, update feed) (**new**)
- Releasing the mobile app (EAS, store review, OTA updates) (**new**)
- Scheduled jobs: all 13 crons, what each does and what to do when one fails
- Webhooks: every inbound webhook, its secret and how to replay it (**new**)
- Database: migrations, backups, Supabase, the green-build-failed-migration trap
- Environment variables, per Vercel project (**new** per-project split)
- BigCommerce cutover runbook
- CI: what gates a merge and what only reports

### Developer guides
Quick start, adding a feature, testing, code quality, debugging, versioning, API reference
(REST and OpenAPI), contributing.

## 6. Delivery phases

1. **Build the sync.** Writing happens in `apps/docs`; this repo is a mirror. A GitHub
   Actions workflow in the monorepo runs on every push to `main` that touches
   `apps/docs/content/**`, copies `content/docs` into this repo with a token scoped to
   it, and commits only when something changed. The first run closes the current gap
   (56 missing pages, 42 stale ones) and removes the Shopify pages. The admin panel's
   existing per-page publisher (`/admin/developer/salsadocs`, which writes straight to this
   repo through `SALSADOCS_GITHUB_TOKEN`) would be overwritten by the next sync, so it
   should write to `apps/docs` instead, or be retired.
2. **Start here + Apps.** Platform overview, glossary, and the per-app pages with the
   shared template. These are the pages most readers will land on.
3. **Architecture + Operations.** Data model map, commerce backends, release pages for
   desktop and mobile, webhooks, per-project env vars.
4. **Regroup features and integrations.** Move pages, add task lists, remove Shopify, fix
   the inaccuracies in section 4.
5. **Keep it true.** A CI check in the monorepo that fails when a new env var, cron,
   webhook or app directory appears without a docs page.

## 7. Open questions

- Should the sync mirror only page content, or also the site code (`app/`, `components/`),
  so this site looks identical to `apps/docs`?
- Is `fundraising.josemadridsalsa.com` still the planned long-term host?
- How are the kiosk apps installed on the tablets today (sideload, MDM, TestFlight)?
- Is the fundraiser app already live in both stores, or still in internal testing?
