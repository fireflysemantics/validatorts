import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsIntErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_INT_ERRORS: IsIntErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
const intLeadingZeroes = /^[-+]?[0-9]+$/;

/**
 * Tests whether the `target` string is an int
 *    
 * ### Example
 * ```
 * expect(isInt('13').value).toBeTruthy()
 * ```
 * 
 * @param target The target string
 * @param options The options
 */
export function isInt(target: string, options:any):Result<boolean|undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_INT_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  let regex = (
    options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ?
      int : intLeadingZeroes
  );

  // Check min/max/lt/gt
  let minCheckPassed = (!options.hasOwnProperty('min') || target >= options.min);
  let maxCheckPassed = (!options.hasOwnProperty('max') || target <= options.max);
  let ltCheckPassed = (!options.hasOwnProperty('lt') || target < options.lt);
  let gtCheckPassed = (!options.hasOwnProperty('gt') || target > options.gt);

  return new Result(regex.test(target) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed);
}
