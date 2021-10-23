import { alpha } from './alpha';
import { isString } from '../validators/isString';
import { MessageFunctionType, Result } from '../types';

export interface IsAlphaErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  LOCALE_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  INVALID_LOCALE: MessageFunctionType;
}

export const IS_ALPHA_ERRORS: IsAlphaErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  LOCALE_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The locale argument ${arr![0]} is not a string.`;
  },
  INVALID_LOCALE: (arr?: string[]) => {
    return `The locale argument ${arr![0]} is invalid.`;
  }
};

/**
 * Checks whether if the string contains only letters (a-zA-Z)
 * 
 * @param target The target string
 * @param locale The locale argument, defaults to 'en-US' 
 * @return true if the string contains only letters (a-zA-Z), false otherwise
 */
export function isAlpha(target: string, locale: string = 'en-US'):Result<boolean | undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_ALPHA_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  if (!isString(locale)) {
    return new Result(
      undefined, 
      IS_ALPHA_ERRORS.LOCALE_ARGUMENT_NOT_A_STRING, 
      [locale])
  }
  if (!(locale in alpha)) {
    return new Result(
      undefined, 
      IS_ALPHA_ERRORS.INVALID_LOCALE, 
      [locale])
  }
  return new Result(alpha[locale].test(target));
}

/**
 * The alpha locales
 */
export const isAlphaLocales = Object.keys(alpha);