import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsISSNErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_ISSN_ERRORS: IsISSNErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const issn = '^\\d{4}-?\\d{3}[\\dX]$';

/**
 * Tests whether the `target` string is a valid ISSN
 *
 * ### Example
 * ```
 * expect(isISSN('0378-5955').value).toBeTruthy()
 * ```
 * @param target The target
 * @param options The options
 */
export function isISSN(target: string, options: any = {}): Result<boolean | undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined,
      IS_ISSN_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  let testIssn: any = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(target)) {
    return new Result(false);
  }
  const digits = target.replace('-', '').toUpperCase();
  let checksum = 0;
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
  }
  return new Result(checksum % 11 === 0);
}
