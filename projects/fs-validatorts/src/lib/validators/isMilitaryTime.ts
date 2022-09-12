import { Result } from "../types";
import { isMatch } from "./isMatch";

/**
 * Checks if the string represents a time without
 * a given timezone in the format HH:MM (military)
 * If the given value does not match the pattern HH:MM, then it returns false.
 * 
 * ### Example
 * ```
 * expect(isMilitaryTime('application/json').value).toBeTruthy()
 * ```
 * 
 * @param value The value being checked.
 * @returns True if the string represents a time without a given timezone in the format HH:MM (military), false otherwise.
 */
export function isMilitaryTime(value: string): Result<boolean | undefined> {
    return isMatch(value, /^([01]\d|2[0-3]):?([0-5]\d)$/);
}