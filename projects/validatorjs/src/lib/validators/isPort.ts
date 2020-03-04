import { isInt } from './isInt';

/**
 * Check if `target` is a valid port number
 *
 * @param target The port number
 * @return true if the `target` is a port number, false otherwise
 * 
 * @example
```
const isPortNumber:boolean = isPort('4200')
```
 */
export function isPort(target:string) {
  return isInt(target, { min: 0, max: 65535 });
}
