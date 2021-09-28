import { assertString } from '../util/assertString';

export function whitelist(str:string, chars:string) {
  assertString(str);
  return str.replace(new RegExp(`[^${chars}]+`, 'g'), '');
}