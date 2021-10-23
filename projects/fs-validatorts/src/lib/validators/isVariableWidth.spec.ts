import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isVariableWidth } from "./isVariableWidth";
test("isVariableWidth", () => {
    runtest(testdata, isVariableWidth)
})

const testdata: TestData[] = [
    {
        it: 'isVariableWidth',
        valid: [
            'ひらがなカタカナ漢字ABCDE',
            '３ー０123',
            'Ｆｶﾀｶﾅﾞﾬ',
            'Good＝Parts',
          ],
          invalid: [
            'abc',
            'abc123',
            '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
            'ひらがな・カタカナ、．漢字',
            '１２３４５６',
            'ｶﾀｶﾅﾞﾬ',
          ]
    }
]