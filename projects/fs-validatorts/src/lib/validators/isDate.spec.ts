import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isDate } from "./isDate"

test("isDate", ()=>{
    runtest(testdata, isDate)
})

const testdata: TestData[] = [
    {
        it: 'should validate dates',
        args: [],
        valid: [
            new Date(),
            new Date('2014-03-15')
          ],
        invalid: [
            '',
            '15072002',
            null,
            undefined,
            { year: 2002, month: 7, day: 15 },
            42,
            { toString() { return '[object Date]'; } }, // faking
            '2020-02-30', // invalid date
            '2019-02-29', // non-leap year
            '2020-04-31', // invalid date
            '2020/03-15', // mixed delimiter
          ]
      }
]
