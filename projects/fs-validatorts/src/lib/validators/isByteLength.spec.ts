import { TestData } from "../types/TestData"
import { runtest } from "../utilities/test-util"
import { isByteLength } from "./isByteLength"

it('isByteLength', ()=>{
    expect(isByteLength('abc', { max: 64 }).value).toBeTruthy()
})

it("dataset", () => {
    runtest(testdata, isByteLength)
})
const testdata: TestData[] = [
    {
        it: 'isByteLength',
        args: [{ min:2, max:3}],
        valid: ['abc', 'de', 'ｇ'],
        invalid: ['', 'a', 'abcd', 'ｇｍ']
    },
    {
        it: 'isByteLength',
        args: [{min: 2, max: 3}],
        valid: ['abc', 'de', 'ｇ'],
        invalid: ['', 'a', 'abcd', 'ｇｍ']
    },
    {
        it: 'isByteLength',
        args: [{min:0, max:0}],
        valid: [''],
        invalid: ['ｇ', 'a']
    }
]

