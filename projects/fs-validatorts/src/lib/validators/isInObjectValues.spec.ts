import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isInObjectValues } from "./isInObjectValues";

test("isInObjectValues", () => {
    runtest(testdata, isInObjectValues)
})

const testdata: TestData[] = [
    {
        it: 'isInObjectValues',
        args: [{fo: 'fo', foo:'foo'}],
        valid: ['fo', 'foo'],
        invalid: ['boo', 'zoo']
    }
]