import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsCreditCardErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_CREDIT_CARD_ERRORS: IsCreditCardErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/* eslint-disable max-len */
const creditCard = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;
/* eslint-enable max-len */
/**
 * Checks whether the `target` string is a credit card number
 * 
 * @param target The target string
 * @return true if the `target` is a credit card number, false otherwise
 */
export function isCreditCard(target: string):Result<boolean|undefined> {
  if (!isString(target)) {
    return new Result(
      undefined, 
      IS_CREDIT_CARD_ERRORS.TARGET_ARGUMENT_NOT_A_STRING, 
      [target])
  }
  const sanitized = target.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return new Result(false);
  }
  let sum = 0;
  let digit;
  let tmpNum;
  let shouldDouble;
  for (let i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, (i + 1));
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += ((tmpNum % 10) + 1);
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return new Result(!!((sum % 10) === 0 ? sanitized : false));
}