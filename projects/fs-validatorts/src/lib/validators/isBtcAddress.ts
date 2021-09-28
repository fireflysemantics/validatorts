import { assertString } from '../util/assertString';

// supports Bech32 addresses
const btc = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;

/**
 * Checks whether the `target` is a btc address 
 * 
 * @param target The target string
 * @return true if the `target` is a btc address, false otherwise
 */
export function isBtcAddress(str: string) {
  assertString(str);
  return btc.test(str);
}
