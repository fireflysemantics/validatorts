import { assertString } from '../util/assertString';

const macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressNoColons = /^([0-9a-fA-F]){12}$/;
const macAddressWithHyphen = /^([0-9a-fA-F][0-9a-fA-F]-){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressWithSpaces = /^([0-9a-fA-F][0-9a-fA-F]\s){5}([0-9a-fA-F][0-9a-fA-F])$/;

/**
 * Checks whether the `target` string is a valid MAC Address
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` is a valid Mac Address, false otherwise
 */
export function isMACAddress(target:string, options:any) {
  assertString(target);
  if (options && options.no_colons) {
    return macAddressNoColons.test(target);
  }
  return macAddress.test(target) || macAddressWithHyphen.test(target) || macAddressWithSpaces.test(target);
}
