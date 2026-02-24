/**
 * Server-side utility to extract the og:image (or twitter:image) meta tag
 * from a URL. Used to auto-populate article thumbnails when none is uploaded.
 */
export async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
    });

    clearTimeout(timeout);
    if (!res.ok) return null;

    const html = await res.text();

    // og:image (property or name variant)
    const patterns = [
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
      /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i,
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) {
        const img = match[1];
        // Resolve relative URLs
        if (img.startsWith("http")) return img;
        const base = new URL(url);
        return new URL(img, base.origin).href;
      }
    }

    return null;
  } catch {
    return null;
  }
}
