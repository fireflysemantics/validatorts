import { Result, Types } from "../types";

/**
 * Checks if the value is a finite integer number.
 * @param value The value being checked.
 * @return True if the value is a finite integer number, false otherwise.
 */
export function isFiniteInteger(value: number): Result<boolean | undefined> {
    return new Result(typeof(value)  === Types.NUMBER && isFinite(value) && Math.round(value) === value);
}