import { MessageFunctionType, Result } from '../types';
import { isObject } from './isObject';

export interface IsInObjectValuesErrors {
  OBJECT_ARGUMENT_NOT_AN_OBJECT: MessageFunctionType;
}

export const IS_IN_OBJECT_VALUES_ERRORS: IsInObjectValuesErrors =
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
 * expect(isInObjectValues('foo', {f:'foo'}).value).toBeTruthy()
 * ```
 * @param target The target string
 * @param options The options
 */
export function isInObjectValues(target: any, object:any):Result<boolean|undefined> {
  if (!isObject(object)) {
    return new Result(
      undefined, 
      IS_IN_OBJECT_VALUES_ERRORS.OBJECT_ARGUMENT_NOT_AN_OBJECT,
      [object])
  }
  const values:any[] = Object.values(object)
  return new Result(values.indexOf(target) >= 0);
}