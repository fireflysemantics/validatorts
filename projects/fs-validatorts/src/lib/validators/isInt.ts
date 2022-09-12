import { Result } from '../types';

/**
 * Checks if value is an integer.
 * @param value The value being checked.
 * @return True if the value is an integer, false otherwise.
 */
 export function isInt(val: any): Result<boolean | undefined> {
    return new Result(Number.isInteger(val));
}