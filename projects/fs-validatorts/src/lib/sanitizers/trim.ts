import { rtrim } from './rtrim';
import { ltrim }  from './ltrim';

export function trim(str:string, chars:string) {
  return rtrim(ltrim(str, chars), chars);
}
