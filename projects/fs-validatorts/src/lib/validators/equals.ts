import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface EqualsErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  CHARS_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const EQUALS_ERRORS: EqualsErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  CHARS_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The chars argument ${arr![0]} is not a string.`;
  }
};


/**
 * Compares the `target` and `arg` strings for strict (`===`) equality
 * 
 * @param target The target string to compare to
 * @param chars The argument to perform the comparison with 
 * @return true if the `target` is strictly equal to the `arg`, false otherwise
 * @example 
 * expect(equals('abc', 'abc').value).toBeTruthy()
 */
export function equals(target: string, chars: string):Result<boolean | undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      EQUALS_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  if (!isString(chars)) {
    return new Result(
      undefined, 
      EQUALS_ERRORS.CHARS_ARGUMENT_NOT_A_STRING, 
      [chars])
  }
  return new Result(target === chars)
}