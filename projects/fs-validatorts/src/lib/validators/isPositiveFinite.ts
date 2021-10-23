import { Types } from "../types";
import { MessageFunctionType, Result } from '../types';
import { isNumber } from "./isNumber";

export interface IsPositiveFiniteErrors {
  TARGET_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
}

export const IS_POSITIVE_FINITE_ERRORS: IsPositiveFiniteErrors =
{
  TARGET_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a number.`;
  }
};

/**
 * Checks if the value is > 0 and finite.
 * @param target The value being checked.
 * @return True if the value is a finite number and is positive, false otherwise.
 */
export function isPositiveFinite(target: number): Result<boolean | undefined> {
  if (!isNumber(target).value) {
    return new Result(
      undefined,
      IS_POSITIVE_FINITE_ERRORS.TARGET_ARGUMENT_NOT_A_NUMBER,
      [target ? target.toString() : ''])
  }
  return new Result(typeof (target) === Types.NUMBER && isFinite(target) && target > 0);
}