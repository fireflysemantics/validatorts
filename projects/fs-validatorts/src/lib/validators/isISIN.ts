import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsISINErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_ISIN_ERRORS: IsISINErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;


/**
 * Test whether the target string is an ISBN number.
 *    
 * ### Example
 * ```
 * expect(isISIN('AU0000XVGZA3').value).toBeTruthy()
 * ```
 * @param target The string
 */
export function isISIN(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_ISIN_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  if (!isin.test(target)) {
    return new Result(false);
  }

  const checksumStr = target.replace(/[A-Z]/g, character => {
    const intValue = (parseInt(character, 36))
    return intValue ? intValue.toString() : ''
  });

  let sum = 0;
  let digit;
  let tmpNum;
  let shouldDouble = true;
  for (let i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, (i + 1));
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return new Result(parseInt(target.substr(target.length - 1), 10) === (10000 - sum) % 10);
}
