import { assertString } from '../util/assertString';
import { merge } from '../util/merge';

/**
 *  IsFQDN Options
 */
export interface IsFQDNOptions {
  require_tld?: boolean;
  allow_underscores?: boolean;
  allow_trailing_dot?: boolean;
}

const default_fqdn_options:IsFQDNOptions = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false,
};

/**
 * Checks whether the `target` string is a FQDN
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` is a FQDN, false otherwise
 */
export function isFQDN(str: string, options:any) {
  assertString(str);
  options = merge(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  const parts = str.split('.');
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length > 63) {
      return false;
    }
  }
  if (options.require_tld) {
    const tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld!)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld!)) {
      return false;
    }
  }
  for (let part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
