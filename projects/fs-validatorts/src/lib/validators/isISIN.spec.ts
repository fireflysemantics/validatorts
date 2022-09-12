
import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isISIN } from "./isISIN";

it("isISIN", () => {
    runtest(testdata, isISIN)
})

const testdata: TestData[] = [
    {
        it: 'isISIN',
        valid: [
            'AU0000XVGZA3',
            'DE000BAY0017',
            'BE0003796134',
            'SG1G55870362',
            'GB0001411924',
            'DE000WCH8881',
            'PLLWBGD00016',
            'US0378331005',
          ],
          invalid: [
            'DE000BAY0018',
            'PLLWBGD00019',
            'foo',
            '5398228707871528',
          ]
    }
]