import { TestData } from '../types/TestData'
import { runtest } from '../util/test-util'
import { isEqualTo } from './isEqualTo'

test('equals', () => {
    runtest(testdata, isEqualTo)
})
const testdata: TestData[] = [
    {
        it: 'should test contains',
        args: ['abc'],
        valid: ['abc'],
        invalid: ['123'],
    }]
