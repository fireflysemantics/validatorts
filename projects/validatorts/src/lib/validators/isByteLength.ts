import { assertString } from '../util/assertString';

/* eslint-disable prefer-rest-params */

/**
 * Checks whether the `target` string's length (in UTF-8 bytes) 
 * falls in a range.
 * 
 * @param target The target string
 * @param options The option parameters containing the min and max length of the string 
 * @return true if the `target` strings conforms to the provided range
 */
export function isByteLength(target: string, options?: any) {
  assertString(target);
  let min;
  let max;
  if (typeof (options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else { // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  const len = encodeURI(target).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}