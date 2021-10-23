import { MessageFunctionType, Result } from '../types';
import { isNumber } from './isNumber';

export interface IsDivisibleByErrors {
  TARGET_ARGUMENT_NOT_A_NUMBER: MessageFunctionType;
  DIVISOR_ARGUMENT_NOT_A_NUMBER:MessageFunctionType;
}

export const IS_DIVISIBLE_BY_ERRORS: IsDivisibleByErrors =
{
  TARGET_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a number.`;
  },
  DIVISOR_ARGUMENT_NOT_A_NUMBER: (arr?: string[]) => {
    return `The divisor argument ${arr![0]} is not a number.`;
  }
};

/**
 * Checks whether the `target` is divisible by the arg
 * 
 * @param target The target string
 * @param divisor The divisor
 * @return true if the `target` is divisible by the `divisor`, false otherwise
 */
export function isDivisibleBy(target: number, divisor: number):Result<boolean | undefined> {
  if (!isNumber(target).value) {
    return new Result(
      undefined, 
      IS_DIVISIBLE_BY_ERRORS.TARGET_ARGUMENT_NOT_A_NUMBER,
      [target ? target.toString(): ''])
  }
  if (!isNumber(divisor).value) {
    return new Result(
      undefined, 
      IS_DIVISIBLE_BY_ERRORS.DIVISOR_ARGUMENT_NOT_A_NUMBER,
      [target ? target.toString(): ''])
  }
  return new Result( (target % divisor) === 0);
}