import { isNonNegativeFinite } from "./isNonNegativeFinite";

describe("isPositiveFinite", () => {
  it(`should be non negative`, () => {
    expect(isNonNegativeFinite(4).value).toBeTruthy();
    expect(isNonNegativeFinite(0).value).toBeTruthy();
    expect(isNonNegativeFinite(-0).value).toBeTruthy();
  });
  it(`should be non negative`, () => {
    expect(isNonNegativeFinite(-5).value).toBeFalsy();
    expect(isNonNegativeFinite(NaN).value).toBeFalsy();
    expect(isNonNegativeFinite(Infinity).value).toBeFalsy();
  });
});