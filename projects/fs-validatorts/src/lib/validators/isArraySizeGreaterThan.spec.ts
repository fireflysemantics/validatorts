import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isArraySizeGreaterThan } from "./isArraySizeGreaterThan";

test("isArraySizeGreaterThan", ()=>{
    runtest(testdata, isArraySizeGreaterThan)
})

const testdata: TestData[] = [
    {
        it: 'isArraySizeGreaterThan',
        args:[2],
        valid: [[1,2,3]],
        invalid: [["a"]]
      }
]