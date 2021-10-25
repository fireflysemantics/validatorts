import { isBooleanString } from "./isBooleanString"

test('isBooleanString', () => {
    const valid =[
        'true',
        'false',
        '0',
        '1',
      ]

    valid.forEach(valid=>{
        expect(isBooleanString(valid).value).toBeTruthy()
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
        expect(isBooleanString(invalid).value).toBeFalsy()
    })
})