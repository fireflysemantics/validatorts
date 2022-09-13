import { MessageFunctionType, Result } from '../types';
import { isString } from './isString';

export interface IsURLFragmentContainedErrors {
  URL_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  FRAGMENT_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_URL_FRAGMENT_CONTAINED_ERRORS: IsURLFragmentContainedErrors = {
  URL_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The URL argument ${arr![0]} is not a string.`;
  },
  FRAGMENT_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The fragment argument ${arr![0]} is not a string.`;
  },
};

/**
 * Checks whether the `url` path
 * contains the `fragment` argument.
 * 
 * Note that if the URL fragment does not
 * exist, then Javascript considers
 * the fragment to be an empty string or
 * ''.
 * 
 * So if the fragment argument is also an 
 * empty string, the validation result will
 * be true as an empty string contains and empty
 * string.
 * 
 * Also Note that the validation of the url
 * argument should be performed before passing
 * the `url` argument to this validation.
 *
 * ### Example
 * ```
 * expect(isURLPathsEqual(urlA, "/aa/bb/").value).toBeTruthy();
 * ```
 * @param url The url string
 * @param path The path string
 */
 export function isURLFragmentContained(
  url: string,
  fragment: string
): Result<boolean | undefined> {
  if (!isString(url).value) {
    return new Result(
      undefined,
      IS_URL_FRAGMENT_CONTAINED_ERRORS.URL_ARGUMENT_NOT_A_STRING,
      [url]
    );
  }
  if (!isString(fragment).value) {
    return new Result(
      undefined,
      IS_URL_FRAGMENT_CONTAINED_ERRORS.FRAGMENT_ARGUMENT_NOT_A_STRING,
      [fragment]
    );
  }

  const hash = new URL(url).hash;
  if (hash) {
    return new Result(new URL(url).hash.substring(1).includes(fragment));
  }
  return new Result(''.includes(fragment));
}