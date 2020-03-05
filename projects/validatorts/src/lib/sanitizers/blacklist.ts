import { assertString } from '../util/assertString';

export function blacklist(str: string, chars: string) {
  assertString(str);
  return str.replace(new RegExp(`[${chars}]+`, 'g'), '');
}