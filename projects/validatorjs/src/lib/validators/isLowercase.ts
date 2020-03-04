import { assertString } from '../util/assertString';

/**
 * Checks whether the `target` string is lowercase
 * 
 * @param target The target string
 * @return true if the `target` is lowercase, false otherwise
 */
export function isLowercase(target:string) {
  assertString(target);
  return target === target.toLowerCase();
}
