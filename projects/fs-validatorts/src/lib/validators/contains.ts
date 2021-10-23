import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface ContainsErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  CONTAINED_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const CONTAINS_ERRORS: ContainsErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  CONTAINED_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The contained argument ${arr![0]} is not a string.`;
  }
};

/**
 * Test whether the target string contains the contained string.
 * 
 * @param target The string that should contains the element
 * @param contained The possibly contained string
 * @return true if the `target` string contains the `contained` string, false otherwise
 * @example 
 * ```
 * expect(contains('foobar', 'foo').value).toBeTruthy()
 * ```
 */
export function contains(target: string, contained: string):Result<boolean | undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      CONTAINS_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  if (!isString(contained)) {
    return new Result(
      undefined, 
      CONTAINS_ERRORS.CONTAINED_ARGUMENT_NOT_A_STRING, 
      [contained])
  }
  return new Result(target.indexOf(contained) >= 0);
}
