import { assertString } from '../util/assertString';

const lengths = {
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
 * Checks whether the `target` string is hashed using the `arg` algorithm
 * 
 * @param target The target string
 * @param arg The arg
 * @return true if the `target` is hashed using the `arg` algorithm, false otherwise
 */
export function isHash(target: string, arg:string) {
  assertString(target);
  const hash = new RegExp(`^[a-fA-F0-9]{${lengths[arg]}}$`);
  return hash.test(target);
}
