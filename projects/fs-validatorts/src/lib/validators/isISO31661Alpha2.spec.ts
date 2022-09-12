
import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isISO31661Alpha2 } from "./isISO31661Alpha2";

it("isISO31661Alpha2", () => {
    runtest(testdata, isISO31661Alpha2)
})

const testdata: TestData[] = [
    {
        it: 'isISO31661Alpha2',
        valid: [
            'FR',
            'fR',
            'GB',
            'PT',
            'CM',
            'JP',
            'PM',
            'ZW',
            'MM',
            'cc',
            'GG',
          ],
          invalid: [
            '',
            'FRA',
            'AA',
            'PI',
            'RP',
            'WV',
            'WL',
            'UK',
            'ZZ',
          ]
    }
]