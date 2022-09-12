import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isLowercase } from "./isLowercase";

it("isLowercase", () => {
    runtest(testdata, isLowercase)
})

const testdata: TestData[] = [
    {
        it: 'isLowercase',
        valid: [
            'abc',
            'abc123',
            'this is lowercase.',
            'tr竪s 端ber',
          ],
          invalid: [
            'fooBar',
            '123A',
          ]
    }
]

