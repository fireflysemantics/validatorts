import { isDate } from './isDate';
import { MessageFunctionType, Result } from '../types';

export interface IsBeforeErrors {
  AFTER_ARGUMENT_NOT_A_DATE: MessageFunctionType;
  BEFORE_ARGUMENT_NOT_A_DATE: MessageFunctionType;
}

export const IS_BEFORE_ERRORS: IsBeforeErrors =
{
  AFTER_ARGUMENT_NOT_A_DATE: (arr?: string[]) => {
    return `The after argument ${arr![0]} is not a date.`;
  },
  BEFORE_ARGUMENT_NOT_A_DATE: (arr?: string[]) => {
    return `The before argument ${arr![0]} is not a date.`;
  }
};

/**
 * Checks whether the `before` date comes before the `after` date
 * 
 * @param before The before date
 * @param after The after date  
 * @return true if the `before` date comes before the `after` date, false otherwise
 * @example 
 * ```
 * expect(isBefore(new Date(1), new Date(2)).value).toBeTruthy()
 * ```
 */
export function isBefore(before: Date, after: Date):Result<boolean|undefined> {
  if (!isDate(after).value) {
    return new Result(
      undefined, 
      IS_BEFORE_ERRORS.AFTER_ARGUMENT_NOT_A_DATE, 
      [ after ? after.toString() : '' ])
  }
  if (!isDate(before).value) {
    return new Result(
      undefined, 
      IS_BEFORE_ERRORS.BEFORE_ARGUMENT_NOT_A_DATE, 
      [before ? before.toString() : ''])
  }
  return new Result(!!(after && before && before.getTime() < after.getTime()));
}
