import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isInObjectKeys } from "./isInObjectKeys";

test("isInObjectKeys", () => {
    runtest(testdata, isInObjectKeys)
})

const testdata: TestData[] = [
    {
        it: 'isInObjectKeys',
        args: [{fo: 'fo', foo:'foo'}],
        valid: ['fo', 'foo'],
        invalid: ['boo', 'zoo']
    }
]