import { decimal } from './alpha';

import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsFloatErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_FLOAT_ERRORS: IsFloatErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Tests whether the `target` string is a float
 * 
 * @param target The target string
 * @param options The options
 * ### Example
 * ```
 * expect(isFloat('123.123').value).toBeTruthy()
 * ```
 */
export function isFloat(target: string, options?:any):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_FLOAT_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  options = options || {};
  const float = new RegExp(`^(?:[-+])?(?:[0-9]+)?(?:\\${options.locale ? decimal[options.locale] : '.'}[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$`);
  if (target === '' || target === '.' || target === '-' || target === '+') {
    return new Result(false);
  }
  const value = parseFloat(target.replace(',', '.'));
  return new Result(float.test(target) &&
    (!options.hasOwnProperty('min') || value >= options.min) &&
    (!options.hasOwnProperty('max') || value <= options.max) &&
    (!options.hasOwnProperty('lt') || value < options.lt) &&
    (!options.hasOwnProperty('gt') || value > options.gt));
}
export const floatLocales = Object.keys(decimal);
