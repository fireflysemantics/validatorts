import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isSameInstant } from "./isSameInstant";
//For the tests see
// 
test("isSlug", () => {
    runtest(testdata, isSameInstant)
})

const testdata: TestData[] = [
    {
        it: 'isSameInstant',
        args: [new Date(0)],
        valid: [ new Date(0)
          ],
          invalid: [ new Date(1)
          ]
    }
]