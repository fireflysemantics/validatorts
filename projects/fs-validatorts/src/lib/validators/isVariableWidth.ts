import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsVariableWidthErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_VARIABLE_WIDTH_ERRORS: IsVariableWidthErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

import { fullWidth } from './isFullWidth';
import { halfWidth } from './isHalfWidth';

/**
 * Test whether the string contains 
 * a mixture of full and half-width chars.
 * 
 * ### Example
 * ```
 * expect(('Ｆｶﾀｶﾅﾞﾬ').value).toBeTruthy()
 * ```
 * 
 * @param target The target string
 */
export function isVariableWidth(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_VARIABLE_WIDTH_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(fullWidth.test(target) && halfWidth.test(target));
}
