import { TestData } from '../types/TestData'
import { runtest } from '../utilities/test-util'
import { contains } from './contains'

it('contains', () => {
    runtest(testdata, contains)
})
const testdata: TestData[] = [
    {
        it: 'should test contains',
        args: ['foo'],
        valid: ['foo', 'foobar', 'bazfoo'],
        invalid: ['bar', 'fobar'],
    }]