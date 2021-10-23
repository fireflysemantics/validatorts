import { isAfter } from './isAfter'
let args = '2011-08-03'

test('isAfter', () => {
    expect(isAfter(new Date(0), new Date(0)).value).toBeFalsy()
    expect(isAfter(new Date(2), new Date(1)).value).toBeTruthy()

    let targets = ['2011-08-04', new Date(2011, 8, 10).toString(), '2015-09-17']
    targets.forEach((target) => {
        expect(isAfter(new Date(target), new Date(args)).value).toBeTruthy()
    })

    targets = ['2010-07-02', '2011-08-03', new Date(0).toString(), 'foo', 'invalid date']

    targets.forEach((target) => {
        expect(isAfter(new Date(target), new Date(args)).value).toBeFalsy()
    })

    targets = ['2010-07-02', new Date(0).toString()]
    targets.forEach((target) => {
        expect(isAfter(new Date(target), new Date(args)).value).toBeFalsy()
    })

    targets = ['invalid date', '2015-09-17']
    targets.forEach((target) => {
        expect(isAfter(new Date(target), new Date('invalid date')).value).toBeFalsy()
    })    
})