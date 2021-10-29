import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsHexadecimalErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_HEXADECIMAL_ERRORS: IsHexadecimalErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

/**
 * Tests whether the `target` is hexadecimal
 *    
 * ### Example
 * ```
 * expect(isHexadecimal('deadBEEF').value).toBeTruthy()
 * ```
 * @param target The target string
 */
export function isHexadecimal(target: string):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_HEXADECIMAL_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(hexadecimal.test(target));
}
