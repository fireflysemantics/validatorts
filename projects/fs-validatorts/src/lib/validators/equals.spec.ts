import { TestData } from '../types/TestData'
import { runtest } from '../util/test-util'
import { equals } from './equals'

test('equals', () => {
    runtest(testdata, equals)
})
const testdata: TestData[] = [
    {
        it: 'should test contains',
        args: ['abc'],
        valid: ['abc'],
        invalid: ['123'],
    }]
