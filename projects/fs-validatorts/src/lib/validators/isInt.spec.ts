import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isInt } from "./isInt";

test("isInt", () => {
    runtest(testdata, isInt)
})
const testdata: TestData[] = [
    {
        it: 'isInt',
        valid: [
            '13',
            '123',
            '0',
            '123',
            '-0',
            '+1',
            '01',
            '-01',
            '000',
        ],
        invalid: [
            '100e10',
            '123.123',
            '   ',
            '',
        ]
    },
    {
        it: 'isInt',
        args: [{ allow_leading_zeroes: false }],
        valid: [
            '13',
            '123',
            '0',
            '123',
            '-0',
            '+1',
        ],
        invalid: [
            '01',
            '-01',
            '000',
            '100e10',
            '123.123',
            '   ',
            '',
        ]
    },
    {
        it: 'isInt',
        args: [{ allow_leading_zeroes: true }],
        valid: [
            '13',
            '123',
            '0',
            '123',
            '-0',
            '+1',
            '01',
            '-01',
            '000',
            '-000',
            '+000',
        ],
        invalid: [
            '100e10',
            '123.123',
            '   ',
            '',
        ]
    },
    {
        it: 'isInt',
        args: [{
            min: 10,
        }],
        valid: [
            '15',
            '80',
            '99',
        ],
        invalid: [
            '9',
            '6',
            '3.2',
            'a',
        ]
    },
    {
        it: 'isInt',
        args: [{
            min: 10,
            max: 15,
        }],
        valid: [
            '15',
            '11',
            '13',
        ],
        invalid: [
            '9',
            '2',
            '17',
            '3.2',
            '33',
            'a',
        ]
    },
    {
        it: 'isInt',
        args: [{
            gt: 10,
            lt: 15,
        }],
        valid: [
            '14',
            '11',
            '13',
        ],
        invalid: [
            '10',
            '15',
            '17',
            '3.2',
            '33',
            'a',
        ]
    }]