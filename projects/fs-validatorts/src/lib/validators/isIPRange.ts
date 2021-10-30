import { isIP } from './isIP';
import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsIPRangeErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_IPRANGE_ERRORS: IsIPRangeErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const subnetMaybe = /^\d{1,3}$/;
const v4Subnet:number = 32;
const v6Subnet:number = 128;

/**
 * Tests whether the `target` is an IP range
 *    
 * ### Example
 * ```
 * expect(isIPRange('127.0.0.1/24').value).toBeTruthy()
 * ```
 * 
 * @param target The target string
 */
export function isIPRange(target:string, version:string = ''):Result<boolean|undefined>  {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_IPRANGE_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  const parts:any[] = target.split('/');

  // parts[0] -> ip, parts[1] -> subnet
  if (parts.length !== 2) {
    return new Result(false);
  }

  if (!subnetMaybe.test(parts[1])) {
    return new Result(false);
  }

  // Disallow preceding 0 i.e. 01, 02, ...
  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return new Result(false);
  }

  const isValidIP = isIP(parts[0], version);
  if (!isValidIP) {
    return new Result(false);
  }

    // Define valid subnet according to IP's version
    let expectedSubnet:number;
    switch (String(version)) {
      case '4':
        expectedSubnet = v4Subnet;
        break;
  
      case '6':
        expectedSubnet = v6Subnet;
        break;
  
      default:
        expectedSubnet = isIP(parts[0], '6') ? v6Subnet : v4Subnet;
    }
    return new Result(parts[1] <= expectedSubnet && parts[1] >= 0);
}


