import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';
import { decimal } from './alpha';

export interface IsNumericErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_NUMERIC_ERRORS: IsNumericErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const numericNoSymbols = /^[0-9]+$/;

/**
 * Checks whether the `target` string contains only numbers
 *    
 * ### Example
 * ```
 * expect(isNumeric('123').value).toBeTruthy()
 * ```
 * @param target The target
 * @param options The options
 */
export function isNumeric(target:string, options?:any):Result<boolean|undefined>  {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_NUMERIC_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }

  if (options && options.no_symbols) {
    return new Result(numericNoSymbols.test(target));
  }
  return new Result((new RegExp(`^[+-]?([0-9]*[${(options || {}).locale ? decimal[options.locale] : '.'}])?[0-9]+$`)).test(target));
}
