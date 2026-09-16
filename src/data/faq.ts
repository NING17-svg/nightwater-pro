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
      "Not announced as of 2026-09-16. The official Steam page lists September 18, 2026 as the launch date but does not list a specific hour-of-release or regional unlock window.",
    pageIds: ["fixed-release-date-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-i-preorder-nightwater",
    question: "Can I preorder Nightwater?",
    answer:
      "Not announced as of 2026-09-16. The Steam page does not currently show a preorder option or preorder bonus. Wishlist on Steam to be notified when a price or preorder appears.",
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
      "Not announced as of 2026-09-16. The official Steam page does not list a price, currency, or regional price tier for Nightwater. Add the game to your Steam Wishlist to be notified when a price is added.",
    pageIds: ["home", "fixed-release-date-en-US", "fixed-price-and-editions-en-US", "fixed-faq-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-editions-of-nightwater-exist",
    question: "What editions of Nightwater will be available?",
    answer:
      "Not announced as of 2026-09-16. The Steam page does not enumerate any edition structure. Whether the launch will offer a Standard edition only, a Deluxe edition, or any bundle is not yet known.",
    pageIds: ["fixed-price-and-editions-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-there-a-nightwater-demo",
    question: "Is there a Nightwater demo?",
    answer:
      "Not announced as of 2026-09-16. The official Steam page does not list a demo, public playtest, or limited beta for Nightwater.",
    pageIds: ["home", "fixed-price-and-editions-en-US", "fixed-faq-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Platforms
  {
    id: "what-platforms-is-nightwater-on",
    question: "What platforms will Nightwater be on?",
    answer:
      "Windows PC and Steam are the only confirmed Nightwater platforms as of 2026-09-16. Console editions, macOS support, Linux ports, and Steam Deck verified status are not announced.",
    pageIds: ["home", "fixed-platforms-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-on-console",
    question: "Is Nightwater coming to consoles?",
    answer:
      "Not announced as of 2026-09-16. There is no Xbox, PlayStation, or Nintendo Switch listing for Nightwater at the time of writing.",
    pageIds: ["fixed-platforms-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-on-steam-deck",
    question: "Is Nightwater Steam Deck verified?",
    answer:
      "Not announced as of 2026-09-16. The Steam Deck verified status is not yet listed on the official Steam store page.",
    pageIds: ["fixed-platforms-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-on-mac",
    question: "Is Nightwater on macOS?",
    answer:
      "Not announced as of 2026-09-16. The official Steam store page lists Windows as the only supported operating system. There is no separate macOS announcement from Studio Ashty.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-on-linux",
    question: "Is Nightwater on Linux?",
    answer:
      "Not announced as of 2026-09-16. The official Steam store page does not list Linux as a supported platform.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-nightwater-steam-deck-verified",
    question: "Will Nightwater be Steam Deck verified?",
    answer:
      "Not announced as of 2026-09-16. Steam Deck verified status will appear on the official Steam page once confirmed.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-pc-specs-for-nightwater",
    question: "What PC specs do I need to run Nightwater?",
    answer:
      "The official Steam store page lists minimum and recommended Windows specifications. Use the System Requirements block on the Steam page to size a launch-day PC. macOS, Linux, and Steam Deck verified status are not announced.",
    pageIds: ["fixed-system-requirements-en-US", "fixed-faq-en-US"],
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
    pageIds: ["fixed-gameplay-en-US"],
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
      "Multiplayer support is not announced as of 2026-09-16. The official Steam page describes a single-player factory and automation campaign.",
    pageIds: ["home", "fixed-faq-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-languages-does-nightwater-support",
    question: "What languages does Nightwater support?",
    answer:
      "The Steam page lists supported interface, audio, and subtitle languages on its right rail. The specific language rows are not enumerated on the canonical store snapshot on 2026-09-16, so re-check the official Steam page for the live list.",
    pageIds: ["fixed-faq-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-big-is-nightwater",
    question: "How big is Nightwater (download size)?",
    answer:
      "Download size is not listed on the Steam page snapshot on 2026-09-16. The Steam page's storage row in the System Requirements block is the source of truth once populated.",
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