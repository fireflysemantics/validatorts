import { isSuperString } from "./isSuperString";
describe("isSuperString", () => {

  it(`should be true`, () => {
    expect(isSuperString("fooboo", "foo").value).toBeTruthy();
  })
  it(`should be false`, () => {
    expect(isSuperString("TRUE", "FALSE").value).toBeFalsy();
    expect(isSuperString("3", "2").value).toBeFalsy()
    expect(isSuperString("2", "22").value).toBeFalsy()
    expect(isSuperString("foo", "fooboo").value).toBeFalsy()
  })
});