import { assertString } from '../util/assertString';

export function toInt(str:string, radix:number) {
  assertString(str);
  return parseInt(str, radix || 10);
}
