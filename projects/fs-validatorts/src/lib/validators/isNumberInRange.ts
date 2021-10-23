import { MessageFunctionType, Result } from '../types';
import { isNumber } from './isNumber';

export interface IsNumberInRangeErrors {
  TARGET_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
  MIN_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
  MAX_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
}

export const IS_NUMBER_IN_RANGE_ERRORS: IsNumberInRangeErrors =
{
  TARGET_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a number.`;
  },
  MIN_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
    return `The min argument ${arr![0]} is not a number.`;
  },
  MAX_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
    return `The min argument ${arr![0]} is not a number.`;
  }
};


/**
 * Checks if the argument is in the range of the min max parameters.
 * @param target The value being checked.
 * @param min The min parameter
 * @param max The max parameter
 * @returns True if the argument is in range.
 */
export function isNumberInRange(target: any, min: number, max: number): Result<boolean | undefined> {
  if (!isNumber(target).value) {
    return new Result(
      undefined,
      IS_NUMBER_IN_RANGE_ERRORS.TARGET_ARGUMENT_NOT_A_NUMBER,
      [target ? target.toString() : ''])
  }
  if (!isNumber(min).value) {
    return new Result(
      undefined,
      IS_NUMBER_IN_RANGE_ERRORS.MIN_ARGUMENT_NOT_A_NUMBER,
      [min ? min.toString() : ''])
  }
  if (!isNumber(max).value) {
    return new Result(
      undefined,
      IS_NUMBER_IN_RANGE_ERRORS.MAX_ARGUMENT_NOT_A_NUMBER,
      [max ? max.toString() : ''])
  }
  return new Result((target >= min && target <= max));
}