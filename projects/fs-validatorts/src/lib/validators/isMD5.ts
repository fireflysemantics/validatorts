import { assertString } from '../util/assertString';

const md5 = /^[a-f0-9]{32}$/;

/**
 * Checks whether the `target` string is a valid MD5 checksum
 * 
 * @param target The target string
 * @return true if the `target` is a valid MD5 checksum, false otherwise
 */
export function isMD5(target:string) {
  assertString(target);
  return md5.test(target);
}
