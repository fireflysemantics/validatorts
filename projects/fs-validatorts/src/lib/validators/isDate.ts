import { Result } from "../types";

/**
 * Tests if argument is date.
 * 
 * ### Example
 * ```
 * expect(isDate(new Date(0)).value).toBeTruthy()
 * ```
 * @param value The date being checked.
 * 
 */
 export function isDate(value: any): Result<boolean> {
    return new Result(value instanceof Date && !isNaN(value.getTime()));
}