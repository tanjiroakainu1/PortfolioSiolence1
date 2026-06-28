/** Normalize Vercel/live URLs for consistent comparison. */
export function normalizeProjectHref(href: string): string {
  try {
    const u = new URL(href);
    const path = u.pathname.replace(/\/$/, "") || "";
    return `${u.origin}${path}`;
  } catch {
    return href.replace(/\/$/, "");
  }
}

/** Reserved for optional remote previews — portfolio cards use local placeholders for speed. */
export function projectPreviewUrl(href: string): string {
  return `https://image.thum.io/get/width/900/noanimate/${href}`;
}

export function projectHost(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}
