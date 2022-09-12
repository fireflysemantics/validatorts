import { TestData } from '../types/TestData'
import { runtest } from '../utilities/test-util'
import { hasNumericCharacters } from './hasNumericCharacters'

it('hasNumericCharacters', () => {
    runtest(testdata, hasNumericCharacters)
})
const testdata: TestData[] = [
    {
        it: 'should test hasNumericCharacters',
        args: [2],
        valid: [ '22', 'a2a2'],
        invalid: ['1', 'a2']
    }]