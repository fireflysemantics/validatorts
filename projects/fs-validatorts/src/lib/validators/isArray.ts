import { Result } from "../types";

/**
 * Tests whether the target is an array
 * @param target The value being checked.
 * 
 * ### Example
 * ```
 * expect(isArray([1,2,3]).value).toBeTruthy()
 * ```
 */
 export function isArray(target: any): Result<boolean | undefined> {
    return new Result(target instanceof Array);
}