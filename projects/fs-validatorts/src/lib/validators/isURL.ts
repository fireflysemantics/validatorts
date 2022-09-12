import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsURLErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_URL_ERRORS: IsURLErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

import { isFQDN } from './isFQDN';
import { isIP } from './isIP';
import { merge } from '../utilities/merge';

/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed

*/

/**
 * IsURL Options.
 */
export interface IsURLOptions {
  protocols?: string[]
  require_tld?: boolean
  require_protocol?: boolean
  require_host?: boolean
  require_port?: boolean
  require_valid_protocol?: boolean
  allow_underscores?: boolean
  host_whitelist?: false | string[]
  host_blacklist?: false | string[]
  allow_trailing_dot?: boolean
  allow_query_components?: boolean,
  allow_protocol_relative_urls?: boolean
  allow_fragments?: boolean
  validate_length?: boolean
}


const default_url_options:IsURLOptions = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_port: false,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false,
  allow_fragments: true,
  allow_query_components: true,
  validate_length: true,
};

const wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj:any) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host:any, matches:any) {
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    if (host === match || (isRegExp(match) && match.test(host))) {
      return true;
    }
  }
  return false;
}

/**
 * Checks whether the `target` string is valid URL
 * 
 * ### Example
 * ```
 * expect((isURL('foobar.com').value).toBeTruthy()
 * ```
 * @param url The target string
 * @param options The options
 */
export function isURL(url:string, options:any):Result<boolean|undefined>  {
  if (!isString(url).value) {
    return new Result(
      undefined, 
      IS_URL_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [url])
  }

  if (!url || /[\s<>]/.test(url)) {
    return new Result(false);
  }
  if (url.indexOf('mailto:') === 0) {
    return new Result(false);
  }
  options = merge(options, default_url_options);
  
  if (options.validate_length && url.length >= 2083) {
    return new Result(false);
  }
  
  if (!options.allow_fragments && url.includes('#')) {
    return new Result(false);
  }
  
  if (!options.allow_query_components && (url.includes('?') || url.includes('&'))) {
    return new Result(false);
  }
  
  let protocol, auth, host, hostname, port, port_str, split, ipv6;
  
  split = url.split('#');
  url = split.shift()!;
  
  split = url.split('?');
  url = split.shift()!;
  
  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift()!.toLowerCase();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return new Result(false);
    }
  } else if (options.require_protocol) {
    return new Result(false);
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return new Result(false);
    }
    split[0] = url.substr(2);
  }
  url = split.join('://');
  
  if (url === '') {
    return new Result(false);
  }
  
  split = url.split('/');
  url = split.shift()!;
  
  if (url === '' && !options.require_host) {
    return new Result(true);
  }
  
  split = url.split('@');
  if (split.length > 1) {
    if (options.disallow_auth) {
      return new Result(false);
    }
    if (split[0] === '' || split[0].substr(0, 1) === ':') {
      return new Result(false);
    }
    auth = split.shift()!;
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return new Result(false);
    }
  }
  hostname = split.join('@');
  
  port_str = null;
  ipv6 = null;
  const ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }
  
  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return new Result(false);
    }
  } else if (options.require_port) {
    return new Result(false);
  }
  
  if (options.host_whitelist) {
    return new Result(checkHost(host, options.host_whitelist));
  }
  if (!isIP(host!) && !isFQDN(host!, options) && (!ipv6 || !isIP(ipv6, '6'))) {
    return new Result(false);
  }
  
  host = host || ipv6;
  
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return new Result(false);
  }
  
  return new Result(true);
}










