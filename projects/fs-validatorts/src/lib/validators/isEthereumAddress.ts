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
 * Checks whether the `target` is an ethereum address
 * 
 * @param target The target string
 * @return true if the `target` is an ethereum address
 */
export function isEthereumAddress(target: string):Result<boolean | undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_ETHEREUM_ADDRESS_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(eth.test(target));
}