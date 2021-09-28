/**
 * The most commonly used EAN standard is
 * the thirteen-digit EAN-13, while the
 * less commonly used 8-digit EAN-8 barcode was
 * introduced for use on small packages.
 * EAN consists of:
 * GS1 prefix, manufacturer code, product code and check digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number
 */

import { assertString } from '../util/assertString';

/**
 * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13
 * and Regular Expression for valid EANs (EAN-8, EAN-13),
 * with exact numberic matching of 8 or 13 digits [0-9]
 */
const LENGTH_EAN_8 = 8;
const validEanRegex = /^(\d{8}|\d{13})$/;


/**
 * Get position weight given:
 * EAN length and digit index/position
 *
 * @param {number} length
 * @param {number} index
 * @return {number}
 */
function getPositionWeightThroughLengthAndIndex(length:number, index:number) {
  if (length === LENGTH_EAN_8) {
    return (index % 2 === 0) ? 3 : 1;
  }

  return (index % 2 === 0) ? 1 : 3;
}

/**
 * Calculate EAN Check Digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number#Calculation_of_checksum_digit
 *
 * @param ean The ean check digit
 * @return The digit
 */
function calculateCheckDigit(ean:string):number {
  const checksum = ean
    .slice(0, -1)
    .split('')
    .map((char, index) => Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index))
    .reduce((acc, partialSum) => acc + partialSum, 0);

  const remainder = 10 - (checksum % 10);

  return remainder < 10 ? remainder : 0;
}

/**
 * Check if string is valid EAN:
 * Matches EAN-8/EAN-13 regex
 * Has valid check digit.
 * 
 * @param target The target string
 * @return true if the `target` is a valid EAN, false otherwise
 */
 export function isEAN(target: string) {
  assertString(target);
  const actualCheckDigit = Number(target.slice(-1));

  return validEanRegex.test(target) && actualCheckDigit === calculateCheckDigit(target);
}
