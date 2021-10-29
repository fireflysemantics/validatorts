import { Result } from "../types";

/**
 *    
 * ### Example
 * ```
 * expect(isDefined('hello').value).toBeTruthy()
 * ```
 * @param value The value being checked.
 *
 * See https://stackoverflow.com/questions/51003292/exporting-utility-functions-in-typescript/51004236#51004236
 * for an implementation reference.
 */
 export function isDefined(value: any): Result<boolean | undefined> {
    return new Result(value != null); //This checks for undefined automatically.
}