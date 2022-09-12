import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isArray } from "./isArray";

it("isArray", ()=>{
    runtest(testdata, isArray)
})

const testdata: TestData[] = [
    {
        it: 'isArray',
        valid: [
            [2], ['a']],
        invalid: ["a",1]
      }
]
