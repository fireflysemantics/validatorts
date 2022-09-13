/**
 * Extract the url fragment from the URL.
 *
 * @param url The URL to extract the fragment from
 */
 export function urlFragment(url: string): string {
    const hash = new URL(url).hash;
    if (hash) {
      return new URL(url).hash.substring(1);
    }
    return hash;
}