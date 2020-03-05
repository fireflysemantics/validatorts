/**
 * Convert the `input` argument into a string
 * @param input The input that should be converted to a string
 * @return The string value for the `input` argument
 */
export function toString(input) {
  if (typeof input === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || (isNaN(input) && !input.length)) {
    input = '';
  }
  return String(input);
}
