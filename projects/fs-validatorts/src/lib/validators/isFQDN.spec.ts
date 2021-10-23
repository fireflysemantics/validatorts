
import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isFQDN } from "./isFQDN";

test("isFQDN", () => {
    runtest(testdata, isFQDN)
})

const testdata: TestData[] = [
    {
        it: 'isFQDN',
        args: [],
        valid: [
            'domain.com',
            'dom.plato',
            'a.domain.co',
            'foo--bar.com',
            'xn--froschgrn-x9a.com',
            'rebecca.blackfriday',
            '1337.com',
        ],
        invalid: [
            'abc',
            '256.0.0.0',
            '_.com',
            '*.some.com',
            's!ome.com',
            'domain.com/',
            '/more.com',
            'domain.com�',
            'domain.com©',
            'example.0',
            '192.168.0.9999',
            '192.168.0',
        ]
    },
    {
        it: 'isFQDN',
        args: [
            { allow_trailing_dot: true },
          ],
          valid: [
            'example.com.',
          ],
          invalid: []
    },
    {
        it: 'isFQDN',
        args: [
            { require_tld: false },
        ],
        valid: [],
        invalid: [
            'example.0',
            '192.168.0',
            '192.168.0.9999',
        ]
    }
]