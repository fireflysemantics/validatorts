import { MessageFunctionType, Result } from '../types';
import { isNumber } from './isNumber';

export interface IsGreaterThanFiniteErrors {
  TARGET_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
  VALUE_ARGUMENT_NOT_A_NUMBER:MessageFunctionType;
}

export const IS_GREATER_THAN_FINITE_ERRORS: IsGreaterThanFiniteErrors =
{
  TARGET_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a number.`;
  },
  VALUE_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
    return `The value argument ${arr![0]} is not a number.`;
  }
};


/**
 * Checks that both `greater` and `than` are finite whether greater > than is true.
 * @param greater The value being checked.
 * @param than The target value to perform the check against.
 * @return True if the value is greater than the target, false otherwise.
 */
export function isGreaterThanFinite(greater: number, than: number): Result<boolean | undefined> {
    if (!isNumber(greater).value) {
        return new Result(
          undefined, 
          IS_GREATER_THAN_FINITE_ERRORS.VALUE_ARGUMENT_NOT_A_NUMBER,
          [greater ? greater.toString(): ''])
      }
      if (!isNumber(than).value) {
        return new Result(
          undefined, 
          IS_GREATER_THAN_FINITE_ERRORS.TARGET_ARGUMENT_NOT_A_NUMBER,
          [than ? than.toString(): ''])
      }
       
    return new Result(typeof greater === "number" && 
    isFinite(greater) && 
    typeof than === "number" && 
    isFinite(than) && greater > than);
}