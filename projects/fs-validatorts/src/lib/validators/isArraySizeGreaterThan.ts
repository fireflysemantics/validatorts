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
 * Checks if array's length is greater than the target number.
 * If null or undefined is given then this function returns false.
 * 
 * @param array The value array being checked.
 * @param constraint The minimum size of the array
 * @returns True if array's length is greater than the target number, false otherwise.
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