import { MessageFunctionType, Result } from '../types';
import { isString } from './isString';

export interface HasLowerCaseCharactersErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const HAS_LOWERCASE_CHARACTERS_ERRORS: HasLowerCaseCharactersErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Check if at least min lowercase 
 * characters appear 
 * anywhere in the string`target`
 *   
 * ### Example
 * ```
 * expect(hasNumericCharacters('a2', 2).value).toBeFalsy()
 * expect(hasNumericCharacters('a2a2', 2).value).toBeTruthy()
 * ```
 * @param target The target
 */
export function hasLowerCaseCharacters(target:string, min:number):Result<boolean|undefined>  {
  const regex: RegExp = new RegExp(`([a-z].*){${min},}`);
  if (!isString(target).value) {
    return new Result(
      undefined, 
      HAS_LOWERCASE_CHARACTERS_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  //===========================================
  // Strip the non lowercase characters 
  //===========================================
  const result = target.replace(/[^a-z]+/g, "").length >= min
  return new Result(result);
}