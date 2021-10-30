import { MessageFunctionType, Result } from '../types';
import { merge } from '../util/merge';
import { isString } from '../validators/isString';

export interface IsJSONErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_JSON_ERRORS: IsJSONErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const default_json_options = {
  allow_primitives: false,
};

/**
 * Tests whether the `target` string is valid JSON
 *    
 * ### Example
 * ```
 * expect(isJSON('{ "key": "value" }').value).toBeTruthy()
 * ```
 * @param target The target string
 */
export function isJSON(target: string, options: any): Result<boolean | undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined,
      IS_JSON_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  try {
    options = merge(options, default_json_options);
    let primitives: any[] = [];
    if (options.allow_primitives) {
      primitives = [null, false, true];
    }
    const obj = JSON.parse(target);
    return new Result(primitives.includes(obj) || (!!obj && typeof obj === 'object'));
  } catch (e) { /* ignore */ }
  return new Result(false);
}