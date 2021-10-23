import { TestData } from "../types/TestData"
import { runtest } from "../util/test-util"
import { isByteLength } from "./isByteLength"

const testdata: TestData[] = [
    {
        it: 'isByteLength',
        args: [2, 3],
        valid: ['abc', 'de', 'ｇ'],
        invalid: ['', 'a', 'abcd', 'ｇｍ']
    },
    {
        it: 'isByteLength',
        args: [0, 0],
        valid: [''],
        invalid: ['ｇ', 'a']
    }
]

test("dataset", () => {
    runtest(testdata, isByteLength)
})