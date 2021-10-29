import { isMatch } from "./isMatch";

describe("isMatch", () => {
  it("should return true", () => {
    expect(isMatch('xyz', /xyz/).value).toBeTruthy();
    expect(isMatch('xyz333', /xyz/).value).toBeTruthy();
  });
  it("should return false", () => {
    expect(isMatch('XY', /xyz/).value).toBeFalsy();
  });
});