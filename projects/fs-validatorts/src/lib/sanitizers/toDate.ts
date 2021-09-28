import { assertString } from '../util/assertString';

export function toDate(date: string) {
  assertString(date);
  const millis: number = Date.parse(date);
  return !isNaN(millis) ? new Date(date) : null;
}
