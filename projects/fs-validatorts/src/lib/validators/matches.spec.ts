import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { matches } from "./matches";
test("matches", () => {
    runtest(testdata, matches)
})

const testdata: TestData[] = [
    {
        it: 'matches',
        args: [/abc/],
        valid: ['abc', 'abcdef', '123abc'],
        invalid: ['acb', 'Abc']
    },
    {
        it: 'matches',
        args: ['abc'],
        valid: ['abc', 'abcdef', '123abc'],
        invalid: ['acb', 'Abc'],
    },
    {
        it: 'matches',
        args: ['abc', 'i'],
        valid: ['abc', 'abcdef', '123abc', 'AbC'],
        invalid: ['acb'],
    }
]
