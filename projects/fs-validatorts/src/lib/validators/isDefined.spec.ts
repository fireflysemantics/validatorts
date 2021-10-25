import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isDefined } from "./isDefined"

test("isDefined", () => {
    runtest(testdata, isDefined)
})

const testdata: TestData[] = [
    {
        it: 'should validate dates',
        valid: [{}, "foo", "", 0, -0, Infinity, -Infinity, NaN, new Date()],
        invalid: [undefined, null]
    }
]