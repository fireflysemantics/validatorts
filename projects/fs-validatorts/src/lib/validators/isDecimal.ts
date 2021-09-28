import { merge } from '../util/merge';
import { assertString } from '../util/assertString';
import { includes } from '../util/includes';
import { decimal } from './alpha';

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
 * @param target The target string
 * @param options The options
 * @return true if the `target` is a decimal, false otherwise
 */
export function isDecimal(target: string, options:any) {
  assertString(target);
  options = merge(options, default_decimal_options);
  if (options.locale in decimal) {
    return !includes(blacklist, target.replace(/ /g, '')) && decimalRegExp(options).test(target);
  }
  throw new Error(`Invalid locale '${options.locale}'`);
}
