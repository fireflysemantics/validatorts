import { toString } from '../util/toString';
import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsInErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_IN_ERRORS: IsInErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Checks whether the `target` string is in the array of allowed values
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` is in the array of allowed values, false otherwise
 */
export function isIn(target: string, options:any):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_IN_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  let i;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    const array:any = [];
    for (i in options) {

      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = toString(options[i]);
      }
    }
    return new Result(array.indexOf(target) >= 0);
  } else if (typeof options === 'object') {
    return new Result(options.hasOwnProperty(target));
  } else if (options && typeof options.indexOf === 'function') {
    return new Result(options.indexOf(target) >= 0);
  }
  return new Result(false);
}