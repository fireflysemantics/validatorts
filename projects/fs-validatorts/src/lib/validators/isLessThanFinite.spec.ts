import { isLessThanFinite } from "./isLessThanFinite"

it("isLessThanFinite", ()=>{
    expect(isLessThanFinite(10,11).value).toBeTruthy()
    expect(isLessThanFinite(11,10).value).toBeFalsy()
})