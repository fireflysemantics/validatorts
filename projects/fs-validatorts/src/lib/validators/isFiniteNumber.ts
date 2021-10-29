import { Result, Types } from "../types";

/**
 * Tests if the value is a number and is finite.
 * @param value The value being checked.
 * 
 * ### Example
 * ```
 * expect(isFiniteNumber(4.4).value).toBeTruthy()
 * ```
 */
export function isFiniteNumber(value: number): Result<boolean | undefined> {
    return new Result(typeof(value)  === Types.NUMBER && isFinite(value));
}