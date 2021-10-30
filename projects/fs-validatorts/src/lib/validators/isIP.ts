import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsIPErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_IP_ERRORS: IsIPErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
11.3.  Examples
   The following addresses
             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)
   would be represented as follows:
             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10
   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)
   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:
            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10
   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */
   const IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
   const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
   const IPv4AddressRegExp = new RegExp(`^${IPv4AddressFormat}$`);
   
   const IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
   const IPv6AddressRegExp = new RegExp('^(' +
     `(?:${IPv6SegmentFormat}:){7}(?:${IPv6SegmentFormat}|:)|` +
     `(?:${IPv6SegmentFormat}:){6}(?:${IPv4AddressFormat}|:${IPv6SegmentFormat}|:)|` +
     `(?:${IPv6SegmentFormat}:){5}(?::${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,2}|:)|` +
     `(?:${IPv6SegmentFormat}:){4}(?:(:${IPv6SegmentFormat}){0,1}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,3}|:)|` +
     `(?:${IPv6SegmentFormat}:){3}(?:(:${IPv6SegmentFormat}){0,2}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,4}|:)|` +
     `(?:${IPv6SegmentFormat}:){2}(?:(:${IPv6SegmentFormat}){0,3}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,5}|:)|` +
     `(?:${IPv6SegmentFormat}:){1}(?:(:${IPv6SegmentFormat}){0,4}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,6}|:)|` +
     `(?::((?::${IPv6SegmentFormat}){0,5}:${IPv4AddressFormat}|(?::${IPv6SegmentFormat}){1,7}|:))` +
     ')(%[0-9a-zA-Z-.:]{1,})?$');

/**
 * Tests whether the `target` string is an int
 *    
 * ### Example
 * ```
 * expect(isIP('127.0.0.1').value).toBeTruthy()
 * ```
 * 
 * @param target The target string
 * @param version The version
 */

 export function isIP(target:string, version:string=''):Result<boolean | undefined> {
   console.log(`THE VERSION IS: ${version}`)
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_IP_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  version = String(version);
  if (!version) {
    const result =  isIP(target, '4').value ?  isIP(target, '4') : isIP(target, '6')
    return result
  }
  if (version === '4') {
    if (!IPv4AddressRegExp.test(target)) {
      return new Result(false);
    }
    const parts:any[] = target.split('.').sort((a:any, b:any) => a - b);
    return new Result(parts[3] <= 255);
  }
  if (version === '6') {
    console.log("TRYING SIX")
    console.log(`!!IPv6AddressRegExp.test(target): ${!!IPv6AddressRegExp.test(target)}`)

    return new Result(!!IPv6AddressRegExp.test(target));
  }
  return new Result(false);
}