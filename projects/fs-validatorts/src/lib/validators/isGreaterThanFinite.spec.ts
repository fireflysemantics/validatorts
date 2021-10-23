import { isGreaterThanFinite } from "./isGreaterThanFinite"

test("isGreaterThanFinite", ()=>{
    expect(isGreaterThanFinite(11,10).value).toBeTruthy()
    expect(isGreaterThanFinite(10,11).value).toBeFalsy()
})