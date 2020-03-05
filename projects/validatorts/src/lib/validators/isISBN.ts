import { assertString } from '../util/assertString';

const isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
const isbn13Maybe = /^(?:[0-9]{13})$/;
const factor = [1, 3];

/**
 * Test whether the target string is an ISBN number.
 * 
 * @param target The string
 * @param arg The ISBN version
 * @return true if the `target` string is an ISBN number, false otherwise
 */
export function isISBN(target: string, arg: string = '') {
  assertString(target);
  arg = String(arg);
  if (!arg) {
    return isISBN(target, '10') || isISBN(target, '13');
  }
  const sanitized: string = target.replace(/[\s-]+/g, '');
  let checksum = 0;
  let i;
  if (arg === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * parseInt(sanitized.charAt(i));
    }
    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * parseInt(sanitized.charAt(9));
    }
    if ((checksum % 11) === 0) {
      return !!sanitized;
    }
  } else if (arg === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * parseInt(sanitized.charAt(i));
    }
    if (parseInt(sanitized.charAt(12)) - ((10 - (checksum % 10)) % 10) === 0) {
      return !!sanitized;
    }
  }
  return false;
}