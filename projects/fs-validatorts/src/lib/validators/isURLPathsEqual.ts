import { MessageFunctionType, Result } from '../types';
import { isString } from './isString';

export interface IsURLPathsEqualErrors {
  URL_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  PATH_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_URL_PATH_EQUAL_ERRORS: IsURLPathsEqualErrors = {
  URL_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The URL argument ${arr![0]} is not a string.`;
  },
  PATH_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The paths argument ${arr![0]} is not a string.`;
  },
};

/**
 * Checks whether the `url` path
 * is equal to the `path` argument.
 * 
 * Note that the validation of the url
 * argument should be performed before passing
 * the `url` argument to this validation.
 *
 * ### Example
 * ```
 * expect(isURLPathsEqual(urlA, "/aa/bb/").value).toBeTruthy();
 * ```
 * @param target The target string
 * @param whitelist The white list
 */
export function isURLPathsEqual(
  url: string,
  path: string
): Result<boolean | undefined> {
  if (!isString(url).value) {
    return new Result(
      undefined,
      IS_URL_PATH_EQUAL_ERRORS.URL_ARGUMENT_NOT_A_STRING,
      [url]
    );
  }
  if (!isString(path).value) {
    return new Result(
      undefined,
      IS_URL_PATH_EQUAL_ERRORS.PATH_ARGUMENT_NOT_A_STRING,
      [path]
    );
  }
  return new Result(path === new URL(url).pathname);
}