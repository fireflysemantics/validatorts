import { assertString } from '../util/assertString';

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
}

export const default_email_options:IsEmailOptions = {
  require_display_name: false,
  allow_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true,
}

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
const splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i;
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
 * @param {String} display_name
 */
function validateDisplayName(display_name) {
  const trim_quotes = display_name.match(/^"(.+)"$/i);
  const display_name_without_quotes = trim_quotes ? trim_quotes[1] : display_name;

  // display name with only spaces is not valid
  if (!display_name_without_quotes.trim()) {
    return false;
  }

  // check whether display name contains illegal character
  const contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
  if (contains_illegal) {
    // if contains illegal characters,
    // must to be enclosed in double-quotes, otherwise it's not a valid display name
    if (!trim_quotes) {
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
 * Checks whether the `target` string is a valid email address
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` is a valid email address, false otherwise
 */
export function isEmail(str: string, options) {
  assertString(str);
  options = merge(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    const display_email = str.match(splitNameAddress);
    if (display_email) {
      let display_name;
      [, display_name, str] = display_email;
      // sometimes need to trim the last space to get the display name
      // because there may be a space between display name and email address
      // eg. myname <address@gmail.com>
      // the display name is `myname` instead of `myname `, so need to trim the last space
      if (display_name.endsWith(' ')) {
        display_name = display_name.substr(0, display_name.length - 1);
      }

      if (!validateDisplayName(display_name)) {
        return false;
      }
    } else if (options.require_display_name) {
      return false;
    }
  }
  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
    return false;
  }

  const parts = str.split('@');
  const domain = parts.pop();
  let user = parts.join('@');

  const lower_domain = domain.toLowerCase();

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
    if (!isByteLength(username.replace('.', ''), { min: 6, max: 30 })) {
      return false;
    }

    const user_parts = username.split('.');
    for (let i = 0; i < user_parts.length; i++) {
      if (!gmailUserPart.test(user_parts[i])) {
        return false;
      }
    }
  }

  if (!isByteLength(user, { max: 64 }) ||
    !isByteLength(domain, { max: 254 })) {
    return false;
  }

  if (!isFQDN(domain, { require_tld: options.require_tld })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!isIP(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }

      let noBracketdomain = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !isIP(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ?
      quotedEmailUserUtf8.test(user) :
      quotedEmailUser.test(user);
  }

  const pattern = options.allow_utf8_local_part ?
    emailUserUtf8Part : emailUserPart;

  const user_parts = user.split('.');
  for (let i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
