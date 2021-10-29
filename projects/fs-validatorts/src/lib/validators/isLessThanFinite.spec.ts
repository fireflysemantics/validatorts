import { isLessThanFinite } from "./isLessThanFinite"

test("isLessThanFinite", ()=>{
    expect(isLessThanFinite(10,11).value).toBeTruthy()
    expect(isLessThanFinite(11,10).value).toBeFalsy()
})