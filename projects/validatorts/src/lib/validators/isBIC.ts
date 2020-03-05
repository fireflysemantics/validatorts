import { assertString } from '../util/assertString';

const isBICReg = /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/;


/**
 * Checks whether the `target` is BIC encoded
 * 
 * @param target The target string
 * @return true if the `target` is BIC encoded, false otherwise
 */
export function isBIC(str: string) {
  assertString(str);
  return isBICReg.test(str);
}
