import { MessageFunctionType, Result } from '../types';
import { isString } from '../validators/isString';

export interface IsMimeTypeErrors {
  TARGET_ARGUMENT_NOT_A_STRING: MessageFunctionType;
}

export const IS_MIME_TYPE_ERRORS: IsMimeTypeErrors =
{
  TARGET_ARGUMENT_NOT_A_STRING: (arr?: string[]) => {
    return `The target argument ${arr![0]} is not a string.`;
  }
};

/*
  Checks if the provided string matches to a correct Media type format (MIME type)
  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).
  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.
  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/

// Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
const mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len

// Handle "charset" in "text/*"
const mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len

// Handle "boundary" in "multipart/*"
const mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len


/**
 * Checks whether the `target` string is a valid Mime Type
 *    
 * ### Example
 * ```
 * expect(isMimeType('application/json').value).toBeTruthy()
 * ```
 * @param target The target string
 */
export function isMimeType(target:string):Result<boolean|undefined>  {
  if (!isString(target).value) {
    return new Result(
      undefined, 
      IS_MIME_TYPE_ERRORS.TARGET_ARGUMENT_NOT_A_STRING,
      [target])
  }
  return new Result(mimeTypeSimple.test(target) || mimeTypeText.test(target) || mimeTypeMultipart.test(target));
}