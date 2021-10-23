import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsFullWidthErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_FULL_WIDTH_ERRORS: IsFullWidthErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

export const fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

/**
 * Checks whether the `target` is full width
 * 
 * @param target The target string
 * @return true if the `target` is full width, false otherwise
 */
export function isFullWidth(target: string):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_FULL_WIDTH_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(fullWidth.test(target));
}
