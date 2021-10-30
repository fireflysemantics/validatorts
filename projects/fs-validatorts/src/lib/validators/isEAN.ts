/**
 * The most commonly used EAN standard is
 * the thirteen-digit EAN-13, while the
 * less commonly used 8-digit EAN-8 barcode was
 * introduced for use on small packages.
 * Also EAN/UCC-14 is used for Grouping of individual
 * trade items above unit level(Intermediate, Carton or Pallet).
 * For more info about EAN-14 checkout: https://www.gtin.info/itf-14-barcodes/
 * EAN consists of:
 * GS1 prefix, manufacturer code, product code and check digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number
 * Reference: https://www.gtin.info/
 */

 import { MessageFunctionType, Result } from '../types';
 import { isString } from '../validators/isString';
 
 export interface IsEANErrors {
   TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
 }
 
 export const IS_EAN_ERRORS: IsEANErrors =
 {
   TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
     return `The target argument ${arr![0]} is not a string.`;
   }
 };
 
/**
 * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13; 14 for EAN-14
 * and Regular Expression for valid EANs (EAN-8, EAN-13, EAN-14),
 * with exact numberic matching of 8 or 13 or 14 digits [0-9]
 */
 const LENGTH_EAN_8 = 8;
 const LENGTH_EAN_14 = 14;
 const validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;

/**
 * Get position weight given:
 * EAN length and digit index/position
 * 
 * @param length The EAN length
 * @param index The index/position
 * @return The the position weight
 */
function getPositionWeightThroughLengthAndIndex(length:number, index:number) {
  if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) {
    return (index % 2 === 0) ? 3 : 1;
  }
  return (index % 2 === 0) ? 1 : 3;
}

/**
 * Calculate EAN Check Digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number#Calculation_of_checksum_digit
 *
 * @param ean The ean
 * @return The check digit
 */
 function calculateCheckDigit(ean:string) {
  const checksum = ean
    .slice(0, -1)
    .split('')
    .map((char, index) => Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index))
    .reduce((acc, partialSum) => acc + partialSum, 0);

  const remainder = 10 - (checksum % 10);

  return remainder < 10 ? remainder : 0;
}

/**
 * Test if string is valid EAN:
 * Matches EAN-8/EAN-13 regex
 * Has valid check digit.
 * 
 *    
 * ### Example
 * ```
 * expect(isEAN('9421023610112').value).toBeTruthy()
 * ```
 * 
 * @param target The target
 */
 export function isEAN(target: string):Result<boolean | undefined> {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_EAN_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  const actualCheckDigit = Number(target.slice(-1));

  return new Result(validEanRegex.test(target) && actualCheckDigit === calculateCheckDigit(target));
}