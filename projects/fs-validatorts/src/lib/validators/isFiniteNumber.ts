import { Types } from "../types";

/**
 * Checks if the value is a number and is finite.
 * @param value The value being checked.
 * @return True if the value is a number and is finite, false otherwise.
 */
export function isFiniteNumber(value: number): boolean {
    return typeof(value)  === Types.NUMBER && isFinite(value);
}