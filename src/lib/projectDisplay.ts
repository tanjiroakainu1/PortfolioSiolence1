export function projectPreviewUrl(href: string): string {
  return `https://image.thum.io/get/width/1280/noanimate/${href}`;
}

export function projectHost(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}
