# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-17 - Launch-day technology-era framework reference page added

- Task: Add a launch-day framework reference page that names the four Nightwater technology eras in canonical order, states each era's general role (production-chain capability expansion), flags the Future era as the lighthouse culmination, and lists the Sticks & Stones starting toolkit. Cite the Steam store description and the 2UpSkill preview as primary sources, cross-link from /home and /gameplay, and explicitly mark Lighthouse endings / Manifestor biome / minigame content as watch-class pending post-launch evidence.
- Files changed: `src/data/pages/fixed-pages.ts` (new `fixed-technology-eras-en-US` page), `src/data/pages/home.ts` (gameplay-reference module now lists the new page), `src/data/navigation.ts` (new nav entry under the gameplay cluster), `CONTENT_INDEX.md` (new row + cluster/linking updates).
- URLs affected: New page at `/technology-eras/`. Existing `/` and `/gameplay/` URLs now link to it.
- SEO/GEO changed: New canonical four-era framework page cross-linked from the home gameplay-reference module and the gameplay page; sitemap/IndexNow will pick it up automatically.
- Verification: `npm run verify` and the existing local validators must pass before publishing.

### 2026-09-16 - Adsterra integration populated fixed six-unit ads config

- Task: Replace empty Adsterra placeholder values in `src/data/ads.ts` with the fixed six real Adsterra unit codes (Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, Smartlink) for the launch Adsterra integration.
- Files changed: `src/data/ads.ts`.
- URLs affected: No URL changes.
- Ads changed: All six `units` values now contain the real Adsterra code captured from the publisher dashboard; no other ad units added or repositioned.
- Verification: `npm run verify` and the local registry validator must pass before publishing the registry enabled status.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
