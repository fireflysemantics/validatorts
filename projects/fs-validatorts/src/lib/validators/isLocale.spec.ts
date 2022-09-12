import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isLocale } from "./isLocale";

it("isLocale", () => {
    runtest(testdata, isLocale)
})

const testdata: TestData[] = [
    {
        it: 'isLocale',
        valid: [
            'uz_Latn_UZ',
            'en',
            'gsw',
            'es_ES',
            'sw_KE',
            'am_ET',
            'ca_ES_VALENCIA',
            'en_US_POSIX',
        ],
        invalid: [
            'lo_POP',
            '12',
            '12_DD'
        ]
    }
]