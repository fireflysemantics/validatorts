import { assertString } from '../util/assertString';


/**
 * Check if `target` is uppercase
 *
 * @param target The target
 * @return true if the `target` is uppercase, false otherwise
 */
export function isUppercase(target:string) {
  assertString(target);
  return target === target.toUpperCase();
}
