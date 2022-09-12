import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isDecimal } from "./isDecimal";

it("isDate", ()=>{
    runtest(testdata, isDecimal)
})

const testdata: TestData[] = [
    {
        it: 'should validate decimal numbers',
        args: [],
        valid: [
            '123',
            '00123',
            '-00123',
            '0',
            '-0',
            '+123',
            '0.01',
            '.1',
            '1.0',
            '-.25',
            '-0',
            '0.0000000000001',
          ],
        invalid: [
            '0,01',
            ',1',
            '1,0',
            '-,25',
            '0,0000000000001',
            '0٫01',
            '٫1',
            '1٫0',
            '-٫25',
            '0٫0000000000001',
            '....',
            ' ',
            '',
            '-',
            '+',
            '.',
            '0.1a',
            'a',
            '\n',
          ]
      }
]