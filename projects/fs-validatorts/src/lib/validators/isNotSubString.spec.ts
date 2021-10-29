import { isNotSubString } from "./isNotSubString";
describe("isNotSubString", () => {

  it(`should be true`, () => {
    expect(isNotSubString("TRUE", "FALSE").value).toBeTruthy();
    expect(isNotSubString("3", "2").value).toBeTruthy();
  })
  it(`should be false`, () => {
    expect(isNotSubString("2", "22").value).toBeFalsy();
    expect(isNotSubString("foo", "fooboo").value).toBeFalsy();
  })
});