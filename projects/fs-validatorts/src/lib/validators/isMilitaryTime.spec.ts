import { isMilitaryTime } from "./isMilitaryTime"

it("isMilitaryTime", ()=>{
    expect(isMilitaryTime("12:23").value).toBeTruthy()
    expect(isMilitaryTime("1:23").value).toBeFalsy()
})