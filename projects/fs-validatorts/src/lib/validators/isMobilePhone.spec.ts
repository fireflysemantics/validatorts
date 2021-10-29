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
            args: ['en-US'],
            valid: [
              '19876543210',
              '8005552222',
              '+15673628910',
              '+1(567)3628910',
              '+1(567)362-8910',
              '+1(567) 362-8910',
              '1(567)362-8910',
              '1(567)362 8910',
              '223-456-7890'
            ],
            invalid: [
              '564785',
              '0123456789',
              '1437439210',
              '+10345672645',
              '11435213543',
              '1(067)362-8910',
              '1(167)362-8910',
              '+2(267)362-8910',
              '+3365520145'
            ]
        }
]