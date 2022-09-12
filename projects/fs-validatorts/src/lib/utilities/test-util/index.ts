import { TestData } from "../../types/TestData"

export function runtest(testdata: TestData[], f: Function) {
    testdata.forEach(test => {
        if (test.each) {
            test.each.forEach(option => {
                test.valid.forEach(valid => {
                    expect(f(valid, option).value).toBeTruthy()
                })
                test.invalid.forEach(invalid => {
                    expect(f(invalid, option).value).toBeFalsy()
                })
            });
        }
        else if (test.args) {
            test.valid.forEach(valid => {
                expect(f(valid, ...test.args).value).toBeTruthy()
            })
            test.invalid.forEach(invalid => {
                expect(f(invalid, ...test.args).value).toBeFalsy()
            })
        }
        else {
            test.valid.forEach(valid => {
                expect(f(valid).value).toBeTruthy()
            })
            test.invalid.forEach(invalid => {
                expect(f(invalid).value).toBeFalsy()
            })
        }
    })
}

export function repeat(str: string, count: number) {
    let result = '';
    for (; count; count--) {
        result += str;
    }
    return result;
}
