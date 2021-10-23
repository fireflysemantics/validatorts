import { StringKeyNumber } from '../types';
import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsUppercaseErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_UPPERCASE_ERRORS: IsUppercaseErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};


/**
 * Check if `target` is uppercase
 *
 * @param target The target
 * @return true if the `target` is uppercase, false otherwise
 */
export function isUppercase(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_UPPERCASE_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(target === target.toUpperCase());
}
