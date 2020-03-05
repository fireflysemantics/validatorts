import { assertString } from '../util/assertString';

const hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

/**
 * Checks whether the `target` is hexadecimal
 * 
 * @param target The target string
 * @return true if the `target` is hexadecimal, false otherwise
 */
export function isHexadecimal(str: string) {
  assertString(str);
  return hexadecimal.test(str);
}
