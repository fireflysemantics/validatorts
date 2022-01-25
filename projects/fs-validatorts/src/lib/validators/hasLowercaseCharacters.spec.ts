import { TestData } from '../types/TestData'
import { runtest } from '../util/test-util'
import { hasLowerCaseCharacters } from './hasLowerCaseCharacters'

test('hasLowercaseCharacters', () => {
    runtest(testdata, hasLowerCaseCharacters)
})
const testdata: TestData[] = [
    {
        it: 'should test hasLowercaseCharacters',
        args: [2],
        valid: ['a2a2'],
        invalid: ['a2']
    }]