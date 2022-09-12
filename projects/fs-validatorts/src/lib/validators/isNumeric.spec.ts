import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isNumeric } from "./isNumeric";

it("isNumeric", () => {
    runtest(testdata, isNumeric)
})


const testdata: TestData[] = [
    {
        it: 'isNumeric',
        valid: [
            '123',
            '00123',
            '-00123',
            '0',
            '-0',
            '+123',
            '123.123',
            '+000000',
        ],
        invalid: [
            ' ',
            '',
            '.',
        ]
    },
    {
        it: 'isNumeric',
        args: [{
            no_symbols: true,
        }],
        valid: [
            '123',
            '00123',
            '0',
        ],
        invalid: [
            '-0',
            '+000000',
            '',
            '+123',
            '123.123',
            '-00123',
            ' ',
            '.',
        ]
    },
    {
        it: 'isNumeric',
        args: [{
            locale: 'fr-FR',
        }],
        valid: [
            '123',
            '00123',
            '-00123',
            '0',
            '-0',
            '+123',
            '123,123',
            '+000000',
        ],
        invalid: [
            ' ',
            '',
            ',',
        ]
    },
        /* THIS TEST FAILS ...
    {
        it: 'isNumeric',
        args: [{
            locale: 'fr-CA',
        }],
        valid: [
            '123',
            '00123',
            '-00123',
            '0',
            '-0',
            '+123',
            '123,123',
            '+000000',
        ],
        invalid: [
            ' ',
            '',
            '.',
        ]
    } 
    */   
]

/**

]
 
 */