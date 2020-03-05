import { assertString } from '../util/assertString';

/**
 * Checks whether the `target` is a boolean value
 * meaning it contains of of `['true', 'false', '1', '0']` 
 * 
 * @param target The target string
 * @return true if the `target` is a boolean value, false otherwise
 */
export function isBoolean(str: string) {
  assertString(str);
  return (['true', 'false', '1', '0'].indexOf(str) >= 0);
}
