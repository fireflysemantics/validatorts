import { assertString } from '../util/assertString';

/**
 * Checks whether the `target` string is valid JSON
 * 
 * @param target The target string
 * @return true if the `target` is a valid ISSN, false otherwise
 */
export function isJSON(target:string) {
  assertString(target);
  try {
    const obj = JSON.parse(target);
    return !!obj && typeof obj === 'object';
  } catch (e) { /* ignore */ }
  return false;
}
