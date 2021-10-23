import { MessageFunctionType, Result } from "../types";
import { isArray } from "./isArray";

export interface IsArrayContainerOfErrors {
    CONTAINER_ARGUMENT_NOT_AN_ARRAY: MessageFunctionType;
    VALUES_ARGUMENT_NOT_AN_ARRAY: MessageFunctionType;
}

export const IS_ARRAY_CONTAINER_OF_ERRORS: IsArrayContainerOfErrors =
{
    CONTAINER_ARGUMENT_NOT_AN_ARRAY: (arr?: string[]) => {
        return `The container argument ${arr![0]} is not an array.`;
    },
    VALUES_ARGUMENT_NOT_AN_ARRAY: (arr?: string[]) => {
        return `The values argument ${arr![0]} is not an array.`;
    }
};

/**
 * Checks if value array contains all values from the given target array.
 * If value is null, undefined, or not an array instance
 * then this function returns false.
 * 
 * The values check should be primitive javascript types (String, number, boolean, null, undefined, etc.).
 * and not Object instances.
 * 
 * Note that the check is value based.  For example the values 
 * in the array [2,3,4,2] are contained by [2,3,4] even though the latter
 * is shorter. 
 * 
 * @param container The container.
 * @param values The array of values that may be contained.
 * @returns True if array contains all values from the given target array, false otherwise.
 * @example
 * ```
 * expect(isArrayContainerOf([2,3,4,2], [2,3,4])).value).toBeTruthy()
 * ```
 */
export function isArrayContainerOf(container: any[], values: any[]): Result<boolean | undefined> {
    if (!isArray(container).value) {
        return new Result(
            undefined,
            IS_ARRAY_CONTAINER_OF_ERRORS.CONTAINER_ARGUMENT_NOT_AN_ARRAY,
            [container.toString()])
    }
    if (!isArray(values).value) {
        return new Result(
            undefined,
            IS_ARRAY_CONTAINER_OF_ERRORS.VALUES_ARGUMENT_NOT_AN_ARRAY,
            [values.toString()])
    }
    return new Result(!container || values.every(v => container.indexOf(v) !== -1));
}