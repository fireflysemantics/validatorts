import { Result } from '../types';
/**
 * Compares the `compare` and `to` arguments with the strict (`===`) equality
 * 
 * @param compare The first comparison argument
 * @param to The second comparison argument 
 *    
 * ### Example
 * ```
 * expect(isEqualTo('abc', 'abc').value).toBeTruthy()
 * ```
 */
export function isEqualTo(compare: any, to: any):Result<boolean | undefined> {
  return new Result(compare === to)
}