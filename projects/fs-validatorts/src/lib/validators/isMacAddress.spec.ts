import { TestData } from "../types/TestData";
import { runtest } from "../util/test-util";
import { isMACAddress } from "./isMACAddress";

test("isMACAddress", () => {
    runtest(testdata, isMACAddress)
})

const testdata: TestData[] = [
    {
        it: 'isMACAddress',
        valid: [
            'ab:ab:ab:ab:ab:ab',
            'FF:FF:FF:FF:FF:FF',
            '01:02:03:04:05:ab',
            '01:AB:03:04:05:06',
            'A9 C5 D4 9F EB D3',
            '01 02 03 04 05 ab',
            '01-02-03-04-05-ab',
            '0102.0304.05ab',
          ],
          invalid: [
            'abc',
            '01:02:03:04:05',
            '01:02:03:04:05:z0',
            '01:02:03:04::ab',
            '1:2:3:4:5:6',
            'AB:CD:EF:GH:01:02',
            'A9C5 D4 9F EB D3',
            '01-02 03:04 05 ab',
            '0102.03:04.05ab',
            '900f/dffs/sdea',
          ]
    },
    {
    it: 'isMACAddress',
    args: [{
        no_separators: true,
      }],
      valid: [
        'abababababab',
        'FFFFFFFFFFFF',
        '0102030405ab',
        '01AB03040506',
      ],
      invalid: [
        'abc',
        '01:02:03:04:05',
        '01:02:03:04::ab',
        '1:2:3:4:5:6',
        'AB:CD:EF:GH:01:02',
        'ab:ab:ab:ab:ab:ab',
        'FF:FF:FF:FF:FF:FF',
        '01:02:03:04:05:ab',
        '01:AB:03:04:05:06',
        '0102030405',
        '01020304ab',
        '123456',
        'ABCDEFGH0102',
      ]
}
]