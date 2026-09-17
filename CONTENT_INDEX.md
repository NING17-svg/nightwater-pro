# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Template Game guide | Find the best entry point | Open Wiki / Browse Guides | Hub | Replace with the configured game's main hub intent. |
| `/wiki` | `src/data/pages/wiki-pages.ts` | Guide | Template Game wiki | Understand confirmed facts | Guides / FAQ | Hub | Keep official fact base and source context here. |
| `/guides` | `src/data/pages/guide-pages.ts` | Guide | Template Game guides | Find guide topics before launch | Wiki / Release Info | Hub | Do not invent walkthroughs before reliable details exist. |
| `/release-date` | `src/data/pages/fixed-pages.ts` | Guide | Nightwater release date, launch time, PDT/EDT/BST/CEST/JST | Check exact unlock time in your timezone | Steam page / Price & editions | Supporting hub | Regional unlock table sourced from the Steam Community announcement for AppID 3983860; price and preorder still unannounced. |
| `/system-requirements` | `src/data/pages/fixed-pages.ts` | Guide | Nightwater system requirements, Windows minimum / recommended | Decide if your PC can run Nightwater | Platforms / Overview | Supporting hub | Steam minimum / recommended rows reproduced; 64-bit OS requirement called out; macOS, Linux, Steam Deck still not announced. |
| `/platforms` | `src/data/pages/fixed-pages.ts` | Guide | Nightwater platforms, Steam Features | Confirm Windows / Steam scope and which Steam Features are enabled | System requirements / Steam page | Supporting hub | Single-player, Steam Achievements, Steam Cloud, Family Sharing confirmed on the Steam page. |
| `/price-and-editions` | `src/data/pages/fixed-pages.ts` | Guide | Nightwater demo, price, editions, preorder | Find the demo depot and preorder / price status | Release date / Steam page | Supporting hub | Steam demo depot confirmed (AppID 4576520); price, editions, preorder still not announced. |
| `/faq` | `src/data/pages/fixed-pages.ts` | Guide | Nightwater FAQ, supported languages, Steam Features | Get short answers for launch-window questions | Release date / Gameplay | Answer hub | 13 supported languages, Steam Features, and demo depot surfaced; FAQ schema enabled. |
| `/technology-eras` | `src/data/pages/fixed-pages.ts` | Guide | Nightwater technology eras | Learn the canonical era order and role of each era | Gameplay / Steam | Supporting hub | Launch-day framework reference; per-era unlocks flagged as pending post-launch evidence. |
| `/gameplay` | `src/data/pages/fixed-pages.ts` | Guide | Nightwater gameplay, factory loop, Manifestor | Understand the four-era loop, Manifestor, lighthouse endings | Overview / FAQ | Supporting hub | Gameplay framing tied to the Steam store description. |
| `/overview` | `src/data/pages/fixed-pages.ts` | Guide | Nightwater game overview | Identity, developer, publisher, genre, setting | Release date / Gameplay | Supporting hub | Anchor for developer / publisher / setting facts. |
| `/steam-page` | `src/data/pages/fixed-pages.ts` | Guide | Nightwater Steam page | Reach the canonical store and Community Hub links | Release date / Platforms | Supporting hub | Anchor for every confirmed current-game fact. |
| `/news` | `src/data/pages/fixed-pages.ts` | Guide | Nightwater news | Find Steam-published patch notes and announcements | Steam page / Release date | Supporting hub | Steam news feed is the only first-party channel. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Template Game Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Template Game Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/faq`, `/system-requirements`, `/platforms`, `/price-and-editions`, `/steam-page`, `/news`
- Official facts and safe guide structure: `/wiki`, `/guides`, `/overview`
- Gameplay & reference: `/gameplay`, `/technology-eras`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ, Steam Community announcement, Price & editions, and the Steam page.
- FAQ should include all current high-demand answer pages.
- System Requirements should link to the Steam page and Platforms.
- Platforms should link to System Requirements and the Steam page.
- Price & Editions should link to Release Date and the Steam demo depot.
- Gameplay should cross-link to `/technology-eras` for the launch-day era framework.
- Technology Eras should cross-link back to `/gameplay` and the Steam page for per-era detail.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
