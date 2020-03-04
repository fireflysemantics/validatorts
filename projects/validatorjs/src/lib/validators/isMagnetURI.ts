import { assertString } from '../util/assertString';

const magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

/**
 * Checks whether the `target` string is a valid Magnet URI
 * 
 * @param target The target string
 * @return true if the `target` is a valid Magnet URI, false otherwise
 */
export function isMagnetURI(target:string) {
  assertString(target);
  return magnetURI.test(target.trim());
}
