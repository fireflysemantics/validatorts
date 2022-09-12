import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isOctal } from "./isOctal";

it("isMD5", () => {
    runtest(testdata, isOctal)
})

const testdata: TestData[] = [
    {
        it: 'isOctal',
        valid: [
            '076543210',
            '0o01234567',
        ],
        invalid: [
            'abcdefg',
            '012345678',
            '012345670c',
            '00c12345670c',
            '',
            '..',
        ]
    }
]