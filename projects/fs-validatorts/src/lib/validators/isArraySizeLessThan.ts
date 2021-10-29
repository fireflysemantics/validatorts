import { MessageFunctionType, Result } from "../types";
import { isArray } from "./isArray";

export interface IsArraySizeLessThanErrors {
    TARGET_ARGUMENT_NOT_AN_ARRAY: MessageFunctionType;
}

export const IS_ARRAY_SIZE_LESS_THAN_ERRORS: IsArraySizeLessThanErrors =
{
    TARGET_ARGUMENT_NOT_AN_ARRAY: (arr?: string[]) => {
        return `The target argument ${arr![0]} is not an array.`;
    }
};

/**
 * Checks if array's length is less than the `constraint`.
 * 
 * ### Example
 * ```
 * expect(isArraySizeLessThan([1,2], 3).value).toBeTruthy()
 * ```
 * 
 * @param array The value array being checked.
 * @param constraint The minimum size of the array
 */
export function isArraySizeLessThan(array: any[], constraint: number):Result<boolean|undefined> {
    if (!isArray(array).value) {
        return new Result(
            undefined,
            IS_ARRAY_SIZE_LESS_THAN_ERRORS.TARGET_ARGUMENT_NOT_AN_ARRAY,
            [constraint.toString()])
    }
    return new Result( array.length < constraint || false);
  }