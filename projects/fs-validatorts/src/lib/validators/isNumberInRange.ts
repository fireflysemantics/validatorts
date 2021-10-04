/**
 * Checks if the argument is in the range of the min max parameters.
 * @param value The value being checked.
 * @param min The min parameter
 * @param max The max parameter
 * @returns True if the argument is in range.
 */
 export function isNumberInRange(value: any, min: number, max: number): boolean {
    return (value >= min && value <= max);
  }