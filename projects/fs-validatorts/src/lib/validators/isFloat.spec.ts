import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isFloat } from "./isFloat";

it("isFloat", () => {
    runtest(testdata, isFloat)
})

const testdata: TestData[] = [
    {
        it: 'isFloat',
        args: [],
        valid: [
            '123',
            '123.',
            '123.123',
            '-123.123',
            '-0.123',
            '+0.123',
            '0.123',
            '.0',
            '-.123',
            '+.123',
            '01.123',
            '-0.22250738585072011e-307',
          ],
          invalid: [
            '+',
            '-',
            '  ',
            '',
            '.',
            'foo',
            '20.foo',
            '2020-01-06T14:31:00.135Z',
          ]
    },
    {
        it: 'isFloat',
        args: [{ locale: 'en-AU' }],
        valid: [
          '123',
          '123.',
          '123.123',
          '-123.123',
          '-0.123',
          '+0.123',
          '0.123',
          '.0',
          '-.123',
          '+.123',
          '01.123',
          '-0.22250738585072011e-307',
        ],
        invalid: [
          '123٫123',
          '123,123',
          '  ',
          '',
          '.',
          'foo',
        ]
    },
    {
        it: 'isFloat',
        args: [{ locale: 'de-DE' }],
        valid: [
          '123',
          '123,',
          '123,123',
          '-123,123',
          '-0,123',
          '+0,123',
          '0,123',
          ',0',
          '-,123',
          '+,123',
          '01,123',
          '-0,22250738585072011e-307',
        ],
        invalid: [
          '123.123',
          '123٫123',
          '  ',
          '',
          '.',
          'foo',
        ]
    },
    {
        it: 'isFloat',
        args: [{ locale: 'ar-JO' }],
        valid: [
          '123',
          '123٫',
          '123٫123',
          '-123٫123',
          '-0٫123',
          '+0٫123',
          '0٫123',
          '٫0',
          '-٫123',
          '+٫123',
          '01٫123',
          '-0٫22250738585072011e-307',
        ],
        invalid: [
          '123,123',
          '123.123',
          '  ',
          '',
          '.',
          'foo',
        ]
    },
    {
        it: 'isFloat',
        args: [{
            min: 3.7,
          }],
          valid: [
            '3.888',
            '3.92',
            '4.5',
            '50',
            '3.7',
            '3.71',
          ],
          invalid: [
            '3.6',
            '3.69',
            '3',
            '1.5',
            'a',
          ]
    },
    {
        it: 'isFloat',
        args: [{
            gt: -5.5,
            lt: 10,
          }],
          valid: [
            '9.9',
            '1.0',
            '0',
            '-1',
            '7',
            '-5.4',
          ],
          invalid: [
            '10',
            '-5.5',
            'a',
            '-20.3',
            '20e3',
            '10.00001',
          ]
    },
    {
        it: 'isFloat',
        args: [{
            min: -5.5,
            max: 10,
            gt: -5.5,
            lt: 10,
          }],
          valid: [
            '9.99999',
            '-5.499999',
          ],
          invalid: [
            '10',
            '-5.5',
          ]
    },
    {
        it: 'isFloat',
        args: [{
            locale: 'de-DE',
            min: 3.1,
          }],
          valid: [
            '123',
            '123,',
            '123,123',
            '3,1',
            '3,100001',
          ],
          invalid: [
            '3,09',
            '-,123',
            '+,123',
            '01,123',
            '-0,22250738585072011e-307',
            '-123,123',
            '-0,123',
            '+0,123',
            '0,123',
            ',0',
            '123.123',
            '123٫123',
            '  ',
            '',
            '.',
            'foo',
          ]
    }
]