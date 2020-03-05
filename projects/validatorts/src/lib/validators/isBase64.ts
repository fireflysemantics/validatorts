import { assertString } from '../util/assertString';

const notBase64 = /[^A-Z0-9+\/=]/i;

/**
 * Checks whether the `target` is base64 encoded
 * 
 * @param target The target string
 * @return true if the `target` is base64 encoded, false otherwise
 */
export function isBase64(str: string) {
  assertString(str);
  const len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  const firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 ||
    firstPaddingChar === len - 1 ||
    (firstPaddingChar === len - 2 && str[len - 1] === '=');
}
