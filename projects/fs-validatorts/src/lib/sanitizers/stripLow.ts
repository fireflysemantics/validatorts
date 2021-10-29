import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface StripLowErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const STRIP_LOW_ERRORS: StripLowErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};


import { blacklist } from './blacklist';

/**
 * Remove characters with a numerical 
 * value < 32 and 127, mostly control characters. 
 * 
 * If keep_new_lines is true, 
 * newline characters are preserved (\n and \r, hex 0xA and 0xD). 
 * Unicode-safe in JavaScript.
 * 
 * @param target The target
 * @param keep_new_lines 
 */
export function stripLow(target:string, keep_new_lines:boolean) {
  if (!isString(target)) {
    return new Result(
      undefined, 
      STRIP_LOW_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  const chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return new Result(blacklist(target, chars));
}
