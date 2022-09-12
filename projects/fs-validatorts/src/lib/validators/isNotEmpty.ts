import { Result } from "../types";

/**
 * Tests if given value is not empty (!== '', !== null, !== undefined).
 *   
 * ### Example
 * ```
 * expect(isNotEmpty('1').value).toBeTruthy()
 * ``` 
 * @param value The value being checked.
 */
 export function isNotEmpty(value: any): Result<boolean | undefined> {
    return new Result(value !== "" && value !== null && value !== undefined);
}