import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface RTrimErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  CHARS_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const RTRIM_ERRORS: RTrimErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  CHARS_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The chars argument ${arr![0]} is not a string.`;
  }
};


/**
 * 
 * @param target The target
 * @param chars The charachters
 */
export function rtrim(target:string, chars:string):Result<string|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      RTRIM_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  if (!isString(chars)) {
    return new Result(
      undefined, 
      RTRIM_ERRORS.CHARS_ARGUMENT_NOT_A_STRING, 
      [chars])
  }  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
  const pattern = chars ? new RegExp(`[${chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]+$`, 'g') : /\s+$/g;
  return new Result(target.replace(pattern, ''));
}