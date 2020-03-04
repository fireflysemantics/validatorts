import { assertString } from '../util/assertString';

const surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

/**
 * Check if `target` is a valid surrogate pair
 *
 * @param target The target
 * @return true if the `target` a valid surrogate pair, false otherwise
 */
export function isSurrogatePair(target:string) {
  assertString(target);
  return surrogatePair.test(target);
}
