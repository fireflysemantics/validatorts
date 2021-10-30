import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsISBNErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_ISBN_ERRORS: IsISBNErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
const isbn13Maybe = /^(?:[0-9]{13})$/;
const factor = [1, 3];

/**
 * Test whether the target string is an ISBN number.
 *    
 * ### Example
 * ```
 * expect(isISBN('3836221195').value).toBeTruthy()
 * ```
 * 
 * @param target The string
 * @param version The ISBN version
 */
export function isISBN(target: string, version: string = ''):Result<boolean|undefined>  {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_ISBN_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
    version = String(version);
  if (!version) {
    return isISBN(target, '10') || isISBN(target, '13');
  }
  const sanitized = target.replace(/[\s-]+/g, '');
  let checksum = 0;
  let i;
  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return new Result(false);
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * parseInt(sanitized.charAt(i));
    }
    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * parseInt(sanitized.charAt(9));
    }
    if (checksum % 11 === 0) {
      return new Result(!!sanitized);
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return new Result(false);
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * parseInt(sanitized.charAt(i));
    }
    if (parseInt(sanitized.charAt(12)) - ((10 - (checksum % 10)) % 10) === 0) {
      return new Result(!!sanitized);
    }
  }
  return new Result(false);
}