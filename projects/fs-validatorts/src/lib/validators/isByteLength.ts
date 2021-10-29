import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';
import { isObject } from './isObject';

export interface IsByteLengthErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_BYTE_LENGTH_ERRORS: IsByteLengthErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};
/**
 * IsByteLength Options.
 */
 export interface IsByteLengthOptions {
  min?:number
  max?: number
}

const default_byte_length_options:IsByteLengthOptions = {
  min: 0
};

/* eslint-disable prefer-rest-params */

/**
 * Checks whether the `target` string's length (in UTF-8 bytes) 
 * falls in the defined range.
 *  
 * ### Example
 * ```
 * expect(isByteLength('abc', {min: 2, max: 3}).value).toBeTruthy()
 * ```
 * 
 * @param target The target string
 * @param options The option parameters containing the min and max length of the string
 */
export function isByteLength(target: string, options: IsByteLengthOptions = default_byte_length_options):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_BYTE_LENGTH_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  let min = options.min;
  let max;
  if (isObject(options).value) {
    max = options!.max;
  } else { // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  const len = encodeURI(target).split(/%..|./).length - 1;
  return new Result(len >= min! && (typeof max === 'undefined' || len <= max));
}