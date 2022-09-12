import { matches } from './matches'

import { isString } from '../validators/isString';
import { MessageFunctionType, Result } from '../types';

export interface IsMatchErrors {
    TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_MATCH_ERRORS: IsMatchErrors =
{
    TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
        return `The target argument ${arr![0]} is not a string.`;
    }
};

/**
 * Checks if string matches the pattern. 
 * Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
 * If given value is not a string, then it returns false.
 *    
 * ### Example
 * ```
 * expect(isMatch('xyz', /xyz/).value).toBeTruthy()
 * ```
 * 
 * @param target The value being checked.
 * @param pattern The match pattern
 * @param modifiers The modifiers
 */
export function isMatch(
    target: string,
    pattern: RegExp,
    modifiers?: string
): Result<boolean | undefined> {

    if (!isString(target).value) {
        return new Result(
            undefined,
            IS_MATCH_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
            [target])
    }
    return matches(target, pattern, modifiers)
}