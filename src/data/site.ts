import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Nightwater",
  brandMark: "NW",
  gameName: "Nightwater",
  domain: "nightwater.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://nightwater.pro").replace(/\/$/, ""),
  description:
    "Launch-window en-US reference for Nightwater (Steam AppID 3983860), Studio Ashty's upcoming 2026 Steam factory and automation title — release date, system requirements, platforms, gameplay loop, and the lighthouse endings.",
  tagline: "Nightwater launch-window reference: release date, system requirements, gameplay, and lighthouse endings.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Nightwater Reference",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Nightwater on Steam",
      href: "https://store.steampowered.com/app/3983860",
      description:
        "Official Steam store page for Nightwater (AppID 3983860) — release date, developer, publisher, genre, description, supported languages, minimum and recommended PC specs, and Steam features.",
    },
    {
      label: "Nightwater Steam news index",
      href: "https://store.steampowered.com/news/app/3983860",
      description:
        "Steam-published news feed for Nightwater — official developer announcements, dev logs, and patch notes.",
    },
  ],
  disclaimer:
    "Nightwater Reference is an unofficial fan-built launch hub sourced from the official Steam store page (AppID 3983860) on 2026-09-16. Unannounced details (hour-of-release, price, edition structure, demo, multiplayer, macOS, Linux, Steam Deck verified status) are flagged as not announced and will be updated when Studio Ashty posts them.",
};