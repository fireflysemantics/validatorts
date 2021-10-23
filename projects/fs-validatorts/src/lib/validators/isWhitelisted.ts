import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsWhitelistedErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_WHITELISTED_ERRORS: IsWhitelistedErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};
//checks characters if they appear in the whitelist.

/**
 * Checks whether the `target` string appears in the white list `arg`
 * 
 * @param target The target string
 * @param arg The white list
 * @return true if the `target` appears in the whitelist, false otherwise
 */
export function isWhitelisted(target:string, arg:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_WHITELISTED_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  for (let i = target.length - 1; i >= 0; i--) {
    if (arg.indexOf(target[i]) === -1) {
      return new Result(false);
    }
  }
  return new Result(true);
}
