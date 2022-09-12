import { contains } from "./contains";
import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsNotSubStringErrors {
    TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
    CONTAINED_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_NOT_SUBSTRING_ERRORS: IsNotSubStringErrors =
{
    TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
        return `The target argument ${arr![0]} is not a string.`;
    },
    CONTAINED_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
        return `The contained argument ${arr![0]} is not a string.`;
    }
};

/**
 * Checks if the value is not a substring of the target.
 * If given value is not a string, then it returns false.
 *
 * ### Example
 * ```
 * expect(isNotSubString("3", "2").value).toBeTruthy()
 * ```
 * @param contained The value that may be contained.
 * @param target The target value to perform the check against.
 */
export function isNotSubString(contained: string, target: string): Result<boolean | undefined> {
    if (!isString(contained).value) {
        return new Result(
            undefined,
            IS_NOT_SUBSTRING_ERRORS.CONTAINED_ARGUMENT_NOT_A_STRING,
            [contained])
    }
    if (!isString(target).value) {
        return new Result(
            undefined,
            IS_NOT_SUBSTRING_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
            [target])
    }
    return new Result(!contains(target, contained).value);
}