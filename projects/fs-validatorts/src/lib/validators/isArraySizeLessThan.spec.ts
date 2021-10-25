import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isArraySizeLessThan } from "./isArraySizeLessThan";

test("isArraySizeLessThan", ()=>{
    runtest(testdata, isArraySizeLessThan)
})

const testdata: TestData[] = [
    {
        it: 'isArraySizeLessThan',
        args:[3],
        valid: [[1,2]],
        invalid: [["a", "b", "c"]]
      }
]