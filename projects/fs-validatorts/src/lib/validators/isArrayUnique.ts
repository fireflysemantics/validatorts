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
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 * If null or undefined is given then this function returns false.
 * 
 * @param value The array being checked.
 * @returns True if all array's values are unique, false otherwise.
 */
 export function isArrayUnique(target: any[]):Result<boolean | undefined> {
    if (!isArray(target).value) {
        return new Result(
            undefined,
            IS_ARRAY_UNIQUE_ERRORS.TARGET_ARGUMENT_NOT_AN_ARRAY,
            [target.toString()])
    }
  
    const uniqueItems = target.filter((a, b, c) => c.indexOf(a) === b);
    return new Result(target.length === uniqueItems.length);
  }