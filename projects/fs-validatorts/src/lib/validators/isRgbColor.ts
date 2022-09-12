import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsRgbColorErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_RGB_COLOR_ERRORS: IsRgbColorErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
const rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
const rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/;
const rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;

/**
 * Check if `target` is a valid RGB color
 *
 * ### Example
 * ```
 * expect(isRgbColor('rgb(0,0,0)').value).toBeTruthy()
 * ```
 * @param target The RGB color
 * 
 */
export function isRgbColor(target:string, includePercentValues:string = `true`):Result<boolean|undefined>  {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_RGB_COLOR_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }

  if (!includePercentValues) {
    return new Result(rgbColor.test(target) || rgbaColor.test(target));
  }

  return new Result(rgbColor.test(target) ||
    rgbaColor.test(target) ||
    rgbColorPercent.test(target) ||
    rgbaColorPercent.test(target));
}