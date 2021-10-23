import { isBoolean } from "./isBoolean"

test('isBoolean', () => {
    const valid =[
        'true',
        'false',
        '0',
        '1',
      ]

    valid.forEach(valid=>{
        expect(isBoolean(valid).value).toBeTruthy()
    })

    const invalid = [
        '1.0',
        '0.0',
        'true ',
        'False',
        'True',
        'yes',
      ]
    invalid.forEach(invalid=>{
        expect(isBoolean(invalid).value).toBeFalsy()
    })
})