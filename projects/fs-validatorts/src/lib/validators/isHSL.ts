import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsHSLErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_HSL_ERRORS: IsHSLErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};


const hslcomma = /^(hsl)a?\(\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn|\s*)(\s*,\s*(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s*(,\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s*)?\)$/i;
const hslspace = /^(hsl)a?\(\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn|\s)(\s*(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s*(\/\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s*)?\)$/i;

/**
 * Tests whether the `target` is HSL color
 *    
 * ### Example
 * ```
 * expect(isHSL('hsL(0, 0%, 0%)').value).toBeTruthy()
 * ```
 * @param target The target string
 */
export function isHSL(target: string):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_HSL_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(hslcomma.test(target) || hslspace.test(target));
}
