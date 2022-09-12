import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isPort } from "./isPort";

it("isPort", () => {
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