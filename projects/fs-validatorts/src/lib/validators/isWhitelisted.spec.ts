import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isWhitelisted } from "./isWhitelisted";
test("isWhitelisted", () => {
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