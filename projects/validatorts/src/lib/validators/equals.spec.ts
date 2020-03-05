import { equals } from './equals'

it('should return true', () => {
    expect(equals('abc', 'abc')).toBeTruthy()
})

it('should return false', () => {
    expect(equals('Abc', '123')).toBeFalsy()
})
