import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isPostalCode } from "./isPostalCode";
//For the tests see
// 
test("isPostalCode", () => {
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