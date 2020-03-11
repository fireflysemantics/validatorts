import { assertString } from '../util/assertString';
import { alphanumeric } from './alpha';

/**
 * Checks whether `arg` is in alphanumeric and if so validates whether
 * the `target` string conforms to the `arg` locale.
 * 
 * @param target The target string
 * @param arg The locale (Defaults to 'en-US') 
 * @return true if the `target` string conforms to the `arg` locale, false otherwise
 */
export function isAlphaNumeric(target: string, arg: string = 'en-US') {
  assertString(target);
  if (arg in alphanumeric) {
    return alphanumeric[arg].test(target);
  }
  throw new Error(`Invalid locale '${arg}'`);
}

/**
 * The alpha numeric locales
 */
export const isAlphaNumericLocales = Object.keys(alphanumeric);