import { assertString } from '../util/assertString';

import { isFQDN } from './isFQDN';
import { isIP } from './isIP';
import { merge } from '../util/merge';

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
  require_valid_protocol?: boolean
  allow_underscores?: boolean
  host_whitelist?: false | string[]
  host_blacklist?: false | string[]
  allow_trailing_dot?: boolean
  allow_protocol_relative_urls?: boolean
}

const default_url_options:IsURLOptions = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false,
}

const wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
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
 * @param target The target string
 * @param options The options
 * @return true if the `target` is a valid URL, false otherwise
 */
export function isURL(target:string, options) {
  assertString(target);
  if (!target || target.length >= 2083 || /[\s<>]/.test(target)) {
    return false;
  }
  if (target.indexOf('mailto:') === 0) {
    return false;
  }
  options = merge(options, default_url_options);
  let protocol, auth, host, hostname, port, port_str, split, ipv6;

  split = target.split('#');
  target = split.shift();

  split = target.split('?');
  target = split.shift();

  split = target.split('://');
  if (split.length > 1) {
    protocol = split.shift().toLowerCase();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (target.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }
    split[0] = target.substr(2);
  }
  target = split.join('://');

  if (target === '') {
    return false;
  }

  split = target.split('/');
  target = split.shift();

  if (target === '' && !options.require_host) {
    return true;
  }

  split = target.split('@');
  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
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
      return false;
    }
  }

  if (!isIP(host) && !isFQDN(host, options) && (!ipv6 || !isIP(ipv6, '6'))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
