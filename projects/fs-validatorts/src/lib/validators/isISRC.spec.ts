import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isISRC } from "./isISRC";

it("isISRC", () => {
    runtest(testdata, isISRC)
})

const testdata: TestData[] = [
    {
        it: 'isISRC',
        valid: [
            'USAT29900609',
            'GBAYE6800011',
            'USRC15705223',
            'USCA29500702',
        ],
        invalid: [
            'USAT2990060',
            'SRC15705223',
            'US-CA29500702',
            'USARC15705223',
        ]
    }
]