import { isFloat } from '../validators/isFloat';

export function toFloat(str:string) {
  if (!isFloat(str)) return NaN;

  return parseFloat(str);
}
