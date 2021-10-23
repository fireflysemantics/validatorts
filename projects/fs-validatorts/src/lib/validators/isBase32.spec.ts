import { isBase32 } from "./isBase32"

test('isBase32', () => {
    const valid = [
      'ZG======',
      'JBSQ====',
      'JBSWY===',
      'JBSWY3A=',
      'JBSWY3DP',
      'JBSWY3DPEA======',
      'K5SWYY3PNVSSA5DPEBXG6ZA=',
      'K5SWYY3PNVSSA5DPEBXG6===',
    ]

    valid.forEach(valid=>{
        expect(isBase32(valid).value).toBeTruthy()
    })

    const invalid = [
      '12345',
      '',
      'JBSWY3DPtesting123',
      'ZG=====',
      'Z======',
      'Zm=8JBSWY3DP',
      '=m9vYg==',
      'Zm9vYm/y====',
    ]
    invalid.forEach(invalid=>{
        expect(isBase32(invalid).value).toBeFalsy()
    })
})