import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isMultibyte } from "./isMultibyte";

it("isMultibyte", () => {
    runtest(testdata, isMultibyte)
})

const testdata: TestData[] = [
    {
        it: 'isMultibyte',
        valid: [
            'ひらがな・カタカナ、．漢字',
            'あいうえお foobar',
            'test＠example.com',
            '1234abcDEｘｙｚ',
            'ｶﾀｶﾅ',
            '中文',
        ],
        invalid: [
            'abc',
            'abc123',
            '<>@" *.',
        ]
    }
]