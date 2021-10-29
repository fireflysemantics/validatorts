import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface ToBooleanErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const TO_BOOLEAN_ERRORS: ToBooleanErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Convert the input string to a boolean. 
 * Everything except for '0', 
 * 'false' and '' returns true. 
 * In strict mode only '1' and 'true' return true.
 * 
 * @param target 
 * @param strict 
 */
export function toBoolean(target:string, strict:boolean):Result<boolean | undefined> {
  if (!isString(target)) {
    return new Result(
      undefined,
      TO_BOOLEAN_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  if (strict) {
    return new Result(target === '1' || /^true$/i.test(target));
  }
  return new Result( target !== '0' && !/^false$/i.test(target) && target !== '');
}