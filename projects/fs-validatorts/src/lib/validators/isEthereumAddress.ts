import { assertString } from '../util/assertString';

const eth = /^(0x)[0-9a-f]{40}$/i;

/**
 * Checks whether the `target` is an ethereum address
 * 
 * @param target The target string
 * @return true if the `target` is an ethereum address
 */
export function isEthereumAddress(str: string) {
  assertString(str);
  return eth.test(str);
}