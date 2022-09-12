import { TestData } from '../types/TestData'
import { runtest } from '../utilities/test-util'
import { hasUpperCaseCharacters } from './hasUpperCaseCharacters'

it('hasUppercaseCharacters', () => {
    runtest(testdata, hasUpperCaseCharacters)
})
const testdata: TestData[] = [
    {
        it: 'should test hasUppercaseCharacters',
        args: [2],
        valid: ['A2B2'],
        invalid: ['a2']
    }]