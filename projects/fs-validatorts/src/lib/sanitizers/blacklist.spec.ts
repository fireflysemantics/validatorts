import { blacklist } from "./blacklist"

it('blacklist', () => {
    expect(blacklist('test', 't').value).toEqual('es')
})