import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface WhiteErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const WHITELIST_ERRORS: WhiteErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Remove characters that do not appear 
 * in the whitelist. The characters are 
 * used in a RegExp and so you will need 
 * to escape some chars, e.g. `whitelist(input, '\\[\\]')`.
 * 
 * @param target The target
 * @param chars The chars
 */
export function whitelist(target:string, chars:string):Result<string | undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined,
      WHITELIST_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(target.replace(new RegExp(`[^${chars}]+`, 'g'), ''));
}