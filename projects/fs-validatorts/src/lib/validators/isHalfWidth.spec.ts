import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isHalfWidth } from "./isHalfWidth";

it("isHalfWidth", () => {
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