import { multilineRegexp } from '../utilities/multilineRegex';
import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsSemverErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_SEMVER_ERRORS: IsSemverErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/**
 * Regular Expression to match
 * semantic versioning (SemVer)
 * built from multi-line, multi-parts regexp
 * Reference: https://semver.org/
 */
const semanticVersioningRegex = multilineRegexp([
  '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)',
  '(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))',
  '?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$',
]);

/**
 * Check if `target` is a valid semver version
 *
   
 * ### Example
 * ```
 * expect(isSemVer('1.2.3').value).toBeTruthy()
 * ```
 * @param target The target
 */
export function isSemVer(target: string): Result<boolean | undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined,
      IS_SEMVER_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(semanticVersioningRegex.test(target))
}
