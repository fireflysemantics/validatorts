import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsBicErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_BIC_ERRORS: IsBicErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const isBICReg = /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/;


/**
 * Checks whether the `target` is BIC encoded
 * 
 * @param target The target string
 * @return true if the `target` is BIC encoded, false otherwise
 */
export function isBIC(target: string):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_BIC_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  return new Result( isBICReg.test(target));
}
