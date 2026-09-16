import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: "Nightwater game: launch hub for Studio Ashty's Sep 18 release",
  seoTitle:
    "Nightwater game: launch hub for Studio Ashty's Sep 18 release",
  metaDescription:
    "Nightwater game is Studio Ashty's 2026 Steam factory and automation builder launching Sep 18, 2026. This hub covers release, specs, platforms and official news.",
  summary:
    "Launch-window reference hub for Nightwater (Steam AppID 3983860): release date, system requirements, platforms, gameplay loop, and the lighthouse endings.",
  hero: {
    eyebrow: "Launch hub",
    subtitle:
      "Nightwater launches on Steam on September 18, 2026. This hub gives launch-window readers the confirmed release window, official PC specs, storefront scope, and the four-era factory loop that ends in lighthouse endings.",
    ctas: [
      { label: "Release date", href: "/release-date/" },
      { label: "Open Steam page", href: "https://store.steampowered.com/app/3983860" },
    ],
  },
  quickAnswer:
    "Nightwater is a 2026 Steam factory and automation game developed by Studio Ashty and published by Studio Ashty and Irox Games. It releases on Steam on September 18, 2026 for Windows. The campaign runs across four technology eras (Sticks & Stones, Bronze, Industrial, Future), uses the Manifestor to clear fog and expand the island biome-by-biome, layers five minigame systems, and ends at the lighthouse through multiple possible endings.",
  keyFacts: [
    { label: "Release date", value: "September 18, 2026 (Steam AppID 3983860)" },
    { label: "Developer", value: "Studio Ashty" },
    { label: "Publisher", value: "Studio Ashty, Irox Games" },
    { label: "Platform", value: "Windows + Steam storefront" },
    { label: "Genre", value: "Factory / automation / resource progression" },
    { label: "Last verified", value: "2026-09-16" },
  ],
  modules: [
    {
      id: "identity-launch",
      type: "entity-grid",
      heading: "Identity & launch",
      items: [
        {
          title: "Overview",
          summary: "Developer, publisher, genre, setting and lighthouse endings.",
          href: "/overview/",
        },
        {
          title: "Release date",
          summary: "Confirmed September 18, 2026 launch window.",
          href: "/release-date/",
        },
        {
          title: "Steam page",
          summary: "Canonical anchor for every Nightwater fact.",
          href: "/steam-page/",
        },
      ],
    },
    {
      id: "hardware-access",
      type: "entity-grid",
      heading: "Hardware & access",
      items: [
        {
          title: "System requirements",
          summary: "Minimum and recommended Windows PC specs.",
          href: "/system-requirements/",
        },
        {
          title: "Platforms",
          summary: "Windows + Steam storefront, console status not announced.",
          href: "/platforms/",
        },
        {
          title: "Price & editions",
          summary: "Price, edition structure and demo status (not announced).",
          href: "/price-and-editions/",
        },
      ],
    },
    {
      id: "gameplay-reference",
      type: "entity-grid",
      heading: "Gameplay & reference",
      items: [
        {
          title: "Gameplay",
          summary: "Four eras, the Manifestor, and the lighthouse endings.",
          href: "/gameplay/",
        },
        {
          title: "Technology eras",
          summary: "Era order, role, and the lighthouse culmination.",
          href: "/technology-eras/",
        },
        {
          title: "FAQ",
          summary: "Launch-window questions answered with dated sources.",
          href: "/faq/",
        },
      ],
    },
    {
      id: "updates",
      type: "entity-grid",
      heading: "Updates",
      items: [
        {
          title: "News",
          summary: "Official Steam news index for AppID 3983860.",
          href: "/news/",
        },
      ],
    },
  ],
  faqIds: [
    "when-does-nightwater-release",
    "is-nightwater-multiplayer",
    "what-platforms-is-nightwater-on",
    "is-there-a-nightwater-demo",
    "how-much-does-nightwater-cost",
  ],
  relatedPageIds: [
    "fixed-overview-en-US",
    "fixed-release-date-en-US",
    "fixed-gameplay-en-US",
    "fixed-technology-eras-en-US",
    "fixed-system-requirements-en-US",
    "fixed-steam-page-en-US",
  ],
  schemaTypes: ["WebSite", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-09-16",
};