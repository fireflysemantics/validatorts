import { merge } from '../util/merge';
import { includes } from '../util/includes';
import { decimal } from './alpha';

import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsDecimalErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  INVALID_LOCALE: MessageFunctionType;
}

export const IS_DECIMAL_ERRORS: IsDecimalErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  INVALID_LOCALE: (arr?: string[]) => {
    return `The locale ${arr![0]} is invalid.`;
  }
};


function decimalRegExp(options:any) {
  const regExp = new RegExp(`^[-+]?([0-9]+)?(\\${decimal[options.locale]}[0-9]{${options.decimal_digits}})${options.force_decimal ? '' : '?'}$`);
  return regExp;
}

/**
 * The default options
 */
const default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US',
};

const blacklist = ['', '-', '+'];

/**
 * Checks whether the `target` string is a decimal
 *    
 * ### Example
 * ```
 * expect(isDecimal('-.25').value).toBeTruthy()
 * ```
 * 
 * @param target The target string
 * @param options The options
 */
export function isDecimal(target: string, options:any):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_DECIMAL_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  options = merge(options, default_decimal_options);
  if (options.locale in decimal) {
    return new Result(!includes(blacklist, target.replace(/ /g, '')) && decimalRegExp(options).test(target));
  }
  return new Result(
    undefined, 
    IS_DECIMAL_ERRORS.INVALID_LOCALE,
    [options.locale])
}