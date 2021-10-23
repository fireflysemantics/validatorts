import { escape } from './escape'
test('escape', () => {
    expect(escape('<test').value).toEqual('&lt;test')
})