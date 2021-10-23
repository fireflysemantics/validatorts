import { isInt } from './isInt';
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
 * @param target The port number
 * @return true if the `target` is a port number, false otherwise
 * 
 * @example
```
const isPortNumber:boolean = isPort('4200')
```
 */
export function isPort(target:string):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_PORT_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return isInt(target, { min: 0, max: 65535 });
}
