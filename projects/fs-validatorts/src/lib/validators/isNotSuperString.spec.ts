import { isNotSuperString } from "./isNotSuperString";
describe("isNotSuperString", () => {

  it(`should be true`, () => {
    expect(isNotSuperString("TRUE", "FALSE").value).toBeTruthy();
    expect(isNotSuperString("3", "2").value).toBeTruthy();
    expect(isNotSuperString("2", "22").value).toBeTruthy();
    expect(isNotSuperString("foo", "fooboo").value).toBeTruthy();
  })
  it(`should be false`, () => {
    expect(isNotSuperString("fooboo", "foo").value).toBeFalsy();
  })
});