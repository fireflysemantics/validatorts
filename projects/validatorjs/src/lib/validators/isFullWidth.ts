import { assertString } from '../util/assertString';

export const fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

/**
 * Checks whether the `target` is full width
 * 
 * @param target The target string
 * @return true if the `target` is full width, false otherwise
 */
export function isFullWidth(str: string) {
  assertString(str);
  return fullWidth.test(str);
}
