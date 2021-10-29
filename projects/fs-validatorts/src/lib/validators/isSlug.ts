import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsSlugErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_SLUG_ERRORS: IsSlugErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};


let charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
/**
 * Check if `target` is a valid slug
 *   
 * ### Example
 * ```
 * expect(isSlug('foo').value).toBeTruthy()
 * ```
 * @param target The target
 */
export function isSlug(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_SLUG_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result((charsetRegex.test(target)));
}