import { assertString } from '../util/assertString';

export function toBoolean(str:string, strict:boolean) {
  assertString(str);
  if (strict) {
    return str === '1' || /^true$/i.test(str);
  }
  return str !== '0' && !/^false$/i.test(str) && str !== '';
}
