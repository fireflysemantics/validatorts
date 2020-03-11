import { assertString } from '../util/assertString';
import { toFloat } from '../sanitizers/toFloat';

/**
 * Checks whether the `target` is divisible by the arg
 * 
 * @param target The target string
 * @param arg The divisor
 * @return true if the `target` is divisible by the `arg`, false otherwise
 */
export function isDivisibleBy(target: string, arg: string) {
  assertString(target);
  return toFloat(target) % parseInt(arg, 10) === 0;
}
