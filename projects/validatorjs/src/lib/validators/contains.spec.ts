import { contains } from './contains'
const args = 'foo'

it('should return true', () => {

    const targets = ['foo', 'foobar', 'bazfoo']
    targets.forEach((target) => {
        expect(contains(target, args)).toBeTruthy()
    })
})

it('should return false', () => {

    const targets = ['bar', 'fobar']

    targets.forEach((target) => {
        expect(contains(target, args)).toBeFalsy()
    })
})