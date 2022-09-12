import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isSameInstant } from "./isSameInstant";
//For the tests see
// 
it("isSlug", () => {
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