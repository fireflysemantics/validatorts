import { assertString } from '../util/assertString';

const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

/**
 * Checks whether the `target` is hexcolor
 * 
 * @param target The target string
 * @return true if the `target` is hexcolor, false otherwise
 */
export function isHexColor(str) {
  assertString(str);
  return hexcolor.test(str);
}
