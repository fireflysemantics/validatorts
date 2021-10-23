import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isArray } from "./isArray";

test("isArray", ()=>{
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
