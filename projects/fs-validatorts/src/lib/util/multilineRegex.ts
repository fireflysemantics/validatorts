/**
 * Build RegExp object from an array
 * of multiple/multi-line regexp parts
 *
 * @param parts The string array
 * @param flags
 * @return RegExp object
 */
export function multilineRegexp(parts:string[], flags:string = ''):RegExp {
  const regexpAsStringLiteral = parts.join('');

  return new RegExp(regexpAsStringLiteral, flags);
}