import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsMagnetURIErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_MAGNET_URI_ERRORS: IsMagnetURIErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const magnetURI = /^magnet:\?xt(?:\.1)?=urn:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?($|&)/i;

/**
 * Checks whether the `target` string is a valid Magnet URI
 * ### Example
 * ```
 * expect(isMagnetURI('magnet:?xt.1=urn:sha1:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456&xt.2=urn:sha1:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456').value).toBeTruthy()
 * ```
 * 
 * @param target The target
 */
export function isMagnetURI(target:string):Result<boolean|undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_MAGNET_URI_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(magnetURI.test(target.trim()));
}
