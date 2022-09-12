import { MessageFunctionType, Result } from '../types';
import { isObject } from './isObject';

export interface IsInObjectKeysErrors {
  OBJECT_ARGUMENT_NOT_AN_OBJECT: MessageFunctionType;
}

export const IS_IN_OBJECT_KEYS_ERRORS: IsInObjectKeysErrors =
{
  OBJECT_ARGUMENT_NOT_AN_OBJECT: (arr?: string[]) => {
    return `The object argument ${arr![0]} is not an object.`;
  }
};

/**
 * Tests whether the `target` string is in the array of allowed values
 * 
 * ### Example
 * ```
 * expect(isInObjectKeys('foo', {foo:'f'}).value).toBeTruthy()
 * ```
 * @param target The target string
 * @param options The options
 */
export function isInObjectKeys(target: any, object: any): Result<boolean | undefined> {
  if (!isObject(object).value) {
    return new Result(
      undefined,
      IS_IN_OBJECT_KEYS_ERRORS.OBJECT_ARGUMENT_NOT_AN_OBJECT,
      [object])
  }
  const keys: any[] = Object.keys(object)
  return new Result(keys.indexOf(target) >= 0);
}