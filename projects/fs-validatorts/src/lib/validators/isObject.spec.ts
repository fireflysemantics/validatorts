import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isObject } from "./isObject";

test("isObject", () => {
    runtest(testdata, isObject)
})
const testdata: TestData[] = [
    {
        it: 'isObject',
        valid: [ {} ],
        invalid: [['a'], null, undefined]
    }
]