import { MessageFunctionType, Result } from '../types';
import { isFloat } from '../validators/isFloat';

export interface ToFloatErrors {
  TARGET_IS_NOT_A_FLOAT: MessageFunctionType;
}

export const TO_FLOAT_ERRORS: ToFloatErrors =
{
  TARGET_IS_NOT_A_FLOAT: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a float.`;
  }
};


export function toFloat(target:string):Result<number | undefined> {
  if (!isFloat(target)) {
    return new Result(
      undefined,
      TO_FLOAT_ERRORS.TARGET_IS_NOT_A_FLOAT,
      [target])
  }
  return new Result(parseFloat(target));
}
