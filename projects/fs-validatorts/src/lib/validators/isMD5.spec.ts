import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isMD5 } from "./isMD5";

it("isMD5", () => {
    runtest(testdata, isMD5)
})

const testdata: TestData[] = [
    {
        it: 'isMD5',
        valid: [
            'd94f3f016ae679c3008de268209132f2',
            '751adbc511ccbe8edf23d486fa4581cd',
            '88dae00e614d8f24cfd5a8b3f8002e93',
            '0bf1c35032a71a14c2f719e5a14c1e96',
          ],
          invalid: [
            'KYT0bf1c35032a71a14c2f719e5a14c1',
            'q94375dj93458w34',
            '39485729348',
            '%&FHKJFvk',
          ]
    }
]