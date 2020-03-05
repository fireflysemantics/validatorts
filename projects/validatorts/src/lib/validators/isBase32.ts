import { assertString } from '../util/assertString';

const base32 = /^[A-Z2-7]+=*$/;

/**
 * Checks whether the `target` is base32 encoded
 * 
 * @param target The target string
 * @return true if the `target` is base32 encoded, false otherwise
 */
export function isBase32(str: string) {
  assertString(str);
  const len = str.length;
  if (len > 0 && len % 8 === 0 && base32.test(str)) {
    return true;
  }
  return false;
}
