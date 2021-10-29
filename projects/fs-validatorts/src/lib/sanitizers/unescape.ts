import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface UnescapeErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const UNESCAPE_ERRORS: UnescapeErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Replaces HTML encoded entities with <, >, &, ', " and /.
 * 
 * @param target The target
 */
export function unescape(target:string):Result<string | undefined> {
  if (!isString(target)) {
    return new Result(
      undefined,
      UNESCAPE_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }

  return new Result((target.replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x2F;/g, '/')
    .replace(/&#x5C;/g, '\\')
    .replace(/&#96;/g, '`')));
}