import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsLocaleErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_LOCALE_ERRORS: IsLocaleErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const localeReg = /^[A-z]{2,4}([_-]([A-z]{4}|[\d]{3}))?([_-]([A-z]{2}|[\d]{3}))?$/;

/**
 * Checks whether the `target` string is a valid locale
 *    
 * ### Example
 * ```
 * expect(isLocale('en').value).toBeTruthy()
 * ```
 * @param target The target string
 */
export function isLocale(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_LOCALE_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  if (target === 'en_US_POSIX' || target === 'ca_ES_VALENCIA') {
    return new Result(true);
  }
  return new Result(localeReg.test(target));
}
