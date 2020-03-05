import { assertString } from '../util/assertString';

/**
 * Check whether the target matches the pattern
 * @param target The target
 * @param pattern The RegExp
 * @param modifiers The optional modifier
 * @return true if the target matches, false otherwise
 */
export function matches(target:string, pattern:RegExp, modifiers?:string) {
  assertString(target);
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(target);
}
