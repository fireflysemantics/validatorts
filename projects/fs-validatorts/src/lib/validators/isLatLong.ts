import { MessageFunctionType, Result } from '../types';
import { merge } from '../util/merge';
import { isString } from '../validators/isString';

export interface IsLatLongErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_LATLONG_ERRORS: IsLatLongErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};


const lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
const long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

const latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
const longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;

export interface IsLatLongOptions {
  checkDMS:boolean
}
const defaultLatLongOptions = {
  checkDMS: false,
};

/**
 * Tests whether the `target` string is a valid LatLong
 *    
 * ### Example
 * ```
 * expect(isLatLong('(-17.738223, 85.605469)').value).toBeTruthy()
 * ```
 * @param target The target string
 */
export function isLatLong(target: string, options:IsLatLongOptions = defaultLatLongOptions): Result<boolean | undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined,
      IS_LATLONG_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  options = merge(options, defaultLatLongOptions);

  if (!target.includes(',')) return new Result(false);
  const pair = target.split(',');
  if ((pair[0].startsWith('(') && !pair[1].endsWith(')'))
    || (pair[1].endsWith(')') && !pair[0].startsWith('('))) return new Result(false);

  if (options.checkDMS) {
    return new Result(latDMS.test(pair[0]) && longDMS.test(pair[1]));
  }
  return new Result(lat.test(pair[0]) && long.test(pair[1]));
}