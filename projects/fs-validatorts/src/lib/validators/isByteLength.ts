import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';
import { isNonNegativeFinite } from './isNonNegativeFinite';

export interface IsByteLengthErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  MIN_NOT_NON_NEGATIVE_FINITE: MessageFunctionType;
  MIN_NOT_LESS_THAN_OR_EQUAL_TO_MAX: MessageFunctionType;
}

export const IS_BYTE_LENGTH_ERRORS: IsByteLengthErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  MIN_NOT_NON_NEGATIVE_FINITE: (arr?: string[]) => {
    return `The min option ${arr![0]} is not non negative finite.`;
  },
  MIN_NOT_LESS_THAN_OR_EQUAL_TO_MAX: (arr?: string[]) => {
    return `The min argument ${arr![0]} is not less than or equal to the max option ${arr![0]}.`;
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
  min: 0,
  max: Infinity
};

/* eslint-disable prefer-rest-params */

/**
 * Checks whether the `target` string's length (in UTF-8 bytes) 
 * falls in the defined range.
 * 
 * If the `max` option is undefined, it is set to `Infinity`.
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
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_BYTE_LENGTH_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  options = { ...default_byte_length_options, ...options }

  let min = options.min;
  let max = options.max;

  if (!isNonNegativeFinite(min!).value) {
    return new Result(
      undefined, 
      IS_BYTE_LENGTH_ERRORS.MIN_NOT_NON_NEGATIVE_FINITE, 
      [min!.toString()])
  }

  if (!isNonNegativeFinite(max!).value) {
    max = Infinity
  }

  if (!(min! <= max!) ) {
    return new Result(
      undefined, 
      IS_BYTE_LENGTH_ERRORS.MIN_NOT_LESS_THAN_OR_EQUAL_TO_MAX, 
      [min!.toString(), max!.toString()])
  }
  const len = encodeURI(target).split(/%..|./).length - 1;
  return new Result(len >= min! && len <= max!);
}