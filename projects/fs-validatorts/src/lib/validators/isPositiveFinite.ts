import { Types } from "../types";

/**
 * Checks if the value is > 0 and finite.
 * @param value The value being checked.
 * @return True if the value is a finite number and is positive, false otherwise.
 */
export function isPositiveFinite(value: number): boolean {
    return typeof(value)  === Types.NUMBER && isFinite(value) && value > 0;
}

