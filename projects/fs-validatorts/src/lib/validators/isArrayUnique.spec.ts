import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isArrayUnique } from "./isArrayUnique";

it("isArray", ()=>{
    runtest(testdata, isArrayUnique)
})

const testdata: TestData[] = [
    {
        it: 'isArrayUnique',
        valid: [[1,2,3]],
        invalid: [[2,2]]
      }
]

