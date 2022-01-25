import { MessageFunctionType, Result } from '../types';
import { isString } from './isString';

export interface HasSpecialCharactersErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const HAS_SPECIAL_CHARACTERS_ERRORS: HasSpecialCharactersErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Check if at least min special
 * characters appear anywhere in 
 * the string`target`
 *   
 * ### Example
 * ```
 * expect(hasNumericCharacters('a2', 2).value).toBeFalsy()
 * expect(hasNumericCharacters('#a2a2@', 2).value).toBeTruthy()
 * ```
 * @param target The target
 */
export function hasSpecialCharacters(target:string, min:number):Result<boolean|undefined>  {
//  const regex: RegExp = new RegExp(`([a-z].*){${min},}`);

const regex = RegExp(`([#*.!@$%^&(){}[\\]:;<>,.?/~_+\\-=|\\\\].*){${min},}`);
  if (!isString(target).value) {
    return new Result(
      undefined, 
      HAS_SPECIAL_CHARACTERS_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result((regex.test(target)));
}