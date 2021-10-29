import { MessageFunctionType, Result } from '../types';
import { isNumber } from './isNumber';

export interface IsNegativeErrors {
  TARGET_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
}

export const IS_NEGATIVE_ERRORS: IsNegativeErrors =
{
  TARGET_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Tests if the value is a negative number.
 *    
 * ### Example
 * ```
 * expect(isNegative(-1).value).toBeTruthy()
 * ```
 * @param target The value being checked.
 */
export function isNegative(target: number): Result<boolean | undefined> {
    if (!isNumber(target).value) {
        return new Result(
          undefined,
          IS_NEGATIVE_ERRORS.TARGET_ARGUMENT_NOT_A_NUMBER,
          [target ? target.toString() : ''])
      }    
    return new Result(target < 0);
}