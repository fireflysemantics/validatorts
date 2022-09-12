
import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isFullWidth } from "./isFullWidth";

it("isFullWidth", () => {
    runtest(testdata, isFullWidth)
})

const testdata: TestData[] = [
    {
        it: 'isFullWidth',
        args: [],
        valid: [
            'ひらがな・カタカナ、．漢字',
            '３ー０　ａ＠ｃｏｍ',
            'Ｆｶﾀｶﾅﾞﾬ',
            'Good＝Parts',
          ],
          invalid: [
            'abc',
            'abc123',
            '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
          ]
    }
]
