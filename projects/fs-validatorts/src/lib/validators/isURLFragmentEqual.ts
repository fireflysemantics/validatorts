import { MessageFunctionType, Result } from '../types';
import { isString } from './isString';

export interface IsURLFragmentEqualErrors {
  URL_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  FRAGMENT_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_URL_FRAGMENT_EQUAL_ERRORS: IsURLFragmentEqualErrors = {
  URL_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The URL argument ${arr![0]} is not a string.`;
  },
  FRAGMENT_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The fragment argument ${arr![0]} is not a string.`;
  },
};

/**
 * Checks whether the `url` fragment
 * is equal to the `fragment` argument.
 * 
 * Note that the validation of the url
 * argument should be performed before passing
 * the `url` argument to this validation.
 *
 * ### Example
 * ```
 * expect(isURLFragmentEqual(urlA, "/aa/bb/").value).toBeTruthy();
 * ```
 * @param url The url string
 * @param fragment The fragment string
 */
export function isURLFragmentEqual(
  url: string,
  fragment: string
): Result<boolean | undefined> {
  if (!isString(url).value) {
    return new Result(
      undefined,
      IS_URL_FRAGMENT_EQUAL_ERRORS.URL_ARGUMENT_NOT_A_STRING,
      [url]
    );
  }
  if (!isString(fragment).value) {
    return new Result(
      undefined,
      IS_URL_FRAGMENT_EQUAL_ERRORS.FRAGMENT_ARGUMENT_NOT_A_STRING,
      [fragment]
    );
  }
  const hash = new URL(url).hash;
  if (hash) {
    return new Result(fragment === new URL(url).hash.substring(1));
  }
  return new Result(fragment === '');
}