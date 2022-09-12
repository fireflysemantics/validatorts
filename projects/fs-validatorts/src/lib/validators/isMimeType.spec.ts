/**
 * https://github.com/validatorjs/validator.js/issues/1818
 */
import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isMimeType } from "./isMimeType";

it("isMimeType", () => {
  runtest(testdata, isMimeType)
})

const testdata: TestData[] = [
  {
    it: 'isMimeType',
    valid: [
      'application/json',
      'application/xhtml+xml',
      'audio/mp4',
      'image/bmp',
      'font/woff2',
      'message/http',
      'model/vnd.gtw',
      'multipart/form-data',
      'multipart/form-data; boundary=something',
      'multipart/form-data; charset=utf-8; boundary=something',
      'multipart/form-data; boundary=something; charset=utf-8',
      'multipart/form-data; boundary=something; charset="utf-8"',
      'multipart/form-data; boundary="something"; charset=utf-8',
      'multipart/form-data; boundary="something"; charset="utf-8"',
      'text/css',
      'text/plain; charset=utf8',
      'Text/HTML;Charset="utf-8"',
      'text/html;charset=UTF-8',
      'Text/html;charset=UTF-8',
      'text/html; charset=us-ascii',
      'text/html; charset=us-ascii (Plain text)',
      'text/html; charset="us-ascii"',
      'video/mp4',
    ],
    invalid: [
      '',
      ' ',
      '/',
      'f/b',
      'application',
      'application\\json',
      'application/json/text',
      'application/json; charset=utf-8',
      'audio/mp4; charset=utf-8',
      'image/bmp; charset=utf-8',
      'font/woff2; charset=utf-8',
      'message/http; charset=utf-8',
      'model/vnd.gtw; charset=utf-8',
      'video/mp4; charset=utf-8',
    ]
  }
]



