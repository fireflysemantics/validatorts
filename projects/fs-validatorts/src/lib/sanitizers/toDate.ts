import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface ToDateErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
  TARGET_ARGUMENT_COULD_NOT_BE_PARSED: MessageFunctionType;
}

export const TO_DATE_ERRORS: ToDateErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  },
  TARGET_ARGUMENT_COULD_NOT_BE_PARSED: (arr?: string[]) => {
    return `The target date representation argument ${arr![0]} could not be parsed.`;
  }
};

/**
 * Convert the input string to a date, 
 * or null if the input is not a date.
 * 
 * @param target The target
 */
export function toDate(target: string):Result<Date | undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined,
      TO_DATE_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  const millis: number = Date.parse(target);
  if (isNaN(millis)) {
    return new Result(
      undefined,
      TO_DATE_ERRORS.TARGET_ARGUMENT_COULD_NOT_BE_PARSED,
      [target])
  }
  return new Result(new Date(target));
}