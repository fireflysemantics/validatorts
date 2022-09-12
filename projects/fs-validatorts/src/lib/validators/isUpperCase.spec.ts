import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isUppercase } from "./isUppercase";

it("isUppercase", () => {
    runtest(testdata, isUppercase)
})

const testdata: TestData[] = [
    {
        it: 'isUppercase',
        valid: [
            'ABC',
            'ABC123',
            'ALL CAPS IS FUN.',
            '   .',
          ],
          invalid: [
            'fooBar',
            '123abc',
          ]
    }
]