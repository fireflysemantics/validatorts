import { merge } from '../utilities/merge';
import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsCurrencyErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_CURRENCY_ERRORS: IsCurrencyErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

function currencyRegex(options:any) {
  let decimal_digits = `\\d{${options.digits_after_decimal[0]}}`;
  options.digits_after_decimal.forEach((digit:number, index:number) => { if (index !== 0) decimal_digits = `${decimal_digits}|\\d{${digit}}`; });

  const symbol =
    `(${options.symbol.replace(/\W/, (m:any)=> `\\${m}`)})${(options.require_symbol ? '' : '?')}`,
    negative = '-?',
    whole_dollar_amount_without_sep = '[1-9]\\d*',
    whole_dollar_amount_with_sep = `[1-9]\\d{0,2}(\\${options.thousands_separator}\\d{3})*`,
    valid_whole_dollar_amounts = [
      '0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
    whole_dollar_amount = `(${valid_whole_dollar_amounts.join('|')})?`,
    decimal_amount = `(\\${options.decimal_separator}(${decimal_digits}))${options.require_decimal ? '' : '?'}`;
  let pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : '');

  // default is negative sign before symbol, but there are two other options (besides parens)
  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  }

  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
  if (options.allow_negative_sign_placeholder) {
    pattern = `( (?!\\-))?${pattern}`;
  } else if (options.allow_space_after_symbol) {
    pattern = ` ?${pattern}`;
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = `(\\(${pattern}\\)|${pattern})`;
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  }

  // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space
  return new RegExp(`^(?!-? )(?=.*\\d)${pattern}$`);
}


const default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_decimal: true,
  require_decimal: false,
  digits_after_decimal: [2],
  allow_space_after_digits: false,
};

export interface IsCurrencyOptions {
  symbol: string,
  require_symbol: boolean,
  allow_space_after_symbol: boolean,
  symbol_after_digits: boolean,
  allow_negatives: true,
  parens_for_negatives: boolean,
  negative_sign_before_digits: boolean,
  negative_sign_after_digits: boolean,
  allow_negative_sign_placeholder: boolean,
  thousands_separator: string,
  decimal_separator: string,
  allow_decimal: true,
  require_decimal: boolean,
  digits_after_decimal: Array<number>,
  allow_space_after_digits: boolean,
}

/**
 * Tests whether the `target` string is a currency
 *    
 * ### Example
 * ```
 * expect(isCurrency('1.39').value).toBeTruthy()
 * ```
 * @param target The target string
 * @param options The options
 */
export function isCurrency(target: string, options:any = default_currency_options):Result<boolean|undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_CURRENCY_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  options = merge(options, default_currency_options);
  return new Result(currencyRegex(options).test(target));
}