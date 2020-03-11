import { assertString } from '../util/assertString';

let charsetRegex = /^[^-_](?!.*?[-_]{2,})([a-z0-9\\-]{1,}).*[^-_]$/;

/**
 * Check if `target` is a valid slug
 *
 * @param target The target
 * @return true if the `target` is a valid slug, false otherwise
 */
export function isSlug(target:string) {
  assertString(target);
  return (charsetRegex.test(target));
}
