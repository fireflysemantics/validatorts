import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isArrayEmpty } from "./isArrayEmpty";

it("isArrayEmpty", ()=>{
    runtest(testdata, isArrayEmpty)
})

const testdata: TestData[] = [
    {
        it: 'isArrayEmtpy',
        valid: [[]],
        invalid: [["a"]]
      }
]