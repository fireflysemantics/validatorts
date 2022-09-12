import { Result, Types } from "../types";

/**
 * Tests if the value is >= 0 and finite.
 *    
 * ### Example
 * ```
 * expect(isNonNegativeFinite(0).value).toBeTruthy()
 * ```
 * @param value The value being checked.
 */
export function isNonNegativeFinite(value: number):Result<boolean|undefined>  {
    return new Result(typeof(value)  === Types.NUMBER && isFinite(value) && value >= 0);
}