import { assertString } from '../util/assertString';

const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
const numericNoSymbols = /^[0-9]+$/;

/**
 * Checks whether the `target` string contains only numbers
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` contains only numbers, false otherwise
 */
export function isNumeric(str, options) {
  assertString(str);
  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }
  return numeric.test(str);
}
