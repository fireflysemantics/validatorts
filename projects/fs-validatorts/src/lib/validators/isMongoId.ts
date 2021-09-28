import { assertString } from '../util/assertString';

import { isHexadecimal } from './isHexadecimal';

/**
 * Checks whether the `target` string is a valid MongoID
 * 
 * @param target The target string
 * @return true if the `target` is a valid MongoID, false otherwise
 */
export function isMongoId(target:string) {
  assertString(target);
  return isHexadecimal(target) && target.length === 24;
}
