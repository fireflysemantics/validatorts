import { Result, Types } from "../types";

/**
 * Checks if the value is a number and is finite.
 * @param value The value being checked.
 * @return True if the value is a number and is finite, false otherwise.
 */
export function isFiniteNumber(value: number): Result<boolean | undefined> {
    return new Result(typeof(value)  === Types.NUMBER && isFinite(value));
}