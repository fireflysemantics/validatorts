import { TestData } from '../types/TestData'
import { runtest } from '../util/test-util'
import { hasLowercaseCharacters } from './hasLowercaseCharacters'

test('hasLowercaseCharacters', () => {
    runtest(testdata, hasLowercaseCharacters)
})
const testdata: TestData[] = [
    {
        it: 'should test hasLowercaseCharacters',
        args: [2],
        valid: ['a2a2'],
        invalid: ['a2']
    }]