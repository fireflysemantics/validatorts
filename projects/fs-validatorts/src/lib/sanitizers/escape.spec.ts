import { escape } from './escape'
it('escape', () => {
    expect(escape('<test').value).toEqual('&lt;test')
})