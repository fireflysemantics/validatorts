import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsEthereumAddressErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_ETHEREUM_ADDRESS_ERRORS: IsEthereumAddressErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const eth = /^(0x)[0-9a-f]{40}$/i;

/**
 * Tests whether the `target` is an ethereum address
 * 
 *    
 * ### Example
 * ```
 * expect(isEthereumAddress('0x0000000000000000000000000000000000000001').value).toBeTruthy()
 * ```
 * 
 * @param target The target string
 * 
 */
export function isEthereumAddress(target: string):Result<boolean | undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_ETHEREUM_ADDRESS_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(eth.test(target));
}