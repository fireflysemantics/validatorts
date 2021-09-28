import { assertString } from '../util/assertString';

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
export function isDataURI(target: string) {
  assertString(target);
  let data = target.split(',');
  if (data.length < 2) {
    return false;
  }
  const attributes = data && data.shift()!.trim().split(';');
  const schemeAndMediaType = attributes.shift();
  if (schemeAndMediaType!.substr(0, 5) !== 'data:') {
    return false;
  }
  const mediaType = schemeAndMediaType!.substr(5);
  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return false;
  }
  for (let i = 0; i < attributes.length; i++) {
    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {
      // ok
    } else if (!validAttribute.test(attributes[i])) {
      return false;
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (!validData.test(data[i])) {
      return false;
    }
  }
  return true;
}