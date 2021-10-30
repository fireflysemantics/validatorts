import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsRFC3339Errors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_RFC3339_ERRORS: IsRFC3339Errors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

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

const rfc3339 = new RegExp(`^${fullDate.source}[ tT]${fullTime.source}$`);

/**
 * Check if `target` is a valid RFC3339 timestamp
 *
 * ### Example
 * ```
 * expect(isRFC3339('2009-05-19 14:39:22-06:00').value).toBeTruthy()
 * ```
 * @param target The time stamp
 * 
 * @example
```
const isRFC3339:boolean = isRFC3339('2002-10-02T15:00:00Z')
```
 */
export function isRFC3339(target:string):Result<boolean|undefined>  {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_RFC3339_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(rfc3339.test(target));
}
