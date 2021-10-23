import { Result } from "../types";

/**
 * IsNumberOptions.
 */
export interface IsNumberOptions {
    allowNaN?: boolean;
    allowInfinity?: boolean;
}

/**
 * Default options for IsNumber
 */
export const IS_NUMBER_OPTIONS_DEFAULTS: IsNumberOptions = {
    allowNaN: false,
    allowInfinity: false
}

/**
 * Check if a given value is a number.
 * 
 * Default `IsNumberOptions` allow 
 * `-Infinity, Infinity` but disallow `NaN`.
 * 
 * @param target The value being checked.
 * @param options The optional configuration {@link IsNumberOptions}.
 * @return True if the value is a number, false otherwise.
 */
export function isNumber(target: any,
    options: IsNumberOptions = IS_NUMBER_OPTIONS_DEFAULTS): Result<boolean | undefined> {
    if (target === Infinity || target === -Infinity) {
        return new Result(!!options.allowInfinity);
    }

    if (Number.isNaN(target)) {
        return new Result(!!options.allowNaN);
    }
    return new Result(isFinite(target));
}