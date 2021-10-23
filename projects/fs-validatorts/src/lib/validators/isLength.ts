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
 * Checks whether the `target` string length is valid
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` has a valid length, false otherwise
 */
export function isLength(target:string, options:any):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_LENGTH_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  let min;
  let max;
  if (typeof (options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else { // backwards compatibility: isLength(str, min [, max])
    min = arguments[1] || 0;
    max = arguments[2];
  }
  const surrogatePairs = target.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  const len = target.length - surrogatePairs.length;
  return new Result(len >= min && (typeof max === 'undefined' || len <= max));
}