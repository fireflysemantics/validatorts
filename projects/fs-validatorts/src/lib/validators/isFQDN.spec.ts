
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
            'domain.co\u00A0m',
            'domain.co\u1680m',
            'domain.co\u2006m',
            'domain.co\u2028m',
            'domain.co\u2029m',
            'domain.co\u202Fm',
            'domain.co\u205Fm',
            'domain.co\u3000m',
            'domain.com\uDC00',
            'domain.co\uEFFFm',
            'domain.co\uFDDAm',
            'domain.co\uFFF4m',
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
        valid: [],
        args: [
            { require_tld: false },
        ],
        invalid: [
            'example.0',
            '192.168.0',
            '192.168.0.9999',
        ]
    },
    {
        it: 'isFQDN',
        args: [
            { allow_numeric_tld: true, require_tld: false },
        ],
        valid: [
            'example.0',
            '192.168.0',
            '192.168.0.9999',
        ],
        invalid: []
    },
    {
        it: 'isFQDN',
        args: [
            { allow_wildcard: true },
        ],
        valid: [
            '*.example.com',
            '*.shop.example.com',
        ],
        invalid: []
    }
]
