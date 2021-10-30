import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsOctalErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_OCTAL_ERRORS: IsOctalErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const octal = /^(0o)?[0-7]+$/i;

/**
 * Checks whether the `target` string is a valid Octal number
 * 
 * ### Example
 * ```
 * expectisOctal(('076543210').value).toBeTruthy()
 * ```
 * @param target The target string
 */
export function isOctal(target:string):Result<boolean|undefined>  {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_OCTAL_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(octal.test(target));
}
