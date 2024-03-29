import { isString } from '../validators/isString';

import { MessageFunctionType, Result } from '../types';
import { merge } from '../utilities/merge';

export interface IsBase64Errors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_BASE64_ERRORS: IsBase64Errors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const notBase64 = /[^A-Z0-9+\/=]/i;
const urlSafeBase64 = /^[A-Z0-9_\-]*$/i;

const defaultBase64Options = {
  urlSafe: false,
};

/**
 * Checks whether the `target` is base64 encoded
 * 
 * ### Example
 * ```
 * expect(isBase32('ZG======')).toBeTruthy()
 * ```
 * 
 * @param target The target string
 */
export function isBase64(target: string, options?:any):Result<boolean|undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_BASE64_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  options = merge(options, defaultBase64Options);

  const len = target.length;

  if (options.urlSafe) {
    return new Result(urlSafeBase64.test(target));
  }

  if (len % 4 !== 0 || notBase64.test(target)) {
    return new Result(false);
  }
  const firstPaddingChar = target.indexOf('=');
  return new Result(firstPaddingChar === -1 ||
    firstPaddingChar === len - 1 ||
    (firstPaddingChar === len - 2 && target[len - 1] === '='));
}
