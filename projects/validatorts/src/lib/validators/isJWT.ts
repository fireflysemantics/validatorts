import { assertString } from '../util/assertString';

const jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;

/**
 * Checks whether the `target` string is a valid JWT
 * 
 * @param target The target string
 * @return true if the `target` is a valid JWT, false otherwise
 */
export function isJWT(target:string) {
  assertString(target);
  return jwt.test(target);
}
