import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsEMailErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_EMAIL_ERRORS: IsEMailErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

import { merge } from '../util/merge';
import { isByteLength } from './isByteLength';
import { isFQDN } from './isFQDN';
import { isIP } from './isIP';

/**
 * IsEmail Options.
 */
export interface IsEmailOptions {
  require_display_name?:boolean
  allow_display_name?: boolean
  allow_utf8_local_part?: boolean
  require_tld?: boolean
  blacklisted_chars: string,
  ignore_max_length: boolean,
  host_blacklist: any[],
  domain_specific_validation:boolean
  allow_ip_domain:boolean
}

const default_email_options:IsEmailOptions = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true,
  blacklisted_chars: '',
  ignore_max_length: false,
  host_blacklist: [],
  domain_specific_validation:false,
  allow_ip_domain:false
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
const splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
const emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
const gmailUserPart = /^[a-z\d]+$/;
const quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
const emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
const quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
const defaultMaxEmailLength = 254;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

/**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param display_name
 */
function validateDisplayName(display_name:string) {
  const display_name_without_quotes = display_name.replace(/^"(.+)"$/, '$1');
  // display name with only spaces is not valid
  if (!display_name_without_quotes.trim()) {
    return false;
  }

  // check whether display name contains illegal character
  const contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
  if (contains_illegal) {
    // if contains illegal characters,
    // must to be enclosed in double-quotes, otherwise it's not a valid display name
    if (display_name_without_quotes === display_name) {
      return false;
    }

    // the quotes in display name must start with character symbol \
    const all_start_with_back_slash =
      display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
    if (!all_start_with_back_slash) {
      return false;
    }
  }
  return true;
}


/**
 * Tests whether the `target` string is a valid email address
 *    
 * ### Example
 * ```
 * expect(isEmail('foo@bar.com').value).toBeTruthy()
 * ```
 * 
 * @param target The target
 * @param options The options
 */
export function isEmail(target: string, options:IsEmailOptions = default_email_options):Result<boolean|undefined> {

  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_EMAIL_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  options = merge(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    const display_email = target.match(splitNameAddress);
    if (display_email) {
      let display_name = display_email[1];

      // Remove display name and angle brackets to get email address
      // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)
      target = target.replace(display_name, '').replace(/(^<|>$)/g, '');

      // sometimes need to trim the last space to get the display name
      // because there may be a space between display name and email address
      // eg. myname <address@gmail.com>
      // the display name is `myname` instead of `myname `, so need to trim the last space
      if (display_name.endsWith(' ')) {
        display_name = display_name.substr(0, display_name.length - 1);
      }

      if (!validateDisplayName(display_name)) {
        return new Result(false);
      }
    } else if (options.require_display_name) {
      return new Result(false);
    }
  }
  if (!options.ignore_max_length && target.length > defaultMaxEmailLength) {
    return new Result(false);
  }

  const parts = target.split('@');
  const domain = parts.pop();
  const lower_domain = domain!.toLowerCase();

  if (options.host_blacklist.includes(lower_domain)) {
    return new Result(false);
  }

  let user = parts.join('@');

  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase();

    // Removing sub-address from username before gmail validation
    const username = user.split('+')[0];

    // Dots are not included in gmail length restriction
    if (!isByteLength(username.replace(/\./g, ''), { min: 6, max: 30 })) {
      return new Result(false);
    }

    const user_parts = username.split('.');
    for (let i = 0; i < user_parts.length; i++) {
      if (!gmailUserPart.test(user_parts[i])) {
        return new Result(false);
      }
    }
  }

  if (options.ignore_max_length === false && (
    !isByteLength(user, { max: 64 }) ||
    !isByteLength(domain!, { max: 254 }))
  ) {
    return new Result(false);
  }

  if (!isFQDN(domain!, { require_tld: options.require_tld })) {
    if (!options.allow_ip_domain) {
      return new Result(false);
    }

    if (!isIP(domain!)) {
      if (!domain!.startsWith('[') || !domain!.endsWith(']')) {
        return new Result(false);
      }

      let noBracketdomain = domain!.substr(1, domain!.length - 2);

      if (noBracketdomain.length === 0 || !isIP(noBracketdomain)) {
        return new Result(false);
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return new Result(options.allow_utf8_local_part ?
      quotedEmailUserUtf8.test(user) :
      quotedEmailUser.test(user));
  }

  const pattern = options.allow_utf8_local_part ?
    emailUserUtf8Part : emailUserPart;

  const user_parts = user.split('.');
  for (let i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return new Result(false);
    }
  }
  if (options.blacklisted_chars) {
    if (user.search(new RegExp(`[${options.blacklisted_chars}]+`, 'g')) !== -1) {
      return new Result(false);

    } 
  }
  return new Result(true);
}
