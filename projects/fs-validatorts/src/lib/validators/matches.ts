import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsMatchesErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_MATCHES_ERRORS: IsMatchesErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Check whether the target matches the pattern
 *    
 * ### Example
 * ```
 * expect(matches('abc', 'abc').value).toBeTruthy()
 * ```
 * @param target The target
 * @param pattern The RegExp
 * @param modifiers The optional modifier
 */
export function matches(target:string, pattern:RegExp, modifiers?:string):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_MATCHES_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return new Result(pattern.test(target));
}