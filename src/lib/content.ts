import type { FAQItem, PageContent, RouteKind } from "@/types/content";
import { entityFamilies } from "@/data/entities";
import { faqItems } from "@/data/faq";
import { fixedPages } from "@/data/pages/fixed-pages";
import { homePage } from "@/data/pages/home";
import { sitePages } from "@/data/pages/site-pages";
import { buildEntityPages } from "@/lib/entities";
import { normalizePath } from "@/lib/localization";

const allFixedPages: PageContent[] = [
  homePage,
  ...fixedPages,
  ...sitePages,
];

const pages: PageContent[] = [
  ...allFixedPages,
  ...buildEntityPages(entityFamilies),
];

// Fixture pages live behind URLs that start with `/_`. They exist so that
// validate-template-contract.ts can render PageHero and search-index fixtures
// for review-date and multilingual checks, but they are excluded from the
// indexable page set so they do not appear in the sitemap, the homepage
// "recent updates" list, or the public search index.
function isFixturePage(page: PageContent): boolean {
  return page.url.startsWith("/_");
}

export interface FinalRouteManifestEntry {
  id: string;
  translationKey: string;
  locale: string;
  routeKind: RouteKind;
  url: string;
  alternates: Record<string, string>;
}

export function getAllPages(): PageContent[] {
  return pages;
}

export function getIndexablePages(): PageContent[] {
  return pages.filter((page) => !isFixturePage(page));
}

export function getPageByUrl(url: string): PageContent | undefined {
  const normalized = normalizePath(url);
  return pages.find((page) => page.url === normalized);
}

export function getPageBySlug(slug: string): PageContent | undefined {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, "");
  return pages.find((page) => page.slug === normalizedSlug);
}

export function getPageById(id: string): PageContent | undefined {
  return pages.find((page) => page.id === id);
}

export function getLanguageAlternates(
  page: PageContent,
  sourcePages: PageContent[] = pages,
): Record<string, string> {
  return Object.fromEntries(
    sourcePages
      .filter((candidate) => candidate.translationKey === page.translationKey)
      .map((candidate) => [candidate.locale, candidate.url]),
  );
}

export function getFinalRouteManifest(
  sourcePages: PageContent[] = pages,
): FinalRouteManifestEntry[] {
  return sourcePages
    .filter((page) => !isFixturePage(page))
    .map((page) => ({
      id: page.id,
      translationKey: page.translationKey,
      locale: page.locale,
      routeKind: page.routeKind,
      url: page.url,
      alternates: getLanguageAlternates(page, sourcePages),
    }))
    .sort((left, right) => left.url.localeCompare(right.url));
}

export function getFaqsForPage(page: PageContent): FAQItem[] {
  return page.faqIds
    .map((id) => faqItems.find((faq) => faq.id === id))
    .filter((faq): faq is FAQItem => Boolean(faq));
}

export function getRelatedPages(page: PageContent): PageContent[] {
  return page.relatedPageIds
    .map((id) => getPageById(id))
    .filter((related): related is PageContent => Boolean(related));
}

function compareUrls(left: PageContent, right: PageContent): number {
  if (left.url === right.url) return 0;
  return left.url < right.url ? -1 : 1;
}

/**
 * Returns a small, deterministic set of content pages for a locale's homepage.
 * Trust pages and tools are intentionally excluded so this is driven only by
 * editorial review dates on actual indexable content pages.
 */
export function getRecentUpdates(
  locale: string,
  limit = 5,
  sourcePages: PageContent[] = getIndexablePages(),
): PageContent[] {
  if (limit <= 0) return [];

  return sourcePages
    .filter(
      (page) =>
        page.locale === locale &&
        page.pageType !== "home" &&
        page.pageType !== "faq" &&
        page.pageType !== "site" &&
        page.routeKind !== "tool",
    )
    .sort((left, right) => {
      if (left.lastReviewed !== right.lastReviewed) {
        return left.lastReviewed < right.lastReviewed ? 1 : -1;
      }
      return compareUrls(left, right);
    })
    .slice(0, limit);
}