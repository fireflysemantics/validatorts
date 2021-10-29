import { MessageFunctionType, Result } from '../types';
import { isArray } from './isArray';

export interface IsInArrayErrors {
    TARGET_ARGUMENT_NOT_AN_ARRAY: MessageFunctionType;
}

export const IS_IN_ARRAY_ERRORS: IsInArrayErrors =
{
    TARGET_ARGUMENT_NOT_AN_ARRAY: (arr?: string[]) => {
        return `The target argument ${arr![0]} is not a array.`;
    }
};

/**
 * Tests whether the `target` string is in the array of allowed values
 *    
 * ### Example
 * ```
 * expect(().value).toBeTruthy()
 * ```
 * @param value The value that may be in the array
 * @param array The array
 */
export function isInArray(value: any, array: any[]): Result<boolean | undefined> {
    if (!isArray(array)) {
        return new Result(
            undefined,
            IS_IN_ARRAY_ERRORS.TARGET_ARGUMENT_NOT_AN_ARRAY,
            [array ? array.toString() : ''])
    }
    return new Result( array.indexOf(value) >= 0 );
}