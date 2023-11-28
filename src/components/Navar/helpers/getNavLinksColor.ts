export function getNavLinksColor(href: string): string {
  return location.pathname === href
    ? 'linkColor.active'
    : 'linkColor.notActive';
}
