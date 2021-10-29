import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsWhitelistedErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  WHITELIST_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_WHITELISTED_ERRORS: IsWhitelistedErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  WHITELIST_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The whitelist argument ${arr![0]} is not a string.`;
  }
};
//checks characters if they appear in the whitelist.

/**
 * Checks whether the `target` characters 
 * appear appear in the `whitelist`
 *    
 * ### Example
 * ```
 * expect(isWhitelisted('baz-foo', 'abcdefghijklmnopqrstuvwxyz-').value).toBeTruthy()
 * ```
 * @param target The target string
 * @param whitelist The white list
 */
export function isWhitelisted(target:string, whitelist:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_WHITELISTED_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  if (!isString(whitelist)) {
    return new Result(
      undefined, 
      IS_WHITELISTED_ERRORS.WHITELIST_ARGUMENT_NOT_A_STRING,
      [whitelist])
  }
  for (let i = target.length - 1; i >= 0; i--) {
    if (whitelist.indexOf(target[i]) === -1) {
      return new Result(false);
    }
  }
  return new Result(true);
}
