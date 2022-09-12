import { MessageFunctionType, Result } from "../types";
import { isArray } from "./isArray";

export interface IsArraySizeGreaterThanErrors {
    TARGET_ARGUMENT_NOT_AN_ARRAY: MessageFunctionType;
}

export const IS_ARRAY_SIZE_GREATER_THAN_ERRORS: IsArraySizeGreaterThanErrors =
{
    TARGET_ARGUMENT_NOT_AN_ARRAY: (arr?: string[]) => {
        return `The target argument ${arr![0]} is not an array.`;
    }
};


/**
 * Tests if the `array`'s length is greater 
 * than the `constraint` number.
 * 
 * ### Example
 * ```
 * expect(isArraySizeGreaterThan([1,2], 1).value).toBeTruthy()
 * ```
 * @param array The array being checked.
 * @param constraint The size constraint
 */
export function isArraySizeGreaterThan(array: any[], constraint: number):Result<boolean|undefined> {
    if (!isArray(array).value) {
        return new Result(
            undefined,
            IS_ARRAY_SIZE_GREATER_THAN_ERRORS.TARGET_ARGUMENT_NOT_AN_ARRAY,
            [constraint.toString()])
    }
    return new Result( array.length > constraint || false);
  }