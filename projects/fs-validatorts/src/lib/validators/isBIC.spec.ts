import { isBIC } from "./isBIC"

it('isBIC', () => {
    const valid =[
        'SBICKEN1345',
        'SBICKEN1',
        'SBICKENY',
        'SBICKEN1YYP',
      ]

    valid.forEach(valid=>{
        expect(isBIC(valid).value).toBeTruthy()
    })

    const invalid = [
        'SBIC23NXXX',
        'S23CKENXXXX',
        'SBICKENXX',
        'SBICKENXX9',
        'SBICKEN13458',
        'SBICKEN',
      ]
    invalid.forEach(invalid=>{
        expect(isBIC(invalid).value).toBeFalsy()
    })
})