import { assertString } from '../util/assertString';

export function toInt(str, radix) {
  assertString(str);
  return parseInt(str, radix || 10);
}
