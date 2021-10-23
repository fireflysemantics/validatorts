import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isHalfWidth } from "./isHalfWidth";

test("isHalfWidth", () => {
    runtest(testdata, isHalfWidth)
})

const testdata: TestData[] = [
    {
        it: 'isHalfWidth',
        args: [],
        valid: [
          '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
          'l-btn_02--active',
          'abc123い',
          'ｶﾀｶﾅﾞﾬ￩',
        ],
        invalid: [
          'あいうえお',
          '００１１',
        ]
    }
]