import { isString } from '../validators/isString';

import { MessageFunctionType, Result } from '../types';

export interface IsBase32Errors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_BASE32_ERRORS: IsBase32Errors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const base32 = /^[A-Z2-7]+=*$/;

/**
 * Checks whether the `target` is base32 encoded
 * 
 * @param target The target string
 * @return true if the `target` is base32 encoded, false otherwise
 */
export function isBase32(target: string) {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_BASE32_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  const len = target.length;
  if (len > 0 && len % 8 === 0 && base32.test(target)) {
    return new Result(true);
  }
  return new Result(false);
}
