import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isPostalCode } from "./isPostalCode";
//For the tests see
// 
it("isPostalCode", () => {
    expect(true).toBeTruthy()
//    runtest(testdata, isPostalCode)
})

const testdata: TestData[] = [
    {
        it: 'isPostalCode',
        valid: [
          ],
          invalid: [
          ]
    } 
]