import { isInRange } from "./isInRange"
import { TestData } from '../types/TestData'
import { runtest } from '../utilities/test-util'

it('equals', () => {
    runtest(testdata, isInRange)
})
const testdata: TestData[] = [
    {
        it: 'isInRange',
        args: [1, 3],
        valid: [2],
        invalid: [4],
    }]