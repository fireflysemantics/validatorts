import { StringKeyNumber } from '../types';
import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsHashErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_HASH_ERRORS: IsHashErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

const lengths:StringKeyNumber = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8,
};

/**
 * Tests whether the `target` string is hashed using the `arg` algorithm
 * 
 * ### Example
 * ```
 * expect(isHash('d94f3f016ae679c3008de268209132f2', 'md5').value).toBeTruthy()
 * ```
 * 
 * @param target The target string
 * @param arg The arg
 */
export function isHash(target: string, arg:string):Result<boolean | undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_HASH_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  const hash = new RegExp(`^[a-fA-F0-9]{${lengths[arg]}}$`);
  return new Result(hash.test(target));
}
