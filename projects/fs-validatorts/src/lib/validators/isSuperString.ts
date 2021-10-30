import { contains } from "./contains";
import { MessageFunctionType, Result } from '../types';
import { isString } from './isString';

export interface IsSuperStringErrors {
    TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
    VALUE_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_SUPER_STRING_ERRORS: IsSuperStringErrors =
{
    TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
        return `The target argument ${arr![0]} is not a string.`;
    },
    VALUE_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
        return `The value argument ${arr![0]} is not a string.`;
    }
};

/**
 * Checks if the string value does not contain the target.
 *    
 * ### Example
 * ```
 * expect(isSuperString("fooboo", "foo").value).toBeTruthy();
 * ```
 * @param superString The value being checked.
 * @param subString The target value to perform the check against.
 */
export function isSuperString(superString: string, subString: string): Result<boolean | undefined> {
    if (!isString(superString).value) {
        return new Result(
            undefined,
            IS_SUPER_STRING_ERRORS.VALUE_ARGUMENT_NOT_A_STRING,
            [superString])
    }
    if (!isString(subString).value) {
        return new Result(
            undefined,
            IS_SUPER_STRING_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
            [subString])
    }
    return new Result(contains(superString, subString).value);
}