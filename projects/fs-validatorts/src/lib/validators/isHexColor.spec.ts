import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isHexColor } from "./isHexColor";

test("isHexColor", () => {
    runtest(testdata, isHexColor)
})

const testdata: TestData[] = [
    {
        it: 'isHexColor',
        args: [],
        valid: [
            '#ff0000ff',
            '#ff0034',
            '#CCCCCC',
            '0f38',
            'fff',
            '#f00',
        ],
        invalid: [
            '#ff',
            'fff0a',
            '#ff12FG',
        ]
    }
]