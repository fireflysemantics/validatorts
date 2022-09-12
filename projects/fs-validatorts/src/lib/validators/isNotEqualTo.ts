import { Result } from "../types";

/**
 * Tets if value does not match ("!==") the comparison.
 *    
 * ### Example
 * ```
 * expect(isNotEqualTo('1', '2').value).toBeTruthy()
 * ```
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * 
 */
export function isNotEqualTo(value: any, target: any): Result<boolean | undefined> {
    return new Result(value !== target);
}