
import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isEmpty } from "./isEmpty";

test("isEmpty", () => {
    runtest(testdata, isEmpty)
})

const testdata: TestData[] = [
    {
        it: 'isEmpty:should validate null strings',
        args: [],
        valid: [
            '',
        ],
        invalid: [
            ' ',
            'foo',
            '3',
        ]
    },
    {
        it: 'isEmpty',
        args: [{ ignore_whitespace: false }],
        valid: [
            '',
        ],
        invalid: [
            ' ',
            'foo',
            '3',
        ]
    },
    {
        it: 'isEmpty',
        args: [{ ignore_whitespace: true }],
        valid: [
            '',
            ' ',
        ],
        invalid: [
            'foo',
            '3',
        ]
    }
] 
