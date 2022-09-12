import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isWhitelisted } from "./isWhitelisted";
it("isWhitelisted", () => {
    runtest(testdata, isWhitelisted)
})

const testdata: TestData[] = [
    {
        it: 'isWhitelisted',
        args: ['abcdefghijklmnopqrstuvwxyz-'],
        valid: ['foo', 'foobar', 'baz-foo'],
        invalid: ['foo bar', 'fo.bar', 'türkçe']
    }
]