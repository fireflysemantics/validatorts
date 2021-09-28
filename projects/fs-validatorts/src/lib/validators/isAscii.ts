import { assertString } from '../util/assertString';

/* eslint-disable no-control-regex */
const ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

/**
 * Checks whether the `target` conforms to the ascii standard
 * 
 * @param target The target string
 * @return true if the `target` conforms to the ascii standard, false otherwise
 */
export function isAscii(target: string) {
  assertString(target);
  return ascii.test(target);
}