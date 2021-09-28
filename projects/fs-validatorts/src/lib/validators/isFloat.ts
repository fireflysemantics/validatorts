import { assertString } from '../util/assertString';
import { decimal } from './alpha';

/**
 * Checks whether the `target` string is a float
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` is is a float, false otherwise
 */
export function isFloat(str: string, options?:any) {
  assertString(str);
  options = options || {};
  const float = new RegExp(`^(?:[-+])?(?:[0-9]+)?(?:\\${options.locale ? decimal[options.locale] : '.'}[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$`);
  if (str === '' || str === '.' || str === '-' || str === '+') {
    return false;
  }
  const value = parseFloat(str.replace(',', '.'));
  return float.test(str) &&
    (!options.hasOwnProperty('min') || value >= options.min) &&
    (!options.hasOwnProperty('max') || value <= options.max) &&
    (!options.hasOwnProperty('lt') || value < options.lt) &&
    (!options.hasOwnProperty('gt') || value > options.gt);
}

export const floatLocales = Object.keys(decimal);
