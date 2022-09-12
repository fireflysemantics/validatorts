import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isArrayContainerOf } from "./isArrayContainerOf";

it("isArray", ()=>{
    runtest(testdata, isArrayContainerOf)
})

const testdata: TestData[] = [
    {
        it: 'isArrayContainerOf',
        args:[[2,3,4]],
        valid: [[2,3,4,2]],
        invalid: [[2,3]]
      }
]

