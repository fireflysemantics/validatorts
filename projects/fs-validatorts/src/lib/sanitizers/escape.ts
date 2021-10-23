import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface EscapeErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const ESCAPE_ERRORS: EscapeErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Replaces <, >, &, ', " and / with HTML entities. 
 * @param target The string to perform the `escape` operation on.
 */
export function escape(target:string):Result<string|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined,
      ESCAPE_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(
    target.replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\//g, '&#x2F;')
    .replace(/\\/g, '&#x5C;')
    .replace(/`/g, '&#96;'))
}