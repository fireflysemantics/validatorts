import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsDataURIErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_DATA_URI_ERRORS: IsDataURIErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;

const validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;

const validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

/**
 * Checks whether the `target` string is a data URI
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` is a data URI, false otherwise
 */
export function isDataURI(target: string):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_DATA_URI_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  let data = target.split(',');
  if (data.length < 2) {
    return new Result(false);
  }
  const attributes = data && data.shift()!.trim().split(';');
  const schemeAndMediaType = attributes.shift();
  if (schemeAndMediaType!.substr(0, 5) !== 'data:') {
    return new Result(false);
  }
  const mediaType = schemeAndMediaType!.substr(5);
  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return new Result(false);
  }
  for (let i = 0; i < attributes.length; i++) {
    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {
      // ok
    } else if (!validAttribute.test(attributes[i])) {
      return new Result(false);
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (!validData.test(data[i])) {
      return new Result(false);
    }
  }
  return new Result(true);
}