import { assertString } from '../util/assertString';

/* eslint-disable prefer-rest-params */

/**
 * Checks whether the `target` string length is valid
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` has a valid length, false otherwise
 */
export function isLength(target:string, options:any) {
  assertString(target);
  let min;
  let max;
  if (typeof (options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else { // backwards compatibility: isLength(str, min [, max])
    min = arguments[1] || 0;
    max = arguments[2];
  }
  const surrogatePairs = target.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  const len = target.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
