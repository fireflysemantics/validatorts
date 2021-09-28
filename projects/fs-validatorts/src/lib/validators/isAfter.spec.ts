import { isAfter } from './isAfter'
let args = '2011-08-03'

it('should return true', () => {

    let targets = ['2011-08-04', new Date(2011, 8, 10).toString(), '2015-09-17']
    targets.forEach((target) => {
        expect(isAfter(target, args)).toBeTruthy()
    })

    targets = ['2100-08-04', new Date(Date.now() + 86400000).toString()]
    targets.forEach((target) => {
        expect(isAfter(target)).toBeTruthy()
    })    
})

it('should return false', () => {

    let targets = ['2010-07-02', '2011-08-03', new Date(0).toString(), 'foo', 'invalid date']

    targets.forEach((target) => {
        expect(isAfter(target, args)).toBeFalsy()
    })

    targets = ['2010-07-02', new Date(0).toString()]
    targets.forEach((target) => {
        expect(isAfter(target)).toBeFalsy()
    })    

    targets = ['2010-07-02', new Date(0).toString()]
    targets.forEach((target) => {
        expect(isAfter(target, args)).toBeFalsy()
    })

    targets = ['invalid date', '2015-09-17']
    targets.forEach((target) => {
        expect(isAfter(target, 'invalid date')).toBeFalsy()
    })


})