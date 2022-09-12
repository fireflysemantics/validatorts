import { TestData } from '../types/TestData'
import { runtest } from '../utilities/test-util'
import { isEqualTo } from './isEqualTo'

it('equals', () => {
    runtest(testdata, isEqualTo)
})
const testdata: TestData[] = [
    {
        it: 'should test contains',
        args: ['abc'],
        valid: ['abc'],
        invalid: ['123'],
    }]
