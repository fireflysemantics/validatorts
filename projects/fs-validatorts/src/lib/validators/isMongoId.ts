import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsMongoIDErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_MONGO_ID_ERRORS: IsMongoIDErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

import { isHexadecimal } from './isHexadecimal';

/**
 * Checks whether the `target` string is a valid MongoID
 * 
 * @param target The target string
 * @return true if the `target` is a valid MongoID, false otherwise
 */
export function isMongoId(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_MONGO_ID_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(isHexadecimal(target).value && target.length === 24);
}