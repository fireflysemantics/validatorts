import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsBooleanErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_BOOLEAN_ERRORS: IsBooleanErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Checks whether the `target` is a boolean value
 * meaning it contains of of `['true', 'false', '1', '0']` 
 * 
 * @param target The target string
 * @return true if the `target` is a boolean value, false otherwise
 */
export function isBoolean(target: string):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_BOOLEAN_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }  return new Result((['true', 'false', '1', '0'].indexOf(target) >= 0));
}
