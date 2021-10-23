import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isDivisibleBy } from "./isDivisibleBy";

test("isDivisbleBy", ()=>{
    runtest(testdata, isDivisibleBy)
})

const testdata: TestData[] = [
    {
        it: 'should validate decimal numbers',
        args: [2],
        valid: [2, 4, 100, 1000],
        invalid: [
            1,
            2.5,
            101
          ]
      }
]