import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const RESEARCH_DATE = "2026-09-16";

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About Nightwater Reference: an unofficial fan-built launch hub sourced from the official Steam store page on the research date.",
    summary:
      "What Nightwater Reference covers, how facts are sourced, and what readers should expect.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Nightwater Reference is an unofficial fan-built launch hub for Nightwater (Steam AppID 3983860) sourced from the official Steam store page and Steam-published news on 2026-09-16.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      "Nightwater Reference is an unofficial fan-built launch hub for Nightwater (Steam AppID 3983860). Every fact is dated to 2026-09-16, sourced from the official Steam store page or Steam-published news, and re-verified against the live store at the research date.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Research date", value: RESEARCH_DATE },
      { label: "Source rule", value: "Steam store page + Steam-published news" },
      { label: "Canonical anchor", value: "https://store.steampowered.com/app/3983860" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help English-language launch-window readers decide whether Nightwater is for them, when and where to play it on PC Steam, and what the four-era factory loop and lighthouse endings add up to. The hub covers identity, release date, system requirements, platforms, price, gameplay loop, official Steam news, and FAQ — all anchored to the official Steam store page for AppID 3983860.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Use only the official Steam store page for AppID 3983860 and Steam-published news (https://store.steampowered.com/news/app/3983860) to set current-game hard facts (release date, developer, publisher, genre, system requirements, platforms, era names, Manifestor, lighthouse endings). Any unannounced item (price, hour-of-release, edition structure, demo, multiplayer, macOS, Linux, Steam Deck verified status) is written as a dated not-announced statement rather than as a placeholder or TBD.",
      },
      {
        id: "editorial",
        type: "prose",
        heading: "Editorial rules",
        body:
          "All facts are dated to the research date 2026-09-16. No speculation, no third-party recap posts, no copy from other fan sites. The site never uses the Studio Ashty wordmark or the Irox Games marks; brand presentation relies on the text brand mark and the approved dark theme palette only.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact Nightwater Reference for corrections, official source links, and editorial feedback.",
    summary:
      "How to send corrections, official source links, and editorial feedback to the Nightwater Reference.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections, official source links, and editorial feedback to the maintainers of Nightwater Reference.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Email support@nightwater.pro for corrections, source links, or editorial feedback. Include the official source URL and the page that needs to be updated.",
    keyFacts: [
      { label: "Email", value: "support@nightwater.pro" },
      { label: "Primary use", value: "Corrections and source links" },
      { label: "Response window", value: "Best-effort, no SLA" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Email",
        body:
          "Email support@nightwater.pro for corrections, source links, or editorial feedback. The address is also published as a Cloudflare Email Routing forwarder under the same domain.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "If a fact on this site differs from the official Steam store page or Steam-published news, send the correct source URL plus the page URL on this site that needs to be updated. Corrections are reviewed and applied before the next research pass.",
      },
      {
        id: "sources",
        type: "prose",
        heading: "Sources we accept",
        body:
          "Official Steam store page for AppID 3983860, Steam-published news for AppID 3983860, and any first-party Studio Ashty or Irox Games announcement referenced from the Steam news index. Third-party outlets, fan wikis, and recap posts are not accepted as primary sources.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy policy",
    seoTitle: `Privacy policy | ${site.name}`,
    metaDescription:
      "Privacy policy for Nightwater Reference: what data is collected, how it is used, and how third-party services are configured.",
    summary:
      "What data Nightwater Reference collects, what third-party services run on the site, and how to contact the maintainers about privacy questions.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Nightwater Reference is a static-content launch hub. The only third-party data flows are the analytics and search-engine integrations documented below.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      "Nightwater Reference does not require a login, does not store personal profiles, and does not sell user data. Third-party services that may set cookies or collect anonymous traffic are Google Analytics 4 and the Bing Webmaster Tools verification tag, both used only to measure launch-window traffic and confirm site ownership.",
    keyFacts: [
      { label: "Accounts", value: "No accounts, no logins" },
      { label: "Analytics", value: "Google Analytics 4 (anonymized)" },
      { label: "Search verification", value: "Bing Webmaster Tools msvalidate tag" },
      { label: "Data sales", value: "None" },
    ],
    modules: [
      {
        id: "what-we-collect",
        type: "prose",
        heading: "What we collect",
        body:
          "When you load Nightwater Reference, the site serves static HTML and assets from Cloudflare. The only third-party services that may set cookies or collect anonymous traffic are Google Analytics 4 (used to measure page views, traffic sources, and engagement at launch) and the Bing Webmaster Tools verification tag (used only to confirm site ownership with Bing).",
      },
      {
        id: "what-we-do-not-collect",
        type: "prose",
        heading: "What we do not collect",
        body:
          "We do not require an account. We do not store your email, profile, or in-site actions. We do not place advertising trackers or sell personal data. The site does not run a comments section, a forum, or any user-generated content feature.",
      },
      {
        id: "third-party-services",
        type: "prose",
        heading: "Third-party services",
        body:
          "Google Analytics 4 is used under the standard anonymized IP and cookie-less mode configuration published by Google. The Bing Webmaster Tools msvalidate tag is a meta-tag verification marker only; it does not set cookies or collect user data on its own. Cloudflare Email Routing is used only to forward support@nightwater.pro to the maintainers' verified mailbox; the routing configuration does not log message contents.",
      },
      {
        id: "contact-privacy",
        type: "prose",
        heading: "Privacy questions",
        body:
          "Send privacy questions or requests to support@nightwater.pro. The maintainers review each request and respond within the best-effort window declared on the contact page.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of use",
    seoTitle: `Terms of use | ${site.name}`,
    metaDescription:
      "Terms of use for Nightwater Reference: editorial scope, source attribution, intellectual property, and disclaimer.",
    summary:
      "Editorial scope, source attribution rules, intellectual property, and disclaimer for Nightwater Reference.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Nightwater Reference is an unofficial fan-built hub. Editorial scope, source attribution, and intellectual property are documented below.",
      ctas: [{ label: "Privacy policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "Nightwater Reference is an unofficial fan-built hub. All current-game facts are sourced from the official Steam store page for AppID 3983860 and Steam-published news. The site is provided as-is, without warranty, and is not affiliated with Studio Ashty or Irox Games.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Source rule", value: "Steam store page + Steam-published news" },
      { label: "Affiliation", value: "Not affiliated with Studio Ashty or Irox Games" },
    ],
    modules: [
      {
        id: "editorial-scope",
        type: "prose",
        heading: "Editorial scope",
        body:
          "Nightwater Reference covers the launch-window facts that English-language readers are most likely to search: identity, release date, system requirements, platforms, gameplay loop, price, official Steam news, and a launch-window FAQ. Everything on the site is dated to the research date 2026-09-16 unless an update is signed and noted.",
      },
      {
        id: "source-attribution",
        type: "prose",
        heading: "Source attribution",
        body:
          "Every fact on this site is attributed to the official Steam store page (https://store.steampowered.com/app/3983860) or the Steam news index (https://store.steampowered.com/news/app/3983860). Where a community/video source is used only to corroborate a mechanism name already on the Steam page, the corroboration is disclosed in the page's sources block.",
      },
      {
        id: "intellectual-property",
        type: "prose",
        heading: "Intellectual property",
        body:
          "Studio Ashty, Irox Games, and Nightwater are the property of their respective owners. This site is not endorsed by or affiliated with Studio Ashty or Irox Games. Use of the Nightwater name on this site is for editorial reference only and does not imply endorsement or partnership.",
      },
      {
        id: "disclaimer",
        type: "prose",
        heading: "Disclaimer",
        body:
          "The site is provided as-is, without warranty of any kind. Facts are sourced from the official Steam store page at the research date and may change after publication. Always re-check the official Steam store page before acting on any launch-day detail.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
];