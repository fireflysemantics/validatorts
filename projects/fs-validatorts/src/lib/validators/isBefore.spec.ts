import { isBefore} from './isBefore'
let args = '2011-08-03'

it('isBefore', () => {
    expect(isBefore(new Date(1), new Date(2)).value).toBeTruthy()
    expect(isBefore(new Date(0), new Date(0)).value).toBeFalsy()
    expect(isBefore(new Date(1), new Date(2)).value).toBeTruthy()
    expect(isBefore(new Date(2), new Date(1)).value).toBeFalsy()
})