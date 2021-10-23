import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsByteLengthErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_BYTE_LENGTH_ERRORS: IsByteLengthErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/* eslint-disable prefer-rest-params */

/**
 * Checks whether the `target` string's length (in UTF-8 bytes) 
 * falls in a range.
 * 
 * @param target The target string
 * @param options The option parameters containing the min and max length of the string 
 * @return true if the `target` strings conforms to the provided range
 */
export function isByteLength(target: string, options?: any):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_BYTE_LENGTH_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  let min;
  let max;
  if (typeof (options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else { // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  const len = encodeURI(target).split(/%..|./).length - 1;
  return new Result(len >= min && (typeof max === 'undefined' || len <= max));
}