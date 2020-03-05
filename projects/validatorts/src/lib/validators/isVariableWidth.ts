import { assertString } from '../util/assertString';

import { fullWidth } from './isFullWidth';
import { halfWidth } from './isHalfWidth';

/**
 * Checks whether the `target` is variable width
 * 
 * @param target The target string
 * @return true if the `target` is variable width, false otherwise
 */
export function isVariableWidth(target:string) {
  assertString(target);
  return fullWidth.test(target) && halfWidth.test(target);
}
