import { Result } from '../types';
import { isDefined } from './isDefined';
import { isArray } from './isArray';

/**
 * Check if `target` is a valid port number
 * ### Example
 * ```
 * expect(isObject({}).value).toBeTruthy()
 * ```
 * @param target The port number
 *    
 */
export function isObject(target:any):Result<boolean|undefined>  {
  if (isDefined(target).value && !isArray(target).value) {
    return new Result(typeof target === 'object');
  }
  return new Result(false);
}