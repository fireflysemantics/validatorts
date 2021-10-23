import { isDate } from './isDate';
import { MessageFunctionType, Result } from '../types';

export interface IsAfterErrors {
  AFTER_ARGUMENT_NOT_A_DATE: MessageFunctionType;
  BEFORE_ARGUMENT_NOT_A_DATE: MessageFunctionType;
}

export const IS_AFTER_ERRORS: IsAfterErrors =
{
  AFTER_ARGUMENT_NOT_A_DATE: (arr?: string[]) => {
    return `The after argument ${arr![0]} is not a date.`;
  },
  BEFORE_ARGUMENT_NOT_A_DATE: (arr?: string[]) => {
    return `The before argument ${arr![0]} is not a date.`;
  }
};

/**
 * Checks whether the `target` date comes after the `arg` date
 * 
 * @param after The target date
 * @param before The argument to perform the comparison with 
 * @return true if the `after` date comes after the `before` date, false otherwise
 */
export function isAfter(after: Date, before: Date):Result<boolean | undefined> {
  if (!isDate(after).value) {
    return new Result(
      undefined, 
      IS_AFTER_ERRORS.AFTER_ARGUMENT_NOT_A_DATE, 
      [ after ? after.toString() : '' ])
  }
  if (!isDate(before).value) {
    return new Result(
      undefined, 
      IS_AFTER_ERRORS.AFTER_ARGUMENT_NOT_A_DATE, 
      [before ? before.toString() : ''])
  }
  return new Result(!!(after.getTime() > before.getTime()));
}