import { assertString } from '../util/assertString';
import { toString } from '../util/toString';

/**
 * Test whether the target string contains the arg.
 * 
 * @param target The string that should contains the element
 * @param arg The contained string
 * @return true if the `target` string contains the `arg` string, false otherwise
 */
export function contains(target: string, arg: string) {
  assertString(target);
  return target.indexOf(toString(arg)) >= 0;
}
