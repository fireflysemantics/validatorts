import { Types } from "../types";

/**
 * Checks if the value is a finite integer number.
 * @param value The value being checked.
 * @return True if the value is a finite integer number, false otherwise.
 */
export function isNumberFiniteInteger(value: number): boolean {
    return typeof(value)  === Types.NUMBER && isFinite(value) && Math.round(value) === value;
}