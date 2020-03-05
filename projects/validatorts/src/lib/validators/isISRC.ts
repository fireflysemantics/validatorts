import { assertString } from '../util/assertString';

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
const isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;


/**
 * Checks whether the `target` string is a valid ISRC
 * 
 * @param target The target string
 * @return true if the `target` is a valid ISRC, false otherwise
 */
export function isISRC(target:string) {
  assertString(target);
  return isrc.test(target);
}
