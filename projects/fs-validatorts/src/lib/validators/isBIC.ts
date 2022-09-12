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
 * Tests whether the `target` is BIC encoded
 * 
 * ### Example
 * ```
 * expect(isBIC(SBICKEN1).value).toBeTruthy()
 * ```
 * @param target The target string
 */
export function isBIC(target: string):Result<boolean|undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_BIC_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  return new Result( isBICReg.test(target));
}