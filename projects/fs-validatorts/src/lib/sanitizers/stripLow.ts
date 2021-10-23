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
