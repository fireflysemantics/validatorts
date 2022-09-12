import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isIBAN } from "./isIBAN";

it("isIBAN", () => {
    runtest(testdata, isIBAN)
})

const testdata: TestData[] = [
    {
        it: 'isIBAN',
        args: [],
        valid: [
            'SC52BAHL01031234567890123456USD',
            'LC14BOSL123456789012345678901234',
            'MT31MALT01100000000000000000123',
            'SV43ACAT00000000000000123123',
            'EG800002000156789012345180002',
            'BE71 0961 2345 6769',
            'FR76 3000 6000 0112 3456 7890 189',
            'DE91 1000 0000 0123 4567 89',
            'GR96 0810 0010 0000 0123 4567 890',
            'RO09 BCYP 0000 0012 3456 7890',
            'SA44 2000 0001 2345 6789 1234',
            'ES79 2100 0813 6101 2345 6789',
            'CH56 0483 5012 3456 7800 9',
            'GB98 MIDL 0700 9312 3456 78',
            'IL170108000000012612345',
            'IT60X0542811101000000123456',
            'JO71CBJO0000000000001234567890',
            'TR320010009999901234567890',
            'BR1500000000000010932840814P2',
            'LB92000700000000123123456123',
            'IR200170000000339545727003',
            'MZ97123412341234123412341',
          ],
          invalid: [
            'XX22YYY1234567890123',
            'FR14 2004 1010 0505 0001 3',
            'FR7630006000011234567890189@',
            'FR7630006000011234567890189😅',
            'FR763000600001123456!!🤨7890189@',
          ]
    }
]
/*
const testdata: TestData[] = [
    {
        it: 'isIBAN',
        args: [],
        valid: [
            'SC52BAHL01031234567890123456USD',
            'LC14BOSL123456789012345678901234',
            'MT31MALT01100000000000000000123',
            'SV43ACAT00000000000000123123',
            'EG800002000156789012345180002',
            'BE71 0961 2345 6769',
            'FR76 3000 6000 0112 3456 7890 189',
            'DE91 1000 0000 0123 4567 89',
            'GR96 0810 0010 0000 0123 4567 890',
            'RO09 BCYP 0000 0012 3456 7890',
            'SA44 2000 0001 2345 6789 1234',
            'ES79 2100 0813 6101 2345 6789',
            'CH56 0483 5012 3456 7800 9',
            'GB98 MIDL 0700 9312 3456 78',
            'IL170108000000012612345',
            'IT60X0542811101000000123456',
            'JO71CBJO0000000000001234567890',
            'TR320010009999901234567890',
            'BR1500000000000010932840814P2',
            'LB92000700000000123123456123',
            'IR200170000000339545727003',
            'MZ97123412341234123412341',
          ],
          invalid: 
    }
]*/