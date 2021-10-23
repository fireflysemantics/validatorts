import { Result } from "../types";

/**
 * Checks if argument is date.
 * @param value The date being checked.
 * @return True if the date value is a real date, false otherwise.
 */
 export function isDate(value: any): Result<boolean> {
    return new Result(value instanceof Date && !isNaN(value.getTime()));
}