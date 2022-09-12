import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isEAN } from "./isEAN";

it("isEAN", ()=>{
    runtest(testdata, isEAN)
})

const testdata: TestData[] = [
    {
        it: 'should validate EANs',
        args: [],
        valid: [
            '9421023610112',
            '1234567890128',
            '4012345678901',
            '9771234567003',
            '9783161484100',
            '73513537',
            '00012345600012',
            '10012345678902',
            '20012345678909',
          ],
        invalid: [
            '5901234123451',
            '079777681629',
            '0705632085948',
          ]
      }
]