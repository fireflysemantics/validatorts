import { assertString } from '../util/assertString';

const octal = /^(0o)?[0-7]+$/i;

/**
 * Checks whether the `target` string is a valid Octal number
 * 
 * @param target The target string
 * @return true if the `target` is a valid Octal number, false otherwise
 */
export function isOctal(target:string) {
  assertString(target);
  return octal.test(target);
}
