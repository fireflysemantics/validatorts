import { TestData } from "../types/TestData";
import { runtest } from "../utilities/test-util";
import { isSlug } from "./isSlug";
//For the tests see
// 
it("isSlug", () => {
    runtest(testdata, isSlug)
})

const testdata: TestData[] = [
    {
        it: 'isSlug',
        valid: [
            'foo',
            'foo-bar',
            'foo_bar',
            'foo-bar-foo',
            'foo-bar_foo',
            'foo-bar_foo*75-b4r-**_foo',
            'foo-bar_foo*75-b4r-**_foo-&&',
          ],
          invalid: [
            'not-----------slug',
            '@#_$@',
            '-not-slug',
            'not-slug-',
            '_not-slug',
            'not-slug_',
            'not slug',
          ]
    }
]

