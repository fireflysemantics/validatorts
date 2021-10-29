import { StringKeyRegEx } from '../types';
import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsUUIDErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_UUID_ERRORS: IsUUIDErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const uuid:StringKeyRegEx = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};

/**
 * Checks whether the `target` is a valid UUID
 *    
 * ### Example
 * ```
 * expect(isUUID('A987FBC9-4BED-3078-CF07-9141BA07C9F3').value).toBeTruthy()
 * ```
 * @param target The target string
 * @param version The version
 */
export function isUUID(target:string, version?:string):Result<boolean|undefined>  {
  version = version ? version : 'all'
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_UUID_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  const pattern = uuid[version];
  return new Result(pattern && pattern.test(target));
}