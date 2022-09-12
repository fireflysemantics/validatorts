import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isObject } from "./isObject";

it("isObject", () => {
    runtest(testdata, isObject)
})
const testdata: TestData[] = [
    {
        it: 'isObject',
        valid: [ {} ],
        invalid: [['a'], null, undefined]
    }
]