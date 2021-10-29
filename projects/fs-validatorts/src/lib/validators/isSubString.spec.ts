import { isSubString } from "./isSubString";
describe("isNotSubString", () => {

  it(`should be true`, () => {
    expect(isSubString("2", "22").value).toBeTruthy();
    expect(isSubString("foo", "fooboo").value).toBeTruthy();
  })
  it(`should be false`, () => {
    expect(isSubString("TRUE", "FALSE").value).toBeFalsy();
    expect(isSubString("3", "2").value).toBeFalsy();
  })
});