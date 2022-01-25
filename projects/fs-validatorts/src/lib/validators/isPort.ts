import { isIntString } from './isIntString';
import { MessageFunctionType, Result } from '../types';
import { isString } from './isString';

export interface IsPortErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_PORT_ERRORS: IsPortErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Check if `target` is a valid port number
 *    
 * ### Example
 * ```
 * expect(().value).toBeTruthy()
 * ```
 *
 * @param target The port number
 * 
 * ### Example 
 *
 * expect(isPort('4200').value).toBeTruthy() 
 *
 */
export function isPort(target:string):Result<boolean|undefined>  {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_PORT_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return isIntString(target, { min: 0, max: 65535 });
}