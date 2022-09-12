/**
 * Extract the path from the URL.
 *
 * @param url The URL to extract the path from
 */
 export function urlPath(url: string): string {
    return url.match(/.*?(?=[?;#]|$)/)![0];
}