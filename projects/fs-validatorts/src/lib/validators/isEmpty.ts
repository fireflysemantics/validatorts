import { merge } from '../util/merge';
import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsEmptyErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_EMPTY_ERRORS: IsEmptyErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const default_is_empty_options = {
  ignore_whitespace: false,
};

/**
 * Tests whether the `target` string is empty
 *    
 * ### Example
 * ```
 * expect(isEmpty('').value).toBeTruthy()
 * ```
 * 
 * Note that `ignore_whitespace` is false by default.
 * 
 * @param target The target string
 * @param options The options
 */
export function isEmpty(target: string, options:any):Result<boolean | undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_EMPTY_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  options = merge(options, default_is_empty_options);

  return new Result((options.ignore_whitespace ? target.trim().length : target.length) === 0);
}
