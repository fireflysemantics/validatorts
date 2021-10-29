import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsMacAddressErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_MAC_ADDRESS_ERRORS: IsMacAddressErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const macAddress = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
const macAddressNoSeparators = /^([0-9a-fA-F]){12}$/;
const macAddressWithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;

/**
 * Checks whether the `target` string is a valid MAC Address
 *    
 * ### Example
 * ```
 * expect(isMACAddress('ab:ab:ab:ab:ab:ab').value).toBeTruthy()
 * ```
 * @param target The target string
 * @param options The options
 */
export function isMACAddress(target:string, options:any):Result<boolean|undefined>  {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_MAC_ADDRESS_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  /**
   * @deprecated `no_colons` TODO: remove it in the next major
  */
   if (options && (options.no_colons || options.no_separators)) {
    return new Result(macAddressNoSeparators.test(target));
  }

  return new Result(macAddress.test(target)
    || macAddressWithDots.test(target));
}
