import { assertString } from '../util/assertString';
import { isIP } from './isIP';

const subnetMaybe = /^\d{1,2}$/;

/**
 * Checks whether the `target` is an IP range
 * 
 * @param target The target string
 * @return true if the `target` is an IP range
 */
export function isIPRange(target:string) {
  assertString(target);
  const parts = target.split('/');

  // parts[0] -> ip, parts[1] -> subnet
  if (parts.length !== 2) {
    return false;
  }

  if (!subnetMaybe.test(parts[1])) {
    return false;
  }

  // Disallow preceding 0 i.e. 01, 02, ...
  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return false;
  }

  return isIP(parts[0], '4') && parseInt(parts[1]) <= 32 && parseInt(parts[1]) >= 0;
}
