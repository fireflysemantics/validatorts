import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isISO31661Alpha3 } from "./isISO31661Alpha3";

it("isISO31661Alpha3", () => {
    runtest(testdata, isISO31661Alpha3)
})

const testdata: TestData[] = [
    {
        it: 'isISO31661Alpha3',
        valid: [
          'ABW',
          'HND',
          'KHM',
          'RWA',
        ],
        invalid: [
          '',
          'FR',
          'fR',
          'GB',
          'PT',
          'CM',
          'JP',
          'PM',
          'ZW',
        ]
    }
]