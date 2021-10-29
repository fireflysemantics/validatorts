import { isMilitaryTime } from "./isMilitaryTime"

test("isMilitaryTime", ()=>{
    expect(isMilitaryTime("12:23").value).toBeTruthy()
    expect(isMilitaryTime("1:23").value).toBeFalsy()
})