import { assertString } from '../util/assertString';

/* eslint-disable no-control-regex */
const multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

/**
 * Checks whether the `target` string contains one or more multibyte characters
 * 
 * @param target The target string
 * @return true if the `target` contains one or more multibyte characters, false otherwise
 */
export function isMultibyte(target:string) {
  assertString(target);
  return multibyte.test(target);
}
