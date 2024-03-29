import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isPassportNumber } from "./isPassportNumber";
/**
 * For more tests see
 * https://github.com/validatorjs/validator.js/blob/master/test/validators.js
 */
it("isPassportNumber", () => {
    runtest(testdata, isPassportNumber)
})
const testdata: TestData[] = [
    {
        it: 'isPassportNumber',
        args: ['AM'],
        valid: [
            'AF0549358',
        ],
        invalid: [
            'A1054935',
        ]
    }
]