import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isArrayUnique } from "./isArrayUnique";

test("isArray", ()=>{
    runtest(testdata, isArrayUnique)
})

const testdata: TestData[] = [
    {
        it: 'isArrayUnique',
        valid: [[1,2,3]],
        invalid: [[2,2]]
      }
]

