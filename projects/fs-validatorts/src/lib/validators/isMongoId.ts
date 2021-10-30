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
 * Tests whether the `target` string is a valid MongoID
 *    
 * ### Example
 * ```
 * expect(isMongoId('507f1f77bcf86cd799439011').value).toBeTruthy()
 * ```
 * @param target The target string
 */
export function isMongoId(target:string):Result<boolean|undefined>  {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_MONGO_ID_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(isHexadecimal(target).value && target.length === 24);
}