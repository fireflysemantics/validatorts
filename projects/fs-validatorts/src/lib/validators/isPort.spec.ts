import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isPort } from "./isPort";

test("isPort", () => {
    runtest(testdata, isPort)
})

const testdata: TestData[] = [
    {
        it: 'isPort',
        valid: [
            '0',
            '22',
            '80',
            '443',
            '3000',
            '8080',
            '65535',
          ],
          invalid: [
            '',
            '-1',
            '65536',
          ]
    } 
]