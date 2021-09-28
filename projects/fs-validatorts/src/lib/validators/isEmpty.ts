import { assertString } from '../util/assertString';
import { merge } from '../util/merge';

const default_is_empty_options = {
  ignore_whitespace: false,
};

/**
 * Checks whether the `target` string is empty
 * 
 * Note that `ignore_whitespace` is false by default.
 * 
 * @param target The target string
 * @param options The options
 * @return true if the `target` is empty
 */
export function isEmpty(str: string, options:any) {
  assertString(str);
  options = merge(options, default_is_empty_options);

  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}
