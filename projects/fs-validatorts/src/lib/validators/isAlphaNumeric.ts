import { alphanumeric } from './alpha';
import { isString } from '../validators/isString';
import { MessageFunctionType, Result } from '../types';

export interface IsAlphaNumericErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  LOCALE_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  INVALID_LOCALE: MessageFunctionType;
  INVALID_IGNORE_OPTION: MessageFunctionType;
}

export const IS_ALPHA_NUMERIC_ERRORS: IsAlphaNumericErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  LOCALE_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The locale argument ${arr![0]} is not a string.`;
  },
  INVALID_LOCALE: (arr?: string[]) => {
    return `The locale argument ${arr![0]} is invalid.`;
  },
  INVALID_IGNORE_OPTION: (arr?: string[]) => {
    return `Ignore should be instance of a String or RegExp.`;
  }
};

/**
 * Tests whether `target` is in alphanumeric
 * 
 * ### Example
 * ```
 * expect(isAlphaNumeric('abc123').value).toBeTruthy()
 * ```
 * 
 * @param _target The target string
 * @param locale The locale (Defaults to 'en-US') 
 */
export function isAlphaNumeric(_target: string, locale: string = 'en-US', options:any = {}):Result<boolean|undefined> {
  if (!isString(_target).value) {
    return new Result(
      undefined, 
      IS_ALPHA_NUMERIC_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [_target])
  }
  if (!isString(locale).value) {
    return new Result(
      undefined, 
      IS_ALPHA_NUMERIC_ERRORS.LOCALE_ARGUMENT_NOT_A_STRING, 
      [locale])
  }

  let target = _target

  const { ignore } = options;

  if (ignore) {
    if (ignore instanceof RegExp) {
      target = target.replace(ignore, '');
    } else if (typeof ignore === 'string') {
      target = target.replace(new RegExp(`[${ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&')}]`, 'g'), ''); // escape regex for ignore
    } else {
      return new Result(
        undefined, 
        IS_ALPHA_NUMERIC_ERRORS.INVALID_IGNORE_OPTION, 
        [])
    }
  }
  if (locale in alphanumeric) {
    return new Result(alphanumeric[locale].test(target));
  }
  return new Result(
    undefined, 
    IS_ALPHA_NUMERIC_ERRORS.INVALID_LOCALE, 
    [locale])
}

/**
 * The alpha numeric locales
 */
export const isAlphaNumericLocales = Object.keys(alphanumeric);