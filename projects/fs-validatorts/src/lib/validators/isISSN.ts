import { assertString } from '../util/assertString';

const issn = '^\\d{4}-?\\d{3}[\\dX]$';

/**
 * Checks whether the `target` string is a valid ISSN
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` is a valid ISSN, false otherwise
 */
export function isISSN(str:string, options: any = {}) {
  assertString(str);
  let testIssn: any = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(str)) {
    return false;
  }
  const digits = str.replace('-', '').toUpperCase();
  let checksum = 0;
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
  }
  return checksum % 11 === 0;
}
