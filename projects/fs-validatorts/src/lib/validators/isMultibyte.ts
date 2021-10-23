import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsMultibyteErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_MULTIBYTE_ERRORS: IsMultibyteErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/* eslint-disable no-control-regex */
const multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

/**
 * Checks whether the `target` string contains one or more multibyte characters
 * 
 * @param target The target string
 * @return true if the `target` contains one or more multibyte characters, false otherwise
 */
export function isMultibyte(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_MULTIBYTE_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(multibyte.test(target));
}
