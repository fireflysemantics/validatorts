import { TestData } from '../types/TestData'
import { runtest } from '../utilities/test-util'
import { hasSpecialCharacters } from './hasSpecialCharacters'


it('hasSpecialCharacters', () => {
    runtest(testdata, hasSpecialCharacters)
})
const testdata: TestData[] = [
    {
        it: 'should test hasSpecialCharacters',
        args: [2],
        valid: [']]a2a2', '@@a2a2', '@$a2a2', '@a2$a2', '#a2a2a2&'],
        invalid: ['a2']
    }]