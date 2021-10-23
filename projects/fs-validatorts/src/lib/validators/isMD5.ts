import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsMD5Errors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_MD5_ERRORS: IsMD5Errors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const md5 = /^[a-f0-9]{32}$/;

/**
 * Checks whether the `target` string is a valid MD5 checksum
 * 
 * @param target The target string
 * @return true if the `target` is a valid MD5 checksum, false otherwise
 */
export function isMD5(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_MD5_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(md5.test(target));
}