import { Result } from "../types";

/**
 * Checks if a argument is an array
 * @param target The value being checked.
 * @return True if the value is an instance of an array, false otherwise.
 */
 export function isArray(target: any): Result<boolean | undefined> {
    return new Result(target instanceof Array);
}