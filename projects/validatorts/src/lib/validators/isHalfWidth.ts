import { assertString } from '../util/assertString';

export const halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

/**
 * Checks whether the `target` is half width
 * 
 * @param target The target string
 * @return true if the `target` is half width, false otherwise
 */
export function isHalfWidth(str: string) {
  assertString(str);
  return halfWidth.test(str);
}
