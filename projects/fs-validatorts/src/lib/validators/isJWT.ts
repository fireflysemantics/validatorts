import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';
import { isBase64 } from './isBase64';

export interface IsJWTErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_JWT_ERRORS: IsJWTErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Checks whether the `target` string is a valid JWT
 * 
 * @param target The target string
 * @return true if the `target` is a valid JWT, false otherwise
 */
export function isJWT(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_JWT_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }

  const dotSplit = target.split('.');
  const len = dotSplit.length;

  if (len > 3 || len < 2) {
    return new Result(false);
  }
  return new Result(dotSplit.reduce((acc:any, currElem:any) => acc && isBase64(currElem, { urlSafe: true }).value, true));
}