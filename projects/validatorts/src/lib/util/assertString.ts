/**
 * Tests whether `input` is of type string
 * @param input The value that should be a string
 * @throws TypeError if the value is not a string 
 */
export function assertString(input:any) {
  const isString = (typeof input === 'string' || input instanceof String);

  if (!isString) {
    let invalidType;
    if (input === null) {
      invalidType = 'null';
    } else {
      invalidType = typeof input;
      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
        invalidType = input.constructor.name;
      } else {
        invalidType = `a ${invalidType}`;
      }
    }
    throw new TypeError(`Expected string but received ${invalidType}.`);
  }
}
