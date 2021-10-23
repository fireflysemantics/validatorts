import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isLength } from "./isLength";

test("isLength", () => {
    runtest(testdata, isLength)
})

const testdata: TestData[] = [
    {
        it: 'isLength',
        args: [2],
        valid: ['abc', 'de', 'abcd'],
        invalid: ['', 'a']
    },
    {
        it: 'isLength',
        args: [2, 3],
        valid: ['abc', 'de'],
        invalid: ['', 'a', 'abcd']
    },
    {
        it: 'isLength',
        args: [2, 3],
        valid: ['干𩸽', '𠮷野家'],
        invalid: ['', '𠀋', '千竈通り']
    },
    {
        it: 'isLength',
        args: [0, 0],
        valid: [''],
        invalid: ['a', 'ab']
    }
]