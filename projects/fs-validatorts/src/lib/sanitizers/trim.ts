import { rtrim } from './rtrim';
import { ltrim }  from './ltrim';

import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface TrimErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  CHARS_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const TRIM_ERRORS: TrimErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  CHARS_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Trim characters (whitespace by default) 
 * from both sides of the input.
 * 
 * @param target The target
 * @param chars The characters
 */
export function trim(target:string, chars:string):Result<string|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      TRIM_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  if (!isString(chars)) {
    return new Result(
      undefined, 
      TRIM_ERRORS.CHARS_ARGUMENT_NOT_A_STRING,
      [chars])
  }
  return rtrim(ltrim(target, chars).value!, chars);
}