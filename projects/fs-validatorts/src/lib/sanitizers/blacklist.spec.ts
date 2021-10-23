import { blacklist } from "./blacklist"

test('blacklist', () => {
    expect(blacklist('test', 't').value).toEqual('es')
})