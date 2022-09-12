import { TestData } from '../types/TestData'
import { runtest } from '../utilities/test-util'
import { hasLowerCaseCharacters } from './hasLowerCaseCharacters'

it('hasLowercaseCharacters', () => {
    runtest(testdata, hasLowerCaseCharacters)
})
const testdata: TestData[] = [
    {
        it: 'should test hasLowercaseCharacters',
        args: [2],
        valid: ['ss', 'a2a2'],
        invalid: ['a2']
    }]