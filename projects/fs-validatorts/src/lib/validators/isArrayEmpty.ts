import { MessageFunctionType, Result } from "../types";
import { isArray } from "./isArray";

export interface IsArrayEmptyErrors {
    TARGET_ARGUMENT_NOT_AN_ARRAY: MessageFunctionType;
}

export const IS_ARRAY_EMPTY_ERRORS: IsArrayEmptyErrors =
{
    TARGET_ARGUMENT_NOT_AN_ARRAY: (arr?: string[]) => {
        return `The target argument ${arr![0]} is not an array.`;
    }
};

/**
 * Checks if an array contains any items.
 * @param target The array being checked
 * @return True if the array is empty and false otherwise.
 */
export function isArrayEmpty(target: any[]): Result<boolean | undefined> {
    if (!isArray(target).value) {
        return new Result(
            undefined,
            IS_ARRAY_EMPTY_ERRORS.TARGET_ARGUMENT_NOT_AN_ARRAY,
            [target.toString()])
    }
    return new Result(!target.length);
}