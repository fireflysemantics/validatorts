import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsBtcErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_BTC_ERRORS: IsBtcErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};


// supports Bech32 addresses
const bech32 = /^(bc1)[a-z0-9]{25,39}$/;
const base58 = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
/**
 * Checks whether the `target` is a btc address 
 *   
 * ### Example
 * ```
 * expect(isBtcAddress('1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL').value).toBeTruthy()
 * ``` 
 * @param target The target
 */
export function isBtcAddress(target: string): Result<boolean | undefined> {
  if (!isString(target)) {
    return new Result(
      undefined,
      IS_BTC_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  if (target.startsWith('bc1')) {
    return new Result(bech32.test(target));
  }
  return new Result(base58.test(target));
}
