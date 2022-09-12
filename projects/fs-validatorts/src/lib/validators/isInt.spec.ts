import { isInt } from "./isInt"

it("isInt", ()=>{
    expect(isInt(1).value).toBeTruthy()
    expect(isInt('1').value).toBeFalsy()
})