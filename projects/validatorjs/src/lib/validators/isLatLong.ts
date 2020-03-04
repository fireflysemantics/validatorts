import { assertString } from '../util/assertString';

const lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
const long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

/**
 * Checks whether the `target` string is a valid LatLong
 * 
 * @param target The target string
 * @return true if the `target` is a valid LatLong, false otherwise
 */
export function isLatLong(target:string) {
  assertString(target);
  if (!target.includes(',')) return false;
  const pair = target.split(',');
  if ((pair[0].startsWith('(') && !pair[1].endsWith(')'))
    || (pair[1].endsWith(')') && !pair[0].startsWith('('))) return false;
  return lat.test(pair[0]) && long.test(pair[1]);
}
