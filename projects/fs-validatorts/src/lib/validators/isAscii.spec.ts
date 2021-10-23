import { isAscii } from "./isAscii"

test('isAscii', () => {
    const valid = [
        'foobar',
        '0987654321',
        'test@example.com',
        '1234abcDEF',
    ]

    valid.forEach(valid=>{
        expect(isAscii(valid).value).toBeTruthy()
    })

    const invalid = [
        'ｆｏｏbar',
        'ｘｙｚ０９８',
        '１２３456',
        'ｶﾀｶﾅ',
    ]
    invalid.forEach(invalid=>{
        expect(isAscii(invalid).value).toBeFalsy()
    })
})