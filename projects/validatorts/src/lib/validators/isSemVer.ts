import {assertString} from '../util/assertString';
import {multilineRegexp} from '../util/multilineRegex';

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
 * @param target The target
 * @return true if the `target` is a valid semver version, false otherwise
 */
export function isSemVer(target:string) {
  assertString(target)
  return semanticVersioningRegex.test(target)
}
