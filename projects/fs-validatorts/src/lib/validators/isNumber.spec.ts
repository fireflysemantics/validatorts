import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isNumber } from "./isNumber";

it("isMD5", () => {
    runtest(testdata, isNumber)
})

const testdata: TestData[] = [
    {
        it: 'isNumber',
        valid: [
            1,
            33.33
          ],
          invalid: [
            '%&FHKJFvk',
          ]
    }
]

