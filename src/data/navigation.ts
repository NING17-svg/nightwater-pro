import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  // Identity & launch cluster
  { href: "/overview/", labels: { "en-US": "Overview" } },
  { href: "/release-date/", labels: { "en-US": "Release Date" } },
  { href: "/steam-page/", labels: { "en-US": "Steam Page" } },
  // Reference cluster
  { href: "/system-requirements/", labels: { "en-US": "System Requirements" } },
  { href: "/platforms/", labels: { "en-US": "Platforms" } },
  { href: "/price-and-editions/", labels: { "en-US": "Price & Editions" } },
  // Gameplay & content cluster
  { href: "/gameplay/", labels: { "en-US": "Gameplay" } },
  { href: "/faq/", labels: { "en-US": "FAQ" } },
  // Updates cluster
  { href: "/news/", labels: { "en-US": "News" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}