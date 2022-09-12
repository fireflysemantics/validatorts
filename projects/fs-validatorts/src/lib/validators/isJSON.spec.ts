import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isJSON } from "./isJSON";

it("isJSON", () => {
    runtest(testdata, isJSON)
})

const testdata: TestData[] = [
    {
        it: 'isJSON',
        valid: [
            '{ "key": "value" }',
            '{}',
          ],
          invalid: [
            '{ key: "value" }',
            '{ \'key\': \'value\' }',
            'null',
            '1234',
            '"nope"',
          ]
    },
    {
        it: 'isJSON',
        args: [{ allow_primitives: true }],
        valid: [
          '{ "key": "value" }',
          '{}',
          'null',
          'false',
          'true',
        ],
        invalid: [
          '{ key: "value" }',
          '{ \'key\': \'value\' }',
          '{ "key": value }',
          '1234',
          '"nope"',
        ]
    }
]