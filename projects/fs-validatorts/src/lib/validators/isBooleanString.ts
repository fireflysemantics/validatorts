import { MessageFunctionType, Result } from '../types';
import { isString } from './isString';

export interface IsBooleanStringErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_BOOLEAN_STRING_ERRORS: IsBooleanStringErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Checks whether the `target` is a boolean string value
 * meaning it contains of of `['true', 'false', '1', '0']` 
 * 
 * ### Example
 * ```
 * expect(isBooleanString('true').value).toBeTruthy()
 * ```
 * @param target The target
 */
export function isBooleanString(target: string):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_BOOLEAN_STRING_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }  return new Result((['true', 'false', '1', '0'].indexOf(target) >= 0));
}
