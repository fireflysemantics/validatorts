import { MessageFunctionType, Result } from '../types';
import { isInt } from '../validators/isInt';

export interface ToIntErrors {
  TARGET_IS_NOT_A_INT: MessageFunctionType;
}

export const TO_INT_ERRORS: ToIntErrors =
{
  TARGET_IS_NOT_A_INT: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not an int.`;
  }
};

export function toInt(target:string, radix:number):Result<number|undefined> {
  if (!isInt(target, radix)) {
    return new Result(
      undefined,
      TO_INT_ERRORS.TARGET_IS_NOT_A_INT,
      [target])
  }
  return new Result(parseInt(target, radix || 10));
}