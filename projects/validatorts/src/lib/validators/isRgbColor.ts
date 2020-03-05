import { assertString } from '../util/assertString';

const rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
const rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
const rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/;
const rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;

/**
 * Check if `target` is a valid RGB color
 *
 * @param target The RGB color
 * @return true if the `target` is a valid RGB color, false otherwise
 * 
 */
export function isRgbColor(target:string, includePercentValues:string = `true`) {
  assertString(target);

  if (!includePercentValues) {
    return rgbColor.test(target) || rgbaColor.test(target);
  }

  return rgbColor.test(target) ||
    rgbaColor.test(target) ||
    rgbColorPercent.test(target) ||
    rgbaColorPercent.test(target);
}
