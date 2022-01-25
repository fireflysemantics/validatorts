import { MessageFunctionType, Result } from '../types';
import { isString } from './isString';

export interface HasLowercaseCharactersErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const HAS_LOWERCASE_CHARACTERS_ERRORS: HasLowercaseCharactersErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Check if at least min lowercase 
 * characters appearing  
 * anywhere in the string`target`
 * has min characters 
 * anywhere in the string.
 *   
 * ### Example
 * ```
 * expect(hasNumericCharacters('a2', 2).value).toBeFalsy()
 * expect(hasNumericCharacters('a2a2', 2).value).toBeTruthy()
 * ```
 * @param target The target
 */
export function hasLowercaseCharacters(target:string, min:number):Result<boolean|undefined>  {
  const regex: RegExp = new RegExp(`([a-z].*){${min},}`);
  if (!isString(target).value) {
    return new Result(
      undefined, 
      HAS_LOWERCASE_CHARACTERS_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result((regex.test(target)));
}