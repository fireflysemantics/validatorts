import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsSurrogatePairErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_SURROGATE_PAIR_ERRORS: IsSurrogatePairErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

/**
 * Test whether the string contains any surrogate pairs chars.
 *   
 * ### Example
 * ```
 * expect(isSurrogatePair('ABC千𥧄1-2-3').value).toBeTruthy()
 * ```
 * @param target The target
 */
export function isSurrogatePair(target:string):Result<boolean|undefined>  {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_SURROGATE_PAIR_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(surrogatePair.test(target));
}
