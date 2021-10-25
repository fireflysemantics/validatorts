import { Result, Types } from "../types";

/**
 * Checks if the value is >= 0 and finite.
 * @param value The value being checked.
 * @return True if the value is a finite number and is positive, false otherwise.
 */
export function isNonNegativeFinite(value: number):Result<boolean|undefined>  {
    return new Result(typeof(value)  === Types.NUMBER && isFinite(value) && value >= 0);
}