import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isInArray } from "./isInArray";

test("isInArray", () => {
    runtest(testdata, isInArray)
})

const testdata: TestData[] = [
    {
        it: 'isInArray',
        args: [['fo', 'foo']],
        valid: ['fo', 'foo'],
        invalid: ['boo', 'zoo']
    }
]