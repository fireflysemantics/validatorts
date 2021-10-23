import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isUppercase } from "./isUppercase";

test("isUppercase", () => {
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