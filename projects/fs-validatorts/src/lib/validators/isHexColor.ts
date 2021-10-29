import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsHexColorErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_HEXCOLOR_ERRORS: IsHexColorErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

/**
 * Checks whether the `target` is hexcolor
 *    
 * ### Example
 * ```
 * expect(isHexColor('0xff0044').value).toBeTruthy()
 * ```
 * @param target The target
 */
export function isHexColor(target:string):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_HEXCOLOR_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(hexcolor.test(target));
}
