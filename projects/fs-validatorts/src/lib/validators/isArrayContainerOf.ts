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
 * Tests if `container` array contains values array.
 * 
 * The values check should be primitive javascript types (String, number, boolean, null, undefined, etc.).
 * and not Object instances.
 * 
 * ### Example
 * ```
 * expect(isArrayContainerOf([2,3,4],[2,3]).value).toBeTruthy()
 * ```
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