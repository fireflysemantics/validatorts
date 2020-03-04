import { assertString } from '../util/assertString';
import { alpha } from './alpha';

/**
 * Checks whether `arg` is in alpha and if so validates whether
 * the `target` string conforms to the `arg` locale.
 * 
 * @param target The target string to compare to
 * @param arg The argument that might equal the target 
 * @return true if the `target` date comes after the `arg` date, false otherwise
 */
export function isAlpha(target: string, arg: string = 'en-US') {
  assertString(target);
  if (arg in alpha) {
    return alpha[arg].test(target);
  }
  throw new Error(`Invalid locale '${arg}'`);
}

/**
 * The alpha locales
 */
export const isAlphaLocales = Object.keys(alpha);