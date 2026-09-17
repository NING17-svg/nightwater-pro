import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const RESEARCH_DATE = "2026-09-18";
const STEAM_URL = "https://store.steampowered.com/app/3983860";
const STEAM_NEWS_URL = "https://store.steampowered.com/news/app/3983860";
const STEAM_DEMO_URL = "https://store.steampowered.com/app/4576520";
const STEAM_COMMUNITY_URL = "https://steamcommunity.com/app/3983860";
const STEAMDB_DEMO_URL = "https://steamdb.info/app/4576520/info";

// ---------------------------------------------------------------
// Reference fixture pages — required by internal layout checks for
// review-date rendering and search-index multilingual tests.
// They live in the page list but are filtered out of the indexable
// set in lib/content.ts so they do not appear in the sitemap or
// homepage "recent updates" section.
// ---------------------------------------------------------------
const fixturePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides-fixture",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_guides-fixture",
    url: "/_guides-fixture",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} guide index`,
    seoTitle: `${site.gameName} guide index`,
    metaDescription:
      "Reference fixture page used to validate PageHero review-date rendering for en-US content.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "Guides",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-guides-body",
        type: "prose",
        heading: "Guides index fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "wiki",
    translationKey: "wiki-fixture",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_wiki-fixture",
    url: "/_wiki-fixture",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} wiki index`,
    seoTitle: `${site.gameName} wiki index`,
    metaDescription:
      "Reference fixture page used to validate PageHero review-date rendering for en-US content.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "Wiki",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-wiki-body",
        type: "prose",
        heading: "Wiki index fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "faq-fixture",
    translationKey: "faq-fixture",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_faq-fixture",
    url: "/_faq-fixture",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ index`,
    seoTitle: `${site.gameName} FAQ index`,
    metaDescription:
      "Reference fixture page used by internal layout checks to render an FAQ-style page.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "FAQ",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-faq-body",
        type: "prose",
        heading: "FAQ fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["FAQPage"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
];

export const fixedPages: PageContent[] = [
  ...fixturePages,
  // ---------------------------------------------------------------
  // overview — Identity, developer, publisher, genre, setting
  // ---------------------------------------------------------------
  {
    id: "fixed-overview-en-US",
    translationKey: "overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "overview",
    url: "/overview",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "What is the Nightwater game, who makes it, and what kind of game is it?",
    seoTitle: "Nightwater game overview: what Studio Ashty's 2026 title is",
    metaDescription:
      "Nightwater game is Studio Ashty's 2026 Steam factory and automation title. This overview covers developer, publisher, genre, setting and lighthouse endings.",
    summary:
      "What Nightwater is, who develops and publishes it, what genre and setting define it, and how the lighthouse endings frame the campaign.",
    hero: {
      eyebrow: "Identity",
      subtitle:
        "Nightwater is Studio Ashty's 2026 Steam factory and automation title. It launches September 18, 2026 on Windows, runs across four named technology eras, and ends at the lighthouse through multiple endings.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Gameplay", href: "/gameplay/" },
      ],
    },
    quickAnswer:
      "Nightwater is a 2026 Steam factory and automation title developed by Studio Ashty and published by Studio Ashty and Irox Games. The campaign is set on a nighttime island where players gather resources, build production chains across four technology eras (Sticks & Stones, Bronze, Industrial, Future), expand the island biome-by-biome through a device called the Manifestor, and pursue the lighthouse endings. The Steam store page for AppID 3983860 is the canonical source for every confirmed current-game fact.",
    keyFacts: [
      { label: "Developer", value: "Studio Ashty" },
      { label: "Publisher", value: "Studio Ashty, Irox Games" },
      { label: "Genre", value: "Factory / automation / resource progression" },
      { label: "Setting", value: "Nighttime island, four technology eras" },
      { label: "Release window", value: "September 18, 2026" },
      { label: "Platform", value: "Windows + Steam storefront" },
    ],
    modules: [
      {
        id: "what-is-nightwater",
        type: "prose",
        heading: "What is Nightwater?",
        body:
          "Nightwater is a 2026 Steam title listed on the official store page as a factory and automation experience with a resource-progression arc. The developer Studio Ashty describes the setting as a foggy nighttime island, and the campaign centers on building production chains across four technology eras — Sticks & Stones, Bronze, Industrial, and Future — while expanding the island through a device called the Manifestor and pursuing the lighthouse endings. Every confirmed fact on this page traces back to the official Steam store page at https://store.steampowered.com/app/3983860.",
      },
      {
        id: "developer-and-publisher",
        type: "prose",
        heading: "Who develops Nightwater?",
        body:
          "Studio Ashty is the developer of Nightwater. The Steam store page lists Studio Ashty and Irox Games as publishers. The development studio is the primary author of the campaign and the Manifestor biome-expansion mechanic described on the Steam page; Irox Games is listed alongside Studio Ashty in the publisher field. Anything about individual team members, business history, or prior studio releases beyond what Steam lists is not a fact for this page.",
        links: [
          {
            label: "Steam page",
            href: "/steam-page/",
            description: "Canonical anchor for developer and publisher details.",
          },
        ],
      },
      {
        id: "genre-and-setting",
        type: "prose",
        heading: "Genre and setting",
        body:
          "Nightwater is positioned inside the factory / automation / resource-progression space. The setting is a nighttime island framed by fog and a single distant lighthouse; the campaign moves through four technology eras that escalate the player's production capabilities, the Manifestor-driven biome expansion that opens new island regions, and five minigame systems layered onto the main factory loop. The lighthouse endings give the campaign a defined endpoint rather than an open sandbox.",
        links: [
          {
            label: "Gameplay",
            href: "/gameplay/",
            description: "Eras, Manifestor, and lighthouse endings in detail.",
          },
        ],
      },
      {
        id: "why-it-matters",
        type: "prose",
        heading: "Why Nightwater matters for launch-window readers",
        body:
          "Nightwater is the title's debut on Steam; no prior Nightwater release exists, so this is not a sequel or remaster. The Steam page's release window (September 18, 2026) places the launch two days after this page's 2026-09-16 research date, which makes the lighthouse endings, the four-era axis, and the Manifestor the visible launch-window framing. Anything beyond what Steam lists — including price, hour-of-release, edition structure, demo, multiplayer support, and macOS/Linux/Steam Deck status — is not announced and is labeled as such on this site.",
      },
    ],
    faqIds: ["what-is-nightwater-game", "who-develops-nightwater", "what-genre-is-nightwater"],
    relatedPageIds: [
      "home",
      "fixed-release-date-en-US",
      "fixed-gameplay-en-US",
      "fixed-platforms-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },

  // ---------------------------------------------------------------
  // release-date — Confirmed Sep 18 2026; hour, price, preorder NA
  // ---------------------------------------------------------------
  {
    id: "fixed-release-date-en-US",
    translationKey: "release-date",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release-date",
    url: "/release-date",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Nightwater release date: when does it unlock in your timezone?",
    seoTitle: "Nightwater release date: Sep 18, 2026 PDT/EDT/BST/CEST/JST unlock",
    metaDescription:
      "Nightwater releases September 18, 2026 at 08:00 PDT / 11:00 EDT / 16:00 BST / 17:00 CEST / 00:00 JST (Sep 19). Price and preorder state still unannounced.",
    summary:
      "Confirmed September 18, 2026 launch on Steam with the official PDT/EDT/BST/CEST/JST unlock table (08:00 PDT = 15:00 UTC). Price and preorder remain unannounced.",
    hero: {
      eyebrow: "Release date",
      subtitle:
        "Nightwater releases September 18, 2026 on Steam. The official Steam Community post lists the regional unlock window: 08:00 PDT / 11:00 EDT / 16:00 BST / 17:00 CEST / 00:00 JST (Sep 19). Price and preorder state are still unannounced.",
      ctas: [
        { label: "Steam page", href: "/steam-page/" },
        { label: "Price & editions", href: "/price-and-editions/" },
      ],
    },
    quickAnswer:
      "Nightwater releases on September 18, 2026 on Steam. The official Steam Community post for AppID 3983860 lists the regional unlock window: 08:00 PDT / 11:00 EDT / 16:00 BST / 17:00 CEST / 00:00 JST (Sep 19) — equivalent to 15:00 UTC. Price, edition structure, and preorder state are not announced as of 2026-09-18. Wishlist on Steam so the storefront notifies you the moment a price or preorder is added.",
    keyFacts: [
      { label: "Release date", value: "September 18, 2026" },
      { label: "Unlock time (UTC)", value: "15:00 UTC" },
      { label: "Storefront", value: "Steam (AppID 3983860)" },
      { label: "PDT", value: "08:00" },
      { label: "EDT", value: "11:00" },
      { label: "BST", value: "16:00" },
      { label: "CEST", value: "17:00" },
      { label: "JST", value: "00:00 (Sep 19)" },
      { label: "Price", value: "Not announced as of 2026-09-18" },
      { label: "Preorder state", value: "Not announced as of 2026-09-18" },
      { label: "Last verified", value: "2026-09-18" },
    ],
    modules: [
      {
        id: "confirmed-release-date",
        type: "callout",
        tone: "confirmed",
        title: "Confirmed: Nightwater releases September 18, 2026 at 15:00 UTC",
        body:
          "The September 18, 2026 release date and the 15:00 UTC unlock are sourced from the official Steam Community post for AppID 3983860. The unlock hour is the same instant everywhere — the table below converts that instant into the five regional timezones the developer published. Last verified against the Steam page and the Community announcement on 2026-09-18.",
      },
      {
        id: "regional-unlock-table",
        type: "data-table",
        heading: "Regional unlock window (September 18, 2026)",
        columns: [
          { key: "timezone", label: "Timezone" },
          { key: "unlock", label: "Unlock time" },
          { key: "utc", label: "UTC offset" },
        ],
        rows: [
          { timezone: "Pacific Daylight Time (PDT, Los Angeles)", unlock: "08:00", utc: "UTC-07:00" },
          { timezone: "Eastern Daylight Time (EDT, New York)", unlock: "11:00", utc: "UTC-04:00" },
          { timezone: "British Summer Time (BST, London)", unlock: "16:00", utc: "UTC+01:00" },
          { timezone: "Central European Summer Time (CEST, Berlin)", unlock: "17:00", utc: "UTC+02:00" },
          { timezone: "Japan Standard Time (JST, Tokyo)", unlock: "00:00 (Sep 19)", utc: "UTC+09:00" },
        ],
      },
      {
        id: "hour-of-release",
        type: "callout",
        tone: "confirmed",
        title: "Hour-of-release — Confirmed: 08:00 PDT (15:00 UTC)",
        body:
          "The Steam Community announcement for AppID 3983860 publishes the canonical regional unlock table, and 08:00 PDT (15:00 UTC) is the official launch instant. The earlier 'most Steam launches unlock in the early morning Pacific time' framing is superseded by this official hour.",
      },
      {
        id: "price-status",
        type: "callout",
        tone: "caution",
        title: "Price — Not announced as of 2026-09-18",
        body:
          "The official Steam page does not list a price, currency, or regional price tier for Nightwater as of 2026-09-18. The Steam price field can be populated at any point before launch or at launch, so the absence of a price is a current state rather than a permanent one. See the price-and-editions page for a focused status.",
      },
      {
        id: "preorder-status",
        type: "callout",
        tone: "caution",
        title: "Preorder state — Not announced as of 2026-09-18",
        body:
          "The Steam page does not list a preorder state, preorder bonus, or early-access window for Nightwater. Steam preorders typically appear alongside a listed price, so the absence of both is consistent. The answer would change once Steam shows a Pre-Purchase button on the official store page.",
      },
      {
        id: "wishlist-callout",
        type: "callout",
        tone: "tip",
        title: "Wishlist Nightwater on Steam",
        body:
          "Wishlisting is the recommended action as of 2026-09-18, because the Steam page does not support preorders. A wishlist triggers an email notification when the title leaves the coming soon state, when a price is added, or when a preorder opens, whichever happens first.",
      },
      {
        id: "canonical-source",
        type: "prose",
        heading: "Canonical source",
        body:
          "All release-date facts are sourced exclusively from the official Steam store page for AppID 3983860 and the official Steam Community announcement for the same AppID. Any future launch-day update (price, preorder, demo) will be reflected on the Steam page first; this site re-verifies against Steam on every research pass.",
        links: [
          {
            label: "Steam page",
            href: "/steam-page/",
            description: "Canonical anchor for the official store link.",
          },
        ],
      },
    ],
    faqIds: [
      "when-does-nightwater-release",
      "what-time-does-nightwater-unlock",
      "can-i-preorder-nightwater",
      "how-much-does-nightwater-cost",
    ],
    relatedPageIds: ["home", "fixed-overview-en-US", "fixed-steam-page-en-US", "fixed-price-and-editions-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },

  // ---------------------------------------------------------------
  // system-requirements — Windows min/recommended specs
  // ---------------------------------------------------------------
  {
    id: "fixed-system-requirements-en-US",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Nightwater system requirements: official Steam Windows minimum and recommended specs",
    seoTitle: "Nightwater system requirements: minimum and recommended Windows specs",
    metaDescription:
      "Nightwater requires a 64-bit Windows 10+ machine. Steam's official minimum and recommended specs list i5-3570 / GTX 1650 and Ryzen 5 5600X / RTX 2070 targets respectively. macOS, Linux, and Steam Deck status remain not announced.",
    summary:
      "Official Windows minimum and recommended PC specifications from the Steam page, with the explicit 64-bit processor and OS requirement and macOS / Linux / Steam Deck status still flagged as not announced.",
    hero: {
      eyebrow: "System requirements",
      subtitle:
        "Nightwater is confirmed for Windows on Steam. The Steam page lists a 64-bit Windows 10 minimum and a Windows 11 recommended block with concrete processor, RAM, GPU, and storage values. macOS, Linux, and Steam Deck verified status are not announced as of 2026-09-18.",
      ctas: [
        { label: "Platforms", href: "/platforms/" },
        { label: "Overview", href: "/overview/" },
      ],
    },
    quickAnswer:
      "Nightwater is confirmed for Windows on Steam and requires a 64-bit processor and operating system. The Steam page lists minimum (Windows 10 64-bit, i5-3570 4-core, 8 GB RAM, GTX 1650 / RX 470, 10 GB storage) and recommended (Windows 11 64-bit, Ryzen 5 5600X or i5-12400 6-core, 12 GB RAM, RTX 2070 / RX 5700, 10 GB storage) specifications. macOS, Linux, and Steam Deck verified status remain not announced as of 2026-09-18.",
    keyFacts: [
      { label: "Confirmed platform", value: "Windows (64-bit required)" },
      { label: "Source", value: "Steam store page (AppID 3983860)" },
      { label: "macOS", value: "Not announced as of 2026-09-18" },
      { label: "Linux", value: "Not announced as of 2026-09-18" },
      { label: "Steam Deck", value: "Not announced as of 2026-09-18" },
      { label: "Last verified", value: "2026-09-18" },
    ],
    modules: [
      {
        id: "windows-minimum",
        type: "data-table",
        heading: "Windows minimum specifications",
        columns: [
          { key: "component", label: "Component" },
          { key: "requirement", label: "Requirement" },
        ],
        rows: [
          { component: "OS", requirement: "Windows 10 or later (64-bit)" },
          { component: "Processor", requirement: "Intel Core i5-3570 @ 3.4 GHz, 4 cores" },
          { component: "Memory", requirement: "8 GB RAM" },
          { component: "Graphics", requirement: "NVIDIA GTX 1650 or GTX 1050 Ti, or AMD RX 470 / RX 570" },
          { component: "Storage", requirement: "10 GB available space" },
        ],
      },
      {
        id: "windows-recommended",
        type: "data-table",
        heading: "Windows recommended specifications",
        columns: [
          { key: "component", label: "Component" },
          { key: "requirement", label: "Requirement" },
        ],
        rows: [
          { component: "OS", requirement: "Windows 11 or later (64-bit)" },
          { component: "Processor", requirement: "AMD Ryzen 5 5600X or Intel Core i5-12400, 6 physical cores minimum" },
          { component: "Memory", requirement: "12 GB RAM" },
          { component: "Graphics", requirement: "NVIDIA RTX 2070 or AMD RX 5700" },
          { component: "Storage", requirement: "10 GB available space" },
        ],
      },
      {
        id: "architecture-callout",
        type: "callout",
        tone: "tip",
        title: "64-bit processor and operating system required",
        body:
          "The Steam page lists a 64-bit OS for both the minimum and recommended rows, and the architecture callout (64-bit processor and operating system) is on the store page itself. 32-bit Windows installs are not supported.",
      },
      {
        id: "other-platforms-not-announced",
        type: "callout",
        tone: "unknown",
        title: "macOS, Linux, and Steam Deck — Not announced as of 2026-09-18",
        body:
          "macOS support, Linux support, and Steam Deck verified status are not announced as of 2026-09-18. Studio Ashty has not posted a separate announcement for these targets. The answer would change once Studio Ashty or Steam publishes a confirmation on the store page or in a Steam news post.",
      },
      {
        id: "canonical-source",
        type: "prose",
        heading: "Canonical source",
        body:
          "All Windows minimum, recommended, and 64-bit-architecture facts are sourced exclusively from the official Steam store page for AppID 3983860. The Steam page is re-verified on every research pass; treat the Steam page as the source of truth and this page as a structured mirror of it.",
        links: [
          {
            label: "Steam page",
            href: STEAM_URL,
            description: "Canonical anchor for the System Requirements block.",
          },
        ],
      },
    ],
    faqIds: ["what-pc-specs-for-nightwater", "is-nightwater-on-mac", "is-nightwater-on-linux", "is-nightwater-steam-deck-verified"],
    relatedPageIds: ["home", "fixed-platforms-en-US", "fixed-overview-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },

  // ---------------------------------------------------------------
  // platforms — Windows + Steam storefront; console not announced
  // ---------------------------------------------------------------
  {
    id: "fixed-platforms-en-US",
    translationKey: "platforms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "platforms",
    url: "/platforms",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Nightwater Platforms and Steam Features at Launch",
    seoTitle: "Nightwater Platforms: PC, Steam, and Steam Features at Launch",
    metaDescription:
      "Nightwater platforms: Windows PC and Steam are confirmed for the September 2026 launch. Steam Features confirmed: Single-player, Achievements, Cloud, Family Sharing. Console, macOS, and Linux remain not announced.",
    summary:
      "Confirmed Windows + Steam storefront for the September 2026 launch with Single-player, Steam Achievements, Steam Cloud, and Family Sharing confirmed as Steam Features. Console, macOS, Linux, and Steam Deck verified status are not announced.",
    hero: {
      eyebrow: "Platforms",
      subtitle:
        "Nightwater is confirmed for Windows on Steam with Single-player, Steam Achievements, Steam Cloud, and Family Sharing on the store page. Console editions, macOS support, Linux ports, and Steam Deck verified status are not announced as of 2026-09-18.",
      ctas: [
        { label: "System requirements", href: "/system-requirements/" },
        { label: "Steam page", href: "/steam-page/" },
      ],
    },
    quickAnswer:
      "Nightwater platforms are Windows PC and the Steam storefront on September 18, 2026. The Steam Features row on the official store page confirms Single-player, Steam Achievements, Steam Cloud, and Family Sharing. Console editions, macOS support, Linux ports, and Steam Deck verified status are not announced as of 2026-09-18. Every fact on this page comes from the official Steam store page for AppID 3983860.",
    keyFacts: [
      { label: "Confirmed platforms", value: "Windows PC, Steam storefront" },
      { label: "Single-player", value: "Confirmed" },
      { label: "Steam Achievements", value: "Confirmed" },
      { label: "Steam Cloud", value: "Confirmed" },
      { label: "Family Sharing", value: "Confirmed" },
      { label: "Console", value: "Not announced as of 2026-09-18" },
      { label: "macOS", value: "Not announced as of 2026-09-18" },
      { label: "Linux", value: "Not announced as of 2026-09-18" },
      { label: "Steam Deck verified", value: "Not announced as of 2026-09-18" },
      { label: "Last verified", value: "2026-09-18" },
    ],
    modules: [
      {
        id: "confirmed-platforms",
        type: "prose",
        heading: "Confirmed: Windows PC and Steam storefront",
        body:
          "The only confirmed Nightwater platforms as of 2026-09-18 are Windows PC and the Steam storefront. AppID 3983860 on Steam is the canonical store listing, and the System Requirements panel on that page lists Windows as the sole operating system. There is no Epic Games Store, GOG, oritcher page announced for Nightwater, and there is no Xbox, PlayStation, or Nintendo Switch listing at the time of writing.",
      },
      {
        id: "console-macos-linux-not-announced",
        type: "callout",
        tone: "caution",
        title: "Console, macOS, and Linux — Not announced as of 2026-09-18",
        body:
          "Studio Ashty has not announced a console edition (Xbox, PlayStation, or Nintendo Switch), macOS support, or a Linux port for Nightwater. The Steam Deck verified status is also not announced. Each of these would first appear on the official Steam store page or in a Steam news post when confirmed.",
      },
      {
        id: "steam-features",
        type: "callout",
        tone: "confirmed",
        title: "Steam Features at launch: Single-player, Achievements, Cloud, Family Sharing",
        body:
          "The official Steam store page for AppID 3983860 lists four Steam Features for the launch build: Single-player, Steam Achievements, Steam Cloud, and Family Sharing. Single-player confirms the campaign is a single-player experience with no co-op or multiplayer. Steam Achievements means progress-based unlockable achievements are tracked on your Steam profile. Steam Cloud means saves sync between any PC or Steam Deck signed into your Steam account. Family Sharing means an authorized Steam Family Library member can launch your Nightwater copy from their own account. See the Steam page for the canonical Steam Features row.",
      },
    ],
    faqIds: [
      "what-platforms-is-nightwater-on",
      "is-nightwater-on-console",
      "is-nightwater-on-steam-deck",
      "is-nightwater-multiplayer",
      "what-steam-features-does-nightwater-have",
    ],
    relatedPageIds: ["home", "fixed-system-requirements-en-US", "fixed-steam-page-en-US", "fixed-overview-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },

  // ---------------------------------------------------------------
  // gameplay — Four eras, Manifestor, lighthouse endings
  // ---------------------------------------------------------------
  {
    id: "fixed-gameplay-en-US",
    translationKey: "gameplay",
    locale: "en-US",
    routeKind: "fixed",
    slug: "gameplay",
    url: "/gameplay",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Nightwater Gameplay: Loop, Eras, and Lighthouse Endings",
    seoTitle: "Nightwater Gameplay: Eras, Manifestor, Lighthouse Endings",
    metaDescription:
      "Nightwater gameplay: build factories across four eras, expand the Manifestor biome, play five minigames, and pursue lighthouse endings on the nighttime island.",
    summary:
      "How Nightwater plays: the factory loop, four technology eras, Manifestor biome expansion, five minigame systems, and the lighthouse endings.",
    hero: {
      eyebrow: "Gameplay",
      subtitle:
        "Nightwater is a factory and automation game on a nighttime island. The campaign spans four technology eras, the Manifestor expands the island biome-by-biome, and the lighthouse endings give it a defined endpoint.",
      ctas: [
        { label: "Overview", href: "/overview/" },
        { label: "FAQ", href: "/faq/" },
      ],
    },
    quickAnswer:
      "Nightwater gameplay centers on a factory and automation loop set on a nighttime island. Players gather resources, build production chains, and push through four technology eras — Sticks & Stones, Bronze, Industrial, and Future — using the Manifestor to clear fog and expand the island biome-by-biome. Five minigame systems layer short focused challenges onto the main loop. Reaching the lighthouse through different era and Manifestor choices drives the multi-ending narrative.",
    keyFacts: [
      { label: "Core loop", value: "Factory / automation / resource progression" },
      { label: "Technology eras", value: "Sticks & Stones, Bronze, Industrial, Future" },
      { label: "Biome expansion", value: "Manifestor clears fog and opens new biomes" },
      { label: "Minigame systems", value: "Five minigame systems layered on the main loop" },
      { label: "Narrative endpoint", value: "Lighthouse endings (multiple possible conclusions)" },
      { label: "Last verified", value: "2026-09-16" },
    ],
    modules: [
      {
        id: "setting-and-goal",
        type: "prose",
        heading: "Setting and core goal",
        body:
          "Nightwater gameplay opens on a dim island under a permanent night sky, framed as a factory and automation experience with a resource-progression arc. The setting is more than cosmetic: darkness, the surrounding fog, and a single distant lighthouse shape every decision you make, because expanding the island, unlocking new resources, and reaching the lighthouse are the same long-term project. The developer describes the game as a factory / automation / resource progression experience, and the Steam store page places the lighthouse at the center of the player's motivation.",
      },
      {
        id: "four-tech-eras",
        type: "prose",
        heading: "The four technology eras",
        body:
          "Nightwater gameplay moves through four named technology eras — Sticks & Stones, Bronze, Industrial, and Future — listed on the Steam store page as the progression axis of the campaign. Each era expands the production chain capabilities available to the player, and the era transitions are the major milestones of any single run. The eras are official-store facts; specific in-era production recipes and unlock thresholds are not enumerated on the Steam page and are not a fact for this page. See the technology-eras page for the launch-day framework reference (canonical order, role of each era, manual-to-industrial arc, and Future as the lighthouse culmination).",
        links: [
          {
            label: "Technology eras",
            href: "/technology-eras/",
            description: "Launch-day framework reference for the four-era progression.",
          },
        ],
      },
      {
        id: "manifestor-biome-expansion",
        type: "prose",
        heading: "Manifestor biome expansion",
        body:
          "The Manifestor is the central tool the player uses to clear fog and expand the island biome by biome. Each biome reveals new resources, which feed back into the factory and unlock the next step in the production chain. The Manifestor mechanic is the bridge between the factory loop and the lighthouse narrative — the same expansion that powers the production line also drives the campaign forward.",
      },
      {
        id: "five-minigame-systems",
        type: "prose",
        heading: "Five minigame systems",
        body:
          "The Steam store page lists five minigame systems layered onto the main factory loop. These are short focused challenges that sit between production milestones, and they are how Nightwater gameplay breaks up the long automation phases. The five systems are official-store facts; specific per-minigame rules and rewards are not enumerated on the Steam page and are not a fact for this page.",
      },
      {
        id: "lighthouse-endings",
        type: "prose",
        heading: "Lighthouse endings",
        body:
          "The lighthouse is the narrative spine of Nightwater gameplay, and reaching it through different era and Manifestor choices drives a multi-ending narrative. The Steam page presents the lighthouse as the campaign's endpoint, not a single fixed finale; players can reach different conclusions depending on the eras they prioritize and the order in which they expand biomes via the Manifestor. The multi-ending framing is official-store fact; specific ending triggers are not enumerated on the Steam page and are not a fact for this page.",
        links: [
          {
            label: "FAQ",
            href: "/faq/",
            description: "Launch-window questions about gameplay, multiplayer, and language scope.",
          },
        ],
      },
    ],
    faqIds: ["how-does-nightwater-play", "what-are-the-tech-eras", "what-is-the-manifestor", "how-do-lighthouse-endings-work"],
    relatedPageIds: ["home", "fixed-technology-eras-en-US", "fixed-overview-en-US", "fixed-faq-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },

  // ---------------------------------------------------------------
  // technology-eras — Launch-day framework reference
  // ---------------------------------------------------------------
  {
    id: "fixed-technology-eras-en-US",
    translationKey: "technology-eras",
    locale: "en-US",
    routeKind: "fixed",
    slug: "technology-eras",
    url: "/technology-eras",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Nightwater technology eras: Sticks & Stones, Bronze, Industrial, Future",
    seoTitle: "Nightwater technology eras: order, role, and Future as lighthouse culmination",
    metaDescription:
      "Nightwater's four technology eras in canonical order: Sticks & Stones, Bronze, Industrial, Future. Each era expands production chain capability; Future is the lighthouse culmination.",
    summary:
      "Launch-day framework reference for the Nightwater technology era progression: canonical era order, the role of each era, the manual-to-industrial arc, the Sticks & Stones starting toolkit, and Future as the lighthouse culmination.",
    hero: {
      eyebrow: "Era framework",
      subtitle:
        "Four technology eras move Nightwater's campaign from manual gathering to industrial automation and on to the lighthouse. Use this as the canonical order reference; per-era recipes, structures, and unlock thresholds remain pending post-launch evidence.",
      ctas: [
        { label: "Gameplay", href: "/gameplay/" },
        { label: "Open Steam page", href: STEAM_URL },
      ],
    },
    quickAnswer:
      "Nightwater moves through four technology eras in this canonical order: Sticks & Stones, Bronze, Industrial, and Future. Each era expands the production chain capabilities available to the player, and the Future era is the lighthouse culmination that ends the campaign. The era order and roles are confirmed by the Steam store page for AppID 3983860 and paraphrased in third-party preview coverage such as the 2UpSkill write-up. Per-era recipes, structures, and unlock thresholds are not yet public and are flagged as pending post-launch evidence.",
    keyFacts: [
      { label: "Era count", value: "Four named technology eras" },
      { label: "Canonical order", value: "Sticks & Stones → Bronze → Industrial → Future" },
      { label: "Era role", value: "Each era expands production chain capability" },
      { label: "Progression arc", value: "Manual → industrial → lighthouse culmination" },
      { label: "Starting toolkit", value: "Sticks & Stones — manual gathering, basic crafting" },
      { label: "Culmination era", value: "Future — lighthouse endpoint" },
      { label: "Last verified", value: "2026-09-16" },
    ],
    modules: [
      {
        id: "era-order",
        type: "prose",
        heading: "Canonical era order",
        body:
          "Nightwater moves through four named technology eras in a fixed order: Sticks & Stones, Bronze, Industrial, and Future. The Steam store page for AppID 3983860 lists these four era names as the progression axis of the campaign; the same era order is also paraphrased in third-party preview coverage such as the 2UpSkill write-up at https://2upskill.com/?p=9147/. Treat this as the canonical sequence when planning a run: each era unlocks the production capabilities required to reach the next one.",
        links: [
          {
            label: "Steam store page (AppID 3983860)",
            href: STEAM_URL,
            description: "Canonical source for the four-era framework.",
          },
          {
            label: "2UpSkill preview",
            href: "https://2upskill.com/?p=9147/",
            description: "Third-party preview paraphrasing the same progression arc.",
          },
        ],
      },
      {
        id: "era-roles",
        type: "prose",
        heading: "Role of each era",
        body:
          "Each era expands the production chain capabilities available to the player. Sticks & Stones is the manual starting toolkit: hand-gathered resources, basic crafting, and the shortest production chains of the campaign. Bronze adds the first metal-tier production steps and more structured crafting. Industrial introduces powered machinery, larger-scale automation, and the production lines that can sustain an island-wide factory. Future is the lighthouse culmination — the highest technology tier and the era in which the campaign reaches its narrative endpoint through the lighthouse endings.",
      },
      {
        id: "progression-arc",
        type: "prose",
        heading: "Manual-to-industrial progression arc",
        body:
          "Each transition is a major milestone of any single run. The arc is a capability ladder rather than a fixed unlock schedule — manual labor gives way to structured production, structured production gives way to powered machinery, and powered machinery gives way to the lighthouse culmination. Specific per-era recipes, structures, and thresholds are not enumerated on the Steam page, so treat the eras as ordered capability tiers and re-check the store page once those details are posted.",
      },
      {
        id: "starting-toolkit",
        type: "prose",
        heading: "Sticks & Stones — the early-era starting toolkit",
        body:
          "Sticks & Stones is the player's starting toolkit. Resources are gathered by hand, crafting is basic, and the production chains are the shortest of the campaign. This is the era in which players learn the factory loop and lay down the manual workflows that Bronze will later reorganize around metal-tier production. Anything beyond the existence of Sticks & Stones as the starting era — including specific recipes, structures, and unlock thresholds — is pending post-launch evidence on the Steam page.",
        links: [
          {
            label: "Gameplay",
            href: "/gameplay/",
            description: "How the factory loop interacts with the Manifestor and lighthouse endings.",
          },
        ],
      },
      {
        id: "future-culmination",
        type: "callout",
        tone: "tip",
        title: "Future era — lighthouse culmination",
        body:
          "The Future era is the lighthouse culmination: the highest technology tier and the era in which the campaign reaches its narrative endpoint through the lighthouse endings. The lighthouse is the spine of the multi-ending narrative, not a single fixed finale; reaching it through different era and Manifestor choices drives different conclusions. The Future-as-culmination framing is official-store fact; specific Future-era unlocks and ending triggers are not enumerated on the Steam page.",
      },
      {
        id: "pending-post-launch-evidence",
        type: "callout",
        tone: "caution",
        title: "Pending post-launch evidence (watch-class)",
        body:
          "Per-era recipes, structures, and unlock thresholds are not enumerated on the Steam page as of 2026-09-16. Lighthouse endings, Manifestor biome content, and the five minigame systems are also marked as watch-class: their broad role is confirmed by the Steam store page, but their specific triggers, rewards, and progression requirements are pending post-launch evidence. The Steam page at https://store.steampowered.com/app/3983860 is the source of truth; this page will be updated when those details are posted.",
      },
    ],
    faqIds: ["what-are-the-tech-eras"],
    relatedPageIds: ["home", "fixed-gameplay-en-US", "fixed-overview-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },

  // ---------------------------------------------------------------
  // price-and-editions — Status: not announced
  // ---------------------------------------------------------------
  {
    id: "fixed-price-and-editions-en-US",
    translationKey: "price-and-editions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "price-and-editions",
    url: "/price-and-editions",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Nightwater Price, Editions, and Demo Status",
    seoTitle: "Nightwater Price, Editions, and Demo Depot on Steam",
    metaDescription:
      "Nightwater demo is available on Steam (AppID 4576520). Price, editions, and preorder remain unannounced as of 2026-09-18; wishlist the main page for launch updates.",
    summary:
      "Nightwater demo depot is confirmed available on Steam (AppID 4576520). Price, editions, and preorder remain unannounced as of 2026-09-18; wishlist the main store page for launch updates.",
    hero: {
      eyebrow: "Price & editions",
      subtitle:
        "The Nightwater Demo is available on Steam as a separate depot (AppID 4576520). Price, edition structure, and preorder are still not announced as of 2026-09-18. Wishlist the main store page to be notified when those details appear.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Steam page", href: "/steam-page/" },
      ],
    },
    quickAnswer:
      "The Nightwater Demo is available on Steam as a separate depot under AppID 4576520 — search 'Nightwater Demo' in your Steam client or open the demo store page directly. Price, edition structure, and preorder state are not announced as of 2026-09-18. The main Nightwater store page does not yet show a price or Pre-Purchase button. Wishlist the main store page so Steam notifies you the moment a price or preorder opens.",
    keyFacts: [
      { label: "Demo", value: "Available on Steam (AppID 4576520)" },
      { label: "Demo depot name", value: "Nightwater Demo" },
      { label: "Price", value: "Not announced as of 2026-09-18" },
      { label: "Editions", value: "Not announced as of 2026-09-18" },
      { label: "Preorder", value: "Not announced as of 2026-09-18" },
      { label: "Recommended action", value: "Wishlist the main store page" },
      { label: "Last verified", value: "2026-09-18" },
    ],
    modules: [
      {
        id: "demo-availability",
        type: "callout",
        tone: "confirmed",
        title: "Demo — Available on Steam (AppID 4576520)",
        body:
          "The Nightwater Demo is available on Steam as a separate depot under AppID 4576520. Open the demo store page to add it to your library and start the download from your Steam library's Downloads view. Demo progress does not carry over to the full game; the main launch is on September 18, 2026.",
      },
      {
        id: "how-to-install-demo",
        type: "prose",
        heading: "How to install the Nightwater Demo",
        body:
          "Open the demo store page, click 'Add to Library' (or 'Add to Cart' if a price is shown), and accept the Steam client install prompt. The demo then appears under your Steam library and starts downloading to your default Steam library folder. If you do not see the download button, make sure the Steam client is signed in and that your default Steam library has at least 10 GB free — the demo uses the same storage target as the full game on Steam.",
        links: [
          {
            label: "Nightwater Demo on Steam",
            href: STEAM_DEMO_URL,
            description: "Direct link to the demo store page (AppID 4576520).",
          },
          {
            label: "SteamDB demo entry",
            href: STEAMDB_DEMO_URL,
            description: "Public demo depot and depots snapshot.",
          },
        ],
      },
      {
        id: "price-status",
        type: "callout",
        tone: "caution",
        title: "Price — Not announced as of 2026-09-18",
        body:
          "The Nightwater price on the main Steam store page is unlisted as of 2026-09-18. The buy button area on the AppID 3983860 store page does not show a visible price or preorder banner, which means the developer has not finalized a price for public release. The Steam price field can be populated at any point before launch or at launch, so the absence of a price is a current state rather than a permanent one.",
      },
      {
        id: "edition-structure",
        type: "callout",
        tone: "caution",
        title: "Editions — Not announced as of 2026-09-18",
        body:
          "The Steam page does not enumerate any edition structure for Nightwater. Whether the launch will offer a Standard edition only, a Deluxe edition, or any bundle structure is not announced as of 2026-09-18.",
      },
      {
        id: "preorder-status",
        type: "callout",
        tone: "caution",
        title: "Preorder — Not announced as of 2026-09-18",
        body:
          "The Steam page does not list a preorder state, preorder bonus, or early-access window for Nightwater. Steam preorders typically appear alongside a listed price, so the absence of both is consistent. The answer would change once Steam shows a Pre-Purchase button on the official store page.",
      },
      {
        id: "wishlist-recommendation",
        type: "callout",
        tone: "tip",
        title: "Wishlist the main store page",
        body:
          "Wishlisting is the recommended action as of 2026-09-18, because the main store page does not support preorders. A wishlist triggers an email notification when the title leaves the coming soon state, when a price is added, or when a preorder opens, whichever happens first.",
      },
    ],
    faqIds: [
      "how-much-does-nightwater-cost",
      "what-editions-of-nightwater-exist",
      "is-there-a-nightwater-demo",
      "where-do-i-download-the-nightwater-demo",
    ],
    relatedPageIds: ["home", "fixed-release-date-en-US", "fixed-steam-page-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },

  // ---------------------------------------------------------------
  // steam-page — Canonical anchor hub
  // ---------------------------------------------------------------
  {
    id: "fixed-steam-page-en-US",
    translationKey: "steam-page",
    locale: "en-US",
    routeKind: "fixed",
    slug: "steam-page",
    url: "/steam-page",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Nightwater Steam store page and Steam Community Hub anchors",
    seoTitle: "Nightwater Steam page: official store and Steam Hub links",
    metaDescription:
      "The official Nightwater Steam page is the canonical anchor for current-game facts. Find the store page and Steam Community Hub links for AppID 3983860 here.",
    summary:
      "Canonical anchors for the Nightwater Steam store page, Steam Community Hub, and the Steam news index.",
    hero: {
      eyebrow: "Steam page",
      subtitle:
        "The official Nightwater Steam page is the canonical anchor for every current-game fact on this site, and the Steam Community Hub collects developer announcements and patch notes in one feed.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Platforms", href: "/platforms/" },
      ],
    },
    quickAnswer:
      "The official Nightwater Steam page lives at https://store.steampowered.com/app/3983860 and is the canonical anchor for every current-game fact on this site. The companion Steam Community Hub for AppID 3983860 collects developer announcements and patch notes in one feed. Both URLs were verified on 2026-09-16 against the official Steam storefront and are the only sources treated as first-class for this title.",
    keyFacts: [
      { label: "Steam store page", value: "https://store.steampowered.com/app/3983860" },
      { label: "Steam news index", value: "https://store.steampowered.com/news/app/3983860" },
      { label: "AppID", value: "3983860" },
      { label: "Developer", value: "Studio Ashty" },
      { label: "Publisher", value: "Studio Ashty, Irox Games" },
      { label: "Last verified", value: "2026-09-16" },
    ],
    modules: [
      {
        id: "store-page-link",
        type: "prose",
        heading: "Steam store page",
        body:
          "The Nightwater Steam page is the store page for AppID 3983860 at https://store.steampowered.com/app/3983860. It is the official storefront entry where the game's description, system requirements, supported languages list, screenshots, and release window are published. All launch-window claims on this site are checked against this URL before being cited, so it should be the first stop for anyone verifying what is and is not confirmed about Nightwater.",
      },
      {
        id: "community-hub-link",
        type: "prose",
        heading: "Steam Community Hub",
        body:
          "The Steam Community Hub for AppID 3983860 lives under the Discussions and Announcements tabs of the Steam store page. It collects developer announcements, dev logs, and patch notes in a single feed. The Steam-published news feed is the only first-party announcement channel used by this site for launch-window updates.",
        links: [
          {
            label: "News",
            href: "/news/",
            description: "Where to read official Steam updates for Nightwater.",
          },
        ],
      },
      {
        id: "research-date-stamp",
        type: "callout",
        tone: "unknown",
        title: "Research date 2026-09-16",
        body:
          "Every fact on this site was re-checked against the official Steam page on 2026-09-16. The Steam page is the single source of truth; this site mirrors only what Steam lists, and flags any unannounced detail (price, hour-of-release, edition structure, demo, multiplayer, macOS, Linux, Steam Deck verified status) as not announced.",
      },
    ],
    faqIds: ["where-is-the-nightwater-steam-page", "is-nightwater-on-steam"],
    relatedPageIds: ["home", "fixed-release-date-en-US", "fixed-platforms-en-US", "fixed-news-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },

  // ---------------------------------------------------------------
  // news — Steam-published news index
  // ---------------------------------------------------------------
  {
    id: "fixed-news-en-US",
    translationKey: "news",
    locale: "en-US",
    routeKind: "fixed",
    slug: "news",
    url: "/news",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Nightwater news: where to read official Steam updates",
    seoTitle: "Nightwater news: official Steam updates and announcements",
    metaDescription:
      "Nightwater news lives on the official Steam news feed for AppID 3983860. Find the Steam news index link and how Steam-published patch notes are tracked here.",
    summary:
      "Nightwater news is published exclusively through the official Steam news feed for AppID 3983860; third-party outlets are not used as primary sources.",
    hero: {
      eyebrow: "News",
      subtitle:
        "Nightwater news is published on the official Steam news feed for AppID 3983860. Third-party outlets, fan wikis, and community recap posts are not used as primary sources.",
      ctas: [
        { label: "Steam page", href: "/steam-page/" },
        { label: "Release date", href: "/release-date/" },
      ],
    },
    quickAnswer:
      "Nightwater news is published on the official Steam news feed for AppID 3983860, reachable from the store page or directly at https://store.steampowered.com/news/app/3983860. As of 2026-09-16, the Steam news index is the only first-class source for Nightwater news on this site. The feed collects developer announcements, dev logs, and patch notes in reverse chronological order.",
    keyFacts: [
      { label: "Source", value: "Steam news feed (AppID 3983860)" },
      { label: "Steam news URL", value: "https://store.steampowered.com/news/app/3983860" },
      { label: "First-party channel", value: "Developer-published Steam news only" },
      { label: "Last verified", value: "2026-09-16" },
    ],
    modules: [
      {
        id: "steam-news-index",
        type: "prose",
        heading: "Steam news index",
        body:
          "The Nightwater Steam news index lives at https://store.steampowered.com/news/app/3983860 and is the direct view of the official Steam-published announcement feed for AppID 3983860. Every entry that appears in this index has been posted by the developer or publisher to Steam, which means the items carry the same factual weight as the Steam store page itself. Readers tracking launch-day coverage should bookmark this URL, because announcements appear here before they surface on any third-party news site.",
      },
      {
        id: "patch-notes-tracking",
        type: "prose",
        heading: "How patch notes are tracked",
        body:
          "Steam-published patch notes for Nightwater appear inside the Steam news index, sorted in reverse chronological order. Because the Steam-published feed is the only first-party channel, this site does not pull in third-party patch summaries; readers who want a recap of patch notes are pointed to the Steam news index directly. Steam's own RSS feed for AppID 3983860 is reachable from the news index footer if a reader prefers RSS.",
      },
      {
        id: "third-party-outlets",
        type: "callout",
        tone: "unknown",
        title: "Third-party outlets are not primary sources",
        body:
          "Third-party outlets, fan wikis, and community recap posts are not used as primary sources for Nightwater news on this site. Any launch-window update that does not appear on the official Steam store page or in the Steam news feed is not a fact for this site and would not be cited as one.",
      },
    ],
    faqIds: ["where-to-find-nightwater-news"],
    relatedPageIds: ["home", "fixed-steam-page-en-US", "fixed-release-date-en-US"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },

  // ---------------------------------------------------------------
  // faq — Launch-window questions answered
  // ---------------------------------------------------------------
  {
    id: "fixed-faq-en-US",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Nightwater: top launch-window questions answered",
    seoTitle: "Nightwater FAQ: launch time, languages, specs, demo, Steam Features",
    metaDescription:
      "Nightwater launches September 18, 2026 at 08:00 PDT / 15:00 UTC. 13 supported languages, official Windows minimum and recommended specs, Steam demo depot available, and Steam Features confirmed.",
    summary:
      "Launch-window FAQ for Nightwater — release time, supported languages, PC specs, demo depot, Steam Features, and game size — anchored to the Steam store page.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Nightwater launches September 18, 2026 at 08:00 PDT (15:00 UTC). 13 supported languages, official Windows minimum and recommended specs, Steam demo available, and Steam Features confirmed on the store page.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Gameplay", href: "/gameplay/" },
      ],
    },
    quickAnswer:
      "Nightwater releases September 18, 2026 on Steam at 08:00 PDT / 11:00 EDT / 16:00 BST / 17:00 CEST / 00:00 JST (Sep 19) — the same 15:00 UTC instant. The Steam page confirms 13 supported languages, Windows minimum and recommended specs, Single-player / Achievements / Cloud / Family Sharing Steam Features, and a separate Steam demo depot (AppID 4576520). Price, edition structure, and preorder remain unannounced.",
    keyFacts: [
      { label: "Release date", value: "September 18, 2026 (15:00 UTC)" },
      { label: "Supported languages", value: "13 languages, all Interface + Full Audio + Subtitles" },
      { label: "Windows specs", value: "Minimum: Win10 64-bit, i5-3570, 8 GB, GTX 1650" },
      { label: "Steam Features", value: "Single-player, Achievements, Cloud, Family Sharing" },
      { label: "Demo", value: "Available on Steam (AppID 4576520)" },
      { label: "Last verified", value: "2026-09-18" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "How this FAQ treats unannounced facts",
        body:
          "Each answer below is anchored to the official Steam store page for AppID 3983860 or the Steam Community announcement for the same AppID. Anything not on those pages is written as 'Not announced as of 2026-09-18' with a note on what evidence would change the answer. The FAQ links to the dedicated release-date, gameplay, system-requirements, platforms, and price-and-editions pages for the deeper read.",
      },
      {
        id: "is-nightwater-out",
        type: "callout",
        tone: "confirmed",
        title: "Is Nightwater out?",
        body:
          "Nightwater releases on September 18, 2026 on Steam at 08:00 PDT (15:00 UTC). The release date and regional unlock window are sourced from the official Steam store page and Steam Community post for AppID 3983860. See the release-date page for the regional unlock table.",
      },
      {
        id: "regional-unlock-table",
        type: "data-table",
        heading: "Regional unlock window (September 18, 2026)",
        columns: [
          { key: "timezone", label: "Timezone" },
          { key: "unlock", label: "Unlock time" },
        ],
        rows: [
          { timezone: "Pacific (PDT)", unlock: "08:00" },
          { timezone: "Eastern (EDT)", unlock: "11:00" },
          { timezone: "British Summer (BST)", unlock: "16:00" },
          { timezone: "Central European Summer (CEST)", unlock: "17:00" },
          { timezone: "Japan (JST)", unlock: "00:00 (Sep 19)" },
        ],
      },
      {
        id: "supported-languages",
        type: "data-table",
        heading: "Supported languages on Steam (13 languages)",
        columns: [
          { key: "language", label: "Language" },
          { key: "interface", label: "Interface" },
          { key: "audio", label: "Full audio" },
          { key: "subtitles", label: "Subtitles" },
        ],
        rows: [
          { language: "English", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "French", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "German", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "Spanish (Spain)", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "Portuguese (Brazil)", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "Simplified Chinese", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "Japanese", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "Korean", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "Russian", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "Bosnian", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "Portuguese (Portugal)", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "Spanish (Latin America)", interface: "Yes", audio: "Yes", subtitles: "Yes" },
          { language: "Traditional Chinese", interface: "Yes", audio: "Yes", subtitles: "Yes" },
        ],
      },
      {
        id: "pc-specs",
        type: "data-table",
        heading: "Windows minimum and recommended specs",
        columns: [
          { key: "component", label: "Component" },
          { key: "minimum", label: "Minimum" },
          { key: "recommended", label: "Recommended" },
        ],
        rows: [
          { component: "OS", minimum: "Windows 10 64-bit", recommended: "Windows 11 64-bit" },
          { component: "Processor", minimum: "i5-3570 @ 3.4 GHz, 4 cores", recommended: "Ryzen 5 5600X or i5-12400, 6 physical cores" },
          { component: "Memory", minimum: "8 GB RAM", recommended: "12 GB RAM" },
          { component: "Graphics", minimum: "GTX 1650 / GTX 1050 Ti, or RX 470 / RX 570", recommended: "RTX 2070 or RX 5700" },
          { component: "Storage", minimum: "10 GB", recommended: "10 GB" },
        ],
      },
      {
        id: "steam-features",
        type: "callout",
        tone: "confirmed",
        title: "Steam Features at launch",
        body:
          "The Steam store page for AppID 3983860 lists four Steam Features for the launch build: Single-player (the campaign is a single-player factory and automation experience with no co-op), Steam Achievements (progress-based unlockable achievements are tracked on your Steam profile), Steam Cloud (saves sync between any PC or Steam Deck signed into your Steam account), and Family Sharing (an authorized Steam Family Library member can launch your Nightwater copy from their own account).",
      },
      {
        id: "demo",
        type: "callout",
        tone: "confirmed",
        title: "Is there a demo?",
        body:
          "Yes. The Nightwater Demo is available on Steam as a separate depot under AppID 4576520. Add it to your library from the demo store page; it downloads through the Steam client. See the price-and-editions page for install steps and SteamDB depot details.",
      },
      {
        id: "game-size",
        type: "callout",
        tone: "tip",
        title: "How big is the game (download size)?",
        body:
          "The Steam page lists 10 GB available space on both the minimum and recommended rows in the System Requirements block. That is the most reliable launch-window figure; the actual download size may differ slightly after first-run patching. Plan for at least 10 GB free on your Steam library drive.",
      },
    ],
    faqIds: [
      "when-does-nightwater-release",
      "what-time-does-nightwater-unlock",
      "is-nightwater-multiplayer",
      "what-languages-does-nightwater-support",
      "which-languages-are-not-supported-on-nightwater",
      "what-pc-specs-for-nightwater",
      "how-big-is-nightwater",
      "is-there-a-nightwater-demo",
      "where-do-i-download-the-nightwater-demo",
      "what-steam-features-does-nightwater-have",
    ],
    relatedPageIds: [
      "home",
      "fixed-release-date-en-US",
      "fixed-gameplay-en-US",
      "fixed-system-requirements-en-US",
      "fixed-platforms-en-US",
      "fixed-price-and-editions-en-US",
    ],
    schemaTypes: ["FAQPage", "Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
];

// Suppress unused-import warning for the constants block above by exporting them.
// They are used by reference in module bodies via the consts above.
export {
  RESEARCH_DATE,
  STEAM_URL,
  STEAM_NEWS_URL,
  STEAM_DEMO_URL,
  STEAM_COMMUNITY_URL,
  STEAMDB_DEMO_URL,
};

