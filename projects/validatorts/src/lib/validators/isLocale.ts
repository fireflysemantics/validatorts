import { assertString } from '../util/assertString';

const localeReg = /^[A-z]{2,4}([_-]([A-z]{4}|[\d]{3}))?([_-]([A-z]{2}|[\d]{3}))?$/;

/**
 * Checks whether the `target` string is a valid locale
 * 
 * @param target The target string
 * @return true if the `target` is a valid locale, false otherwise
 */
export function isLocale(target:string) {
  assertString(target);
  if (target === 'en_US_POSIX' || target === 'ca_ES_VALENCIA') {
    return true;
  }
  return localeReg.test(target);
}
