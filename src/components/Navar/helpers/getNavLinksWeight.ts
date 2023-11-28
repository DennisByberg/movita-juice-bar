export function getNavLinksWeight(href: string): string {
  return location.pathname === href ? 'bold' : '';
}
