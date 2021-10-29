import { MessageFunctionType, Result } from '../types';
import { isNumber } from './isNumber';

export interface IsLessThanFiniteErrors {
  TARGET_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
  VALUE_ARGUMENT_NOT_A_NUMBER:MessageFunctionType;
}

export const IS_LESS_THAN_FINITE_ERRORS: IsLessThanFiniteErrors =
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
 *    
 * ### Example
 * ```
 * expect(isLessThanFinite(1,2).value).toBeTruthy()
 * ```
 * @param less The value being checked.
 * @param than The target value to perform the check against.
 */
export function isLessThanFinite(less: number, than: number): Result<boolean | undefined> {
    if (!isNumber(less).value) {
        return new Result(
          undefined, 
          IS_LESS_THAN_FINITE_ERRORS.VALUE_ARGUMENT_NOT_A_NUMBER,
          [less ? less.toString(): ''])
      }
      if (!isNumber(than).value) {
        return new Result(
          undefined, 
          IS_LESS_THAN_FINITE_ERRORS.TARGET_ARGUMENT_NOT_A_NUMBER,
          [than ? than.toString(): ''])
      }
       
    return new Result(typeof less === "number" && 
    isFinite(less) && 
    typeof than === "number" && 
    isFinite(than) && less < than);
}