import { Result } from "../types";

/**
 * Checks if argument is a real string.
 *    
 * ### Example
 * ```
 * expect(isString('foo').value).toBeTruthy()
 * ```
 * @param value The value being checked.
 * 
 */
 export function isString(value: any): Result<boolean | undefined> {
    return new Result(value instanceof String || typeof value === "string");
}