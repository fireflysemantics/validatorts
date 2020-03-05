import { assertString } from '../util/assertString';

const isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;


/**
 * Test whether the target string is an ISBN number.
 * 
 * @param target The string
 * @return true if the `target` string is an ISIN number, false otherwise
 */
export function isISIN(target:string) {
  assertString(target);
  if (!isin.test(target)) {
    return false;
  }

  const checksumStr = target.replace(/[A-Z]/g, character => {
    const intValue = (parseInt(character, 36))
    return intValue ? intValue.toString() : ''
  });

  let sum = 0;
  let digit;
  let tmpNum;
  let shouldDouble = true;
  for (let i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, (i + 1));
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }

  return parseInt(target.substr(target.length - 1), 10) === (10000 - sum) % 10;
}
