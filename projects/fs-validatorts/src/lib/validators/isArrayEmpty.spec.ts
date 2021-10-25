import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isArrayEmpty } from "./isArrayEmpty";

test("isArrayEmpty", ()=>{
    runtest(testdata, isArrayEmpty)
})

const testdata: TestData[] = [
    {
        it: 'isArrayEmtpy',
        valid: [[]],
        invalid: [["a"]]
      }
]