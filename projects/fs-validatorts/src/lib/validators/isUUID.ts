import { StringKeyRegEx } from '../types';
import { assertString } from '../util/assertString';

const uuid:StringKeyRegEx = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};

/**
 * Checks whether the `target` is a valid UUID
 * 
 * @param target The target string
 * @param version The version
 * @return true if the `target` is  a valid UUID, false otherwise
 */
export function isUUID(str:string, version?:string) {
  version = version ? version : 'all'
  assertString(str);
  const pattern = uuid[version];
  return pattern && pattern.test(str);
}