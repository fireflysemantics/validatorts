import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isMobilePhone } from "./isMobilePhone";

test("isMobilePhone", () => {
    //For the tests see
    //https://github.com/validatorjs/validator.js/blob/master/test/validators.js
    //    runtest(testdata, isMobilePhone)
})

const testdata: TestData[] = [
    {
        it: 'isMobilePhone',
        valid: [
        ],
        invalid: [
        ]
    }
]