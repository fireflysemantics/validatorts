import { isNonNegativeFinite } from "./isNonNegativeFinite";

describe("isPositiveFinite", () => {
  it(`should be non negative`, () => {
    expect(isNonNegativeFinite(4)).toBeTruthy();
    expect(isNonNegativeFinite(0)).toBeTruthy();
    expect(isNonNegativeFinite(-0)).toBeTruthy();
  });
  it(`should be non negative`, () => {
    expect(isNonNegativeFinite(-5)).toBeFalsy();
    expect(isNonNegativeFinite(NaN)).toBeFalsy();
    expect(isNonNegativeFinite(Infinity)).toBeFalsy();
  });
});