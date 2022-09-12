import { Result, Types } from "../types";

/**
 * Tests if the value is a finite integer number.
 * @param value The value being checked.
 * 
 *    
 * ### Example
 * ```
 * expect(isFiniteInteger(1).value).toBeTruthy()
 * ```
 */
export function isFiniteInteger(value: number): Result<boolean | undefined> {
    return new Result(typeof(value)  === Types.NUMBER && isFinite(value) && Math.round(value) === value);
}