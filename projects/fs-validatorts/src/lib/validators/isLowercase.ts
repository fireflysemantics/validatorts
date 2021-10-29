import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsLowercaseErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_LOWERCASE_ERRORS: IsLowercaseErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Checks whether the `target` string is lowercase
 *    
 * ### Example
 * ```
 * expect(isLowercase('abc').value).toBeTruthy()
 * ```
 * @param target The target string
 */
export function isLowercase(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_LOWERCASE_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(target === target.toLowerCase());
}
