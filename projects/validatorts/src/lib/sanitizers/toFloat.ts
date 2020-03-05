import { isFloat } from '../validators/isFloat';

export function toFloat(str) {
  if (!isFloat(str)) return NaN;

  return parseFloat(str);
}
