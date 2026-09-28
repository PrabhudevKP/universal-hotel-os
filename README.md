# Universal Hotel OS

A tenant-aware hotel guest experience and hotel operations platform built as one reusable codebase for many hotels.

## Surfaces
- Guest: mobile-first web app/PWA. No native app installation required.
- Admin: hotel operations and configuration dashboard.
- Platform: tenant resolution, modules, sessions, data isolation, realtime workflows and integrations.

## Architecture rule
Hotel-specific identity, branding, facilities, rooms, services and content are data/configuration. Source code is not forked per hotel.

## Run
npm install
npm run dev
npm run build

Routes: /, /guest, /admin, /g/:token, /api/health
