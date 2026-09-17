import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Launch & release
  {
    id: "when-does-nightwater-release",
    question: "When does Nightwater release?",
    answer:
      "Nightwater releases on September 18, 2026 on Steam, per the official Steam store page for AppID 3983860. The release date was verified on 2026-09-16.",
    pageIds: ["home", "fixed-release-date-en-US", "fixed-faq-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-time-does-nightwater-unlock",
    question: "What time does Nightwater unlock on launch day?",
    answer:
      "Nightwater unlocks on September 18, 2026 at 08:00 PDT / 11:00 EDT / 16:00 BST / 17:00 CEST / 00:00 JST (Sep 19) — all the same 15:00 UTC instant, per the official Steam Community announcement for AppID 3983860. See the release-date page for the regional unlock table.",
    pageIds: ["fixed-release-date-en-US", "fixed-faq-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-i-preorder-nightwater",
    question: "Can I preorder Nightwater?",
    answer:
      "Not announced as of 2026-09-18. The Steam page does not currently show a preorder option or preorder bonus. Wishlist on Steam to be notified when a price or preorder appears.",
    pageIds: ["fixed-release-date-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Price & editions
  {
    id: "how-much-does-nightwater-cost",
    question: "How much does Nightwater cost?",
    answer:
      "Not announced as of 2026-09-18. The official Steam page does not list a price, currency, or regional price tier for Nightwater. Add the game to your Steam Wishlist to be notified when a price is added.",
    pageIds: ["home", "fixed-release-date-en-US", "fixed-price-and-editions-en-US", "fixed-faq-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-editions-of-nightwater-exist",
    question: "What editions of Nightwater will be available?",
    answer:
      "Not announced as of 2026-09-18. The Steam page does not enumerate any edition structure. Whether the launch will offer a Standard edition only, a Deluxe edition, or any bundle is not yet known.",
    pageIds: ["fixed-price-and-editions-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-there-a-nightwater-demo",
    question: "Is there a Nightwater demo?",
    answer:
      "Yes. The Nightwater Demo is available on Steam as a separate depot under AppID 4576520. Add it to your library from the demo store page; it downloads through the Steam client. Demo progress does not carry over to the full game.",
    pageIds: ["home", "fixed-price-and-editions-en-US", "fixed-faq-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-do-i-download-the-nightwater-demo",
    question: "Where do I download the Nightwater demo?",
    answer:
      "Open the Nightwater Demo store page on Steam (AppID 4576520), click 'Add to Library', and accept the Steam client install prompt. The demo then appears under your Steam library and downloads to your default Steam library folder.",
    pageIds: ["fixed-price-and-editions-en-US", "fixed-faq-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Platforms
  {
    id: "what-platforms-is-nightwater-on",
    question: "What platforms will Nightwater be on?",
    answer:
      "Windows PC and Steam are the only confirmed Nightwater platforms as of 2026-09-18. Console editions, macOS support, Linux ports, and Steam Deck verified status are not announced.",
    pageIds: ["home", "fixed-platforms-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-on-console",
    question: "Is Nightwater coming to consoles?",
    answer:
      "Not announced as of 2026-09-18. There is no Xbox, PlayStation, or Nintendo Switch listing for Nightwater at the time of writing.",
    pageIds: ["fixed-platforms-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-on-steam-deck",
    question: "Is Nightwater Steam Deck verified?",
    answer:
      "Not announced as of 2026-09-18. The Steam Deck verified status is not yet listed on the official Steam store page.",
    pageIds: ["fixed-platforms-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-on-mac",
    question: "Is Nightwater on macOS?",
    answer:
      "Not announced as of 2026-09-18. The official Steam store page lists Windows as the only supported operating system. There is no separate macOS announcement from Studio Ashty.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-on-linux",
    question: "Is Nightwater on Linux?",
    answer:
      "Not announced as of 2026-09-18. The official Steam store page does not list Linux as a supported platform.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-steam-deck-verified",
    question: "Will Nightwater be Steam Deck verified?",
    answer:
      "Not announced as of 2026-09-18. Steam Deck verified status will appear on the official Steam page once confirmed.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-pc-specs-for-nightwater",
    question: "What PC specs do I need to run Nightwater?",
    answer:
      "Minimum: Windows 10 64-bit, i5-3570 @ 3.4 GHz 4-core, 8 GB RAM, GTX 1650 / GTX 1050 Ti or RX 470 / RX 570, 10 GB storage. Recommended: Windows 11 64-bit, Ryzen 5 5600X or i5-12400 6-core, 12 GB RAM, RTX 2070 or RX 5700, 10 GB storage. Both tiers require a 64-bit processor and operating system. macOS, Linux, and Steam Deck verified status are not announced.",
    pageIds: ["fixed-system-requirements-en-US", "fixed-faq-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-steam-features-does-nightwater-have",
    question: "What Steam Features does Nightwater have at launch?",
    answer:
      "The Steam store page for Nightwater lists four Steam Features: Single-player (the campaign is single-player only), Steam Achievements (progress-based achievements tracked on your Steam profile), Steam Cloud (saves sync between any PC or Steam Deck signed into your Steam account), and Family Sharing (an authorized Steam Family Library member can launch your copy from their own account).",
    pageIds: ["fixed-platforms-en-US", "fixed-faq-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Gameplay
  {
    id: "how-does-nightwater-play",
    question: "How does Nightwater play?",
    answer:
      "Nightwater is a factory and automation game set on a nighttime island. Players gather resources, build production chains across four technology eras, expand the island biome-by-biome through the Manifestor, and pursue the lighthouse endings.",
    pageIds: ["fixed-gameplay-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-are-the-tech-eras",
    question: "What are the technology eras in Nightwater?",
    answer:
      "The four technology eras listed on the Steam page are Sticks & Stones, Bronze, Industrial, and Future. Each era expands the production chain capabilities available to the player.",
    pageIds: ["fixed-gameplay-en-US", "fixed-technology-eras-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-is-the-manifestor",
    question: "What is the Manifestor in Nightwater?",
    answer:
      "The Manifestor is the central tool the player uses to clear fog and expand the island biome by biome. Each biome reveals new resources that feed back into the factory and drive the lighthouse narrative forward.",
    pageIds: ["fixed-gameplay-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-do-lighthouse-endings-work",
    question: "How do the lighthouse endings work?",
    answer:
      "The lighthouse is the narrative spine of Nightwater. Reaching it through different era and Manifestor choices drives a multi-ending narrative; the Steam page presents the lighthouse as the campaign endpoint, not a single fixed finale.",
    pageIds: ["fixed-gameplay-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Identity
  {
    id: "what-is-nightwater-game",
    question: "What is the Nightwater game?",
    answer:
      "Nightwater is a 2026 Steam factory and automation title developed by Studio Ashty and published by Studio Ashty and Irox Games. It launches on September 18, 2026 on Steam for Windows.",
    pageIds: ["fixed-overview-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "who-develops-nightwater",
    question: "Who develops Nightwater?",
    answer:
      "Studio Ashty is the developer of Nightwater. The Steam page lists Studio Ashty and Irox Games as publishers.",
    pageIds: ["fixed-overview-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-genre-is-nightwater",
    question: "What genre is Nightwater?",
    answer:
      "Nightwater is positioned inside the factory / automation / resource-progression space, set on a nighttime island with a single distant lighthouse and a multi-ending narrative.",
    pageIds: ["fixed-overview-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Multiplayer & language
  {
    id: "is-nightwater-multiplayer",
    question: "Is Nightwater multiplayer?",
    answer:
      "No. The Steam store page lists Single-player as one of Nightwater's Steam Features, so the campaign is single-player only. There is no co-op or multiplayer mode announced as of 2026-09-18.",
    pageIds: ["home", "fixed-platforms-en-US", "fixed-faq-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-languages-does-nightwater-support",
    question: "What languages does Nightwater support?",
    answer:
      "The Steam store page lists 13 languages, each with Interface, Full Audio, and Subtitles ticked: English, French, German, Spanish (Spain), Portuguese (Brazil), Simplified Chinese, Japanese, Korean, Russian, Bosnian, Portuguese (Portugal), Spanish (Latin America), and Traditional Chinese. Languages not on this list — including Italian, Arabic, Hindi, Vietnamese, Polish, and Turkish — are not currently supported on Steam.",
    pageIds: ["fixed-faq-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "which-languages-are-not-supported-on-nightwater",
    question: "Which languages are not supported on Nightwater?",
    answer:
      "Any language not on the Steam store page's 13-row supported languages list is not currently supported, including Italian, Arabic, Hindi, Vietnamese, Polish, Turkish, and most others. The Steam page is the source of truth; re-check the live page for the latest list.",
    pageIds: ["fixed-faq-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-big-is-nightwater",
    question: "How big is Nightwater (download size)?",
    answer:
      "The Steam page lists 10 GB available space on both the minimum and recommended rows in the System Requirements block. Plan for at least 10 GB free on your Steam library drive.",
    pageIds: ["fixed-faq-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Steam page
  {
    id: "where-is-the-nightwater-steam-page",
    question: "Where is the Nightwater Steam page?",
    answer:
      "The official Nightwater Steam page is at https://store.steampowered.com/app/3983860. The Steam news index is at https://store.steampowered.com/news/app/3983860.",
    pageIds: ["fixed-steam-page-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-on-steam",
    question: "Is Nightwater on Steam?",
    answer:
      "Yes. Nightwater is confirmed for Steam. The official store page is at https://store.steampowered.com/app/3983860 and the Steam news index is at https://store.steampowered.com/news/app/3983860.",
    pageIds: ["fixed-steam-page-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-to-find-nightwater-news",
    question: "Where can I read the latest Nightwater news?",
    answer:
      "Nightwater news is published on the official Steam news feed at https://store.steampowered.com/news/app/3983860. Third-party outlets are not used as primary sources on this site.",
    pageIds: ["fixed-news-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
];