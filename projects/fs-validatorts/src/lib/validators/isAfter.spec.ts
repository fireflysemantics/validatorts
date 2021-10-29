import { TestData } from '../types/TestData'
import { runtest } from '../util/test-util'
import { isAfter } from './isAfter'

test('isAfter', () => {
    runtest(testdata, isAfter)
})
const testdata: TestData[] = [
    {
        it: 'should test contains',
        args: [new Date(0)],
        valid: [new Date(2)],
        invalid: [new Date(0), new Date(-1)]
    }]