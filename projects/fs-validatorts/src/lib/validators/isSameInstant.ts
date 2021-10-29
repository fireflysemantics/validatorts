import { isDate } from './isDate';
import { MessageFunctionType, Result } from '../types';

export interface IsSameInstantErrors {
  VALUE_ARGUMENT_NOT_A_DATE: MessageFunctionType;
  TARGET_ARGUMENT_NOT_A_DATE: MessageFunctionType;
}

export const IS_SAME_INSTANT_ERRORS: IsSameInstantErrors =
{
  VALUE_ARGUMENT_NOT_A_DATE: (arr?: string[]) => {
    return `The value argument ${arr![0]} is not a date.`;
  },
  TARGET_ARGUMENT_NOT_A_DATE: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a date.`;
  }
};

/**
 * Checks if the value is a date occurs at the exact same time
 * as the target date.
 *    
 * ### Example
 * ```
 * expect(isSameInstant(new Date(0), new Date(0)).value).toBeTruthy()
 * ```
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 */
 export function isSameInstant(value: Date, target: Date): Result<boolean | undefined > {
    if (!isDate(value).value) {
        return new Result(
          undefined, 
          IS_SAME_INSTANT_ERRORS.VALUE_ARGUMENT_NOT_A_DATE, 
          [ value ? value.toString() : '' ])
      }
      if (!isDate(target).value) {
        return new Result(
          undefined, 
          IS_SAME_INSTANT_ERRORS.TARGET_ARGUMENT_NOT_A_DATE, 
          [target ? target.toString() : ''])
      }
    return new Result(value && value.getTime() === target.getTime());
  }