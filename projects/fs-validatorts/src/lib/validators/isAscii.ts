import { isString } from '../validators/isString';

import { MessageFunctionType, Result } from '../types';

export interface IsAsciiErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_ASCII_ERRORS: IsAsciiErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};


/* eslint-disable no-control-regex */
const ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

/**
 * Checks whether the `target` conforms to the ascii standard
 * 
 * @param target The target string
 * @return true if the `target` conforms to the ascii standard, false otherwise
 */
export function isAscii(target: string):Result<boolean | undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_ASCII_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
 return new Result(ascii.test(target));
}