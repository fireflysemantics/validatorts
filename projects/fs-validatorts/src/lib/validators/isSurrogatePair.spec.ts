import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isSurrogatePair } from "./isSurrogatePair";
it("isSurrogatePair", () => {
    runtest(testdata, isSurrogatePair)
})

const testdata: TestData[] = [
    {
        it: 'isSurrogatePair',
        valid: [
            '𠮷野𠮷',
            '𩸽',
            'ABC千𥧄1-2-3',
        ],
        invalid: [
            '吉野竈',
            '鮪',
            'ABC1-2-3',
        ]
    }
]