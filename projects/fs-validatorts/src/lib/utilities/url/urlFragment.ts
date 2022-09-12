/**
 * Extract the url fragment from the URL.
 *
 * @param url The URL to extract the fragment from
 */
 export function urlFragment(url: string): string {
    const matched = url.match(/#(.+)/);
    return matched ? matched[1] : '';
}