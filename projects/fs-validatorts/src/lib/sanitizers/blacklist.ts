import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface BlacklistErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  CHARS_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const BLACKLIST_ERRORS: BlacklistErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  CHARS_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The chars argument ${arr![0]} is not a string.`;
  }
};

/**
 * Remove characters that appear
 * in the blacklist. 
 * 
 * Since the characters are used in a RegExp, some special 
 * characters must be escaped.
 * 
 * For example slashes `blacklist(input, '\\[\\]')`.
 * 
 * @param target 
 * @param chars
 */
export function blacklist(target: string, chars: string): Result<string|undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      BLACKLIST_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  if (!isString(chars).value) {
    return new Result(
      undefined, 
      BLACKLIST_ERRORS.CHARS_ARGUMENT_NOT_A_STRING, 
      [chars])
  }
  return new Result(target.replace(new RegExp(`[${chars}]+`, 'g'), ''));
}