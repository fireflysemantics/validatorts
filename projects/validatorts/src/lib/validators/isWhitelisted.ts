import { assertString } from '../util/assertString';
//checks characters if they appear in the whitelist.

/**
 * Checks whether the `target` string appears in the white list `arg`
 * 
 * @param target The target string
 * @param arg The white list
 * @return true if the `target` appears in the whitelist, false otherwise
 */
export function isWhitelisted(target:string, arg:string) {
  assertString(target);
  for (let i = target.length - 1; i >= 0; i--) {
    if (arg.indexOf(target[i]) === -1) {
      return false;
    }
  }
  return true;
}
