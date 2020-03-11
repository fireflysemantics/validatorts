import { assertString } from '../util/assertString';
import { toDate } from '../sanitizers/toDate';

/**
 * Checks whether the `target` date comes before the `arg` date
 * 
 * @param target The target date
 * @param arg The argument  
 * @return true if the `target` date comes before the `arg` date, false otherwise
 */
export function isBefore(target: string, arg: string = String(new Date())) {
  assertString(target);
  const comparison = toDate(arg);
  const original = toDate(target);
  return !!(original && comparison && original < comparison);
}
