import { assertString } from '../util/assertString'

/**
 * Compares the `target` and `arg` strings for strict (`===`) equality
 * 
 * @param target The target string to compare to
 * @param arg The argument to perform the comparison with 
 * @return true if the `target` is strictly equal to the `arg`, false otherwise
 */
export function equals(target: string, arg: string) {
  assertString(target)
  return target === arg
}