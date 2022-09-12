import { MessageFunctionType, Result } from "../types";
import { isArray } from "./isArray";

export interface IsArrayUniqueErrors {
    TARGET_ARGUMENT_NOT_AN_ARRAY: MessageFunctionType;
}

export const IS_ARRAY_UNIQUE_ERRORS: IsArrayUniqueErrors =
{
    TARGET_ARGUMENT_NOT_AN_ARRAY: (arr?: string[]) => {
        return `The target argument ${arr![0]} is not an array.`;
    }
};

/**
 * Tests whether all `array`'s values are unique. 
 * 
 * ### Example
 * ```
 * expect(isArrayUnique([1,2])).toBeTruthy()
 * ```
 * 
 * @param array The array.
 */
 export function isArrayUnique(array: any[]):Result<boolean | undefined> {
    if (!isArray(array).value) {
        return new Result(
            undefined,
            IS_ARRAY_UNIQUE_ERRORS.TARGET_ARGUMENT_NOT_AN_ARRAY,
            [array.toString()])
    }
  
    const uniqueItems = array.filter((a, b, c) => c.indexOf(a) === b);
    return new Result(array.length === uniqueItems.length);
  }