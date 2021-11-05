import { Result } from '../types';

/**
 * Checks if the argument is a real boolean.
 * @param value The value being checked.
 */
 export function isBoolean(value: any): Result<boolean|undefined> {
    return new Result(value instanceof Boolean || typeof value === "boolean");
}