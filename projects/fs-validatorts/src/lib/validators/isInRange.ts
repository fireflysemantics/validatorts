import { MessageFunctionType, Result } from '../types';
import { isNumber } from './isNumber';

export interface IsInRangeErrors {
    VALUE_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
    MIN_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
    MAX_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
}

export const IS_IN_RANGE_ERRORS: IsInRangeErrors =
{
    VALUE_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
        return `The value argument ${arr![0]} is not a number.`;
    },
    MIN_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
        return `The min argument ${arr![0]} is not a number.`;
    },
    MAX_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
        return `The max argument ${arr![0]} is not a number.`;
    }
};

/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param min The min value to perform the check against.
 * @param max The max value to perform the check against, infinity if not defined.
 * @return True if the check passes, false otherwise.
 */
export function isInRange(value: number, min: number, max?: number): Result<boolean | undefined> {
    if (!isNumber(value).value) {
        return new Result(
          undefined, 
          IS_IN_RANGE_ERRORS.VALUE_ARGUMENT_NOT_A_NUMBER,
          [value ? value.toString(): ''])
      }
      if (!isNumber(min).value) {
        return new Result(
          undefined, 
          IS_IN_RANGE_ERRORS.MIN_ARGUMENT_NOT_A_NUMBER,
          [min ? min.toString(): ''])
      }
      if (max) {
        if (!isNumber(max).value) {
            return new Result(
              undefined, 
              IS_IN_RANGE_ERRORS.MAX_ARGUMENT_NOT_A_NUMBER,
              [max ? max.toString(): ''])
          }    
      }
      if (!max ) {
          max = Infinity
      }     
      return new Result(value >= min && value <= max)
}