import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsLengthErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_LENGTH_ERRORS: IsLengthErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/* eslint-disable prefer-rest-params */

/**
 * Tests whether the `target` string length is valid
 *    
 * ### Example
 * ```
 * expect(isLength('abcd', 2).value).toBeTruthy()
 * ```
 * @param target The target
 * @param min The minimum length
 * @param max The maximum length - Infinity if not defined
 */
export function isLength(target:string, min: number = 0, max: number = Infinity):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_LENGTH_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  const surrogatePairs = target.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  const len = target.length - surrogatePairs.length;
  return new Result(len >= min && (typeof max === 'undefined' || len <= max));
}