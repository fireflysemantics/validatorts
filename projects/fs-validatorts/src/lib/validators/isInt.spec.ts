import { isInt } from "./isInt"

test("isInt", ()=>{
    expect(isInt(1).value).toBeTruthy()
    expect(isInt('1').value).toBeFalsy()
})