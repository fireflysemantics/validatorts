import { assertString } from '../util/assertString';

/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */

const dateFullYear = /[0-9]{4}/;
const dateMonth = /(0[1-9]|1[0-2])/;
const dateMDay = /([12]\d|0[1-9]|3[01])/;

const timeHour = /([01][0-9]|2[0-3])/;
const timeMinute = /[0-5][0-9]/;
const timeSecond = /([0-5][0-9]|60)/;

const timeSecFrac = /(\.[0-9]+)?/;
const timeNumOffset = new RegExp(`[-+]${timeHour.source}:${timeMinute.source}`);
const timeOffset = new RegExp(`([zZ]|${timeNumOffset.source})`);

const partialTime = new RegExp(`${timeHour.source}:${timeMinute.source}:${timeSecond.source}${timeSecFrac.source}`);

const fullDate = new RegExp(`${dateFullYear.source}-${dateMonth.source}-${dateMDay.source}`);
const fullTime = new RegExp(`${partialTime.source}${timeOffset.source}`);

const rfc3339 = new RegExp(`${fullDate.source}[ tT]${fullTime.source}`);

/**
 * Check if `target` is a valid RFC3339 timestamp
 *
 * @param target The time stamp
 * @return true if the `target` is a valid RFC3339 timestamp, false otherwise
 * 
 * @example
```
const isRFC3339:boolean = isRFC3339('2002-10-02T15:00:00Z')
```
 */
export function isRFC3339(target:string) {
  assertString(target);
  return rfc3339.test(target);
}
