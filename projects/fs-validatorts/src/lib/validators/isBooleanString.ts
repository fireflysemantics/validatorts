import { Result } from "../types";
import { isBoolean } from "./isBoolean";

/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the type of the value is the same as string and `isBoolean` passes.
 */
export function isBooleanString(value: string): Result<boolean | undefined> {
    return new Result(typeof value === "string" && isBoolean(value).value);
}