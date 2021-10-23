import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isIn } from "./isIn";

test("isIn", () => {
    runtest(testdata, isIn)
})

const testdata: TestData[] = [
    {
        it: 'isIn',
        valid: [],
        invalid: ['foo', '']
    },
    {
        it: 'isIn',
        args: ['foobar'],
        valid: ['foo', 'bar', 'foobar', ''],
        invalid: ['foobarbaz', 'barfoo']
    },
    {
        it: 'isIn',
        args: [['foo', 'bar']],
        valid: ['foo', 'bar'],
        invalid: ['foobar', 'barfoo', '']
    },
    {
        it: 'isIn',
        args: [['1', '2', '3']],
        valid: ['1', '2', '3'],
        invalid: ['4', '']
    },
    {
        it: 'isIn',
        valid: [],
        invalid: ['foo', '']
    },
    {
        it: 'isIn',
        args: [{ foo: 1, bar: 2, foobar: 3 }],
        valid: ['foo'],//, 'bar', 'foobar'
        invalid: ['foobarbaz', 'barfoo', '']
    },
    {
        it: 'isIn',
        args: [['1', '2', '3', { foo: 'bar' }, () => 5, { toString: 'test' }]],
        valid: ['1', '2', '3', ''],
        invalid: ['4']    
    },
    {
        it: 'isIn',
        args: [{ 1: 3, 2: 0, 3: 1 }],
        valid: ['1', '2', '3'],
        invalid: ['4', ''],
    }
]