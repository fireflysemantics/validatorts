import { Result } from "../types";

/**
 * Tests if the value is an instance of the specified object.
 *    
 * ### Example
 * ```
 * expect(isInstanceOf(new Date(0), Date).value).toBeTruthy()
 * ```
 * 
 * @param value The value array being checked.
 * @param target The target type constructor
 */
 export function isInstanceOf(
    value: any,
    target: new (...args: any[]) => any
  ):Result<boolean | undefined> {
    return new Result((
      target &&
      typeof target === "function" &&
      value instanceof target
    ));
  }