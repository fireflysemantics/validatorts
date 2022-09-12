import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isInArray } from "./isInArray";

it("isInArray", () => {
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