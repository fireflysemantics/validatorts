import { merge } from '../util/merge';
import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsFQDNErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_FQDN_ERRORS: IsFQDNErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 *  IsFQDN Options
 */
export interface IsFQDNOptions {
  require_tld?: boolean;
  allow_underscores?: boolean;
  allow_trailing_dot?: boolean;
  allow_numeric_tld?: boolean;
  allow_wildcard?: boolean;
}

const default_fqdn_options: IsFQDNOptions = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_numeric_tld: false,
  allow_wildcard: false,
};

/**
 * Tests whether the `target` string is a FQDN
 * 
 * @param target The target string
 * @param options The options
 *    
 * ### Example
 * ```
 * expect(isFQDN('domain.com').value).toBeTruthy()
 * ```
 */
export function isFQDN(target: string, options: IsFQDNOptions): Result<boolean | undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined,
      IS_FQDN_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  options = merge(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && target[target.length - 1] === '.') {
    target = target.substring(0, target.length - 1);
  }

  /* Remove the optional wildcard before checking validity */
  if (options.allow_wildcard === true && target.indexOf('*.') === 0) {
    target = target.substring(2);
  }

  const parts: any[] = target.split('.');
  const tld = parts[parts.length - 1];

  if (options.require_tld) {
    // disallow fqdns without tld
    if (parts.length < 2) {
      return new Result(false);
    }

    if (!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return new Result(false);
    }

    // disallow spaces
    if (/\s/.test(tld)) {
      return new Result(false);
    }
  }
  // reject numeric TLDs
  if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
    return new Result(false);
  }

  return new Result(parts.every((part) => {
    if (part.length > 63) {
      return false;
    }

    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }

    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    // disallow parts starting or ending with hyphen
    if (/^-|-$/.test(part)) {
      return false;
    }

    if (!options.allow_underscores && /_/.test(part)) {
      return false;
    }
    return true;
  }));
}