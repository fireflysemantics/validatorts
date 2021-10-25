import { Result } from "../types";

/**
 * @param value The value being checked.
 * @returns True if the value is strictly `undefined`.not null or undefined, false otherwise.
 *
 * See https://stackoverflow.com/questions/51003292/exporting-utility-functions-in-typescript/51004236#51004236
 * for an implementation reference.
 */
 export function isDefined(value: any): Result<boolean | undefined> {
    return new Result(value != null); //This checks for undefined automatically.
}