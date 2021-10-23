import { Result } from "../types";

/**
 * Checks if argument is a real string.
 * @param value The value being checked.
 * @return True if the value is a string, false otherwise.
 * 
 */
 export function isString(value: any): Result<boolean | undefined> {
    return new Result(value instanceof String || typeof value === "string");
}