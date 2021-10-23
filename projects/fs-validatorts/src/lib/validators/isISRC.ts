import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsISRCErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_ISRC_ERRORS: IsISRCErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
const isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;


/**
 * Checks whether the `target` string is a valid ISRC
 * 
 * @param target The target string
 * @return true if the `target` is a valid ISRC, false otherwise
 */
export function isISRC(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_ISRC_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(isrc.test(target));
}