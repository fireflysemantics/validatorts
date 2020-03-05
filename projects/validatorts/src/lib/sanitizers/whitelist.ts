import { assertString } from '../util/assertString';

export function whitelist(str, chars) {
  assertString(str);
  return str.replace(new RegExp(`[^${chars}]+`, 'g'), '');
}