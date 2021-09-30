import { isPositiveFinite } from "./isPositiveFinite";
const APPLICATION_ERROR_CODE = 'APPLICATION_ERROR_CODE'

describe("isPositiveFinite", () => {

  it(`should be positive finite`, () => {
    expect(isPositiveFinite(4)).toBeTruthy();
  });
  it(`should not be positive finite`, () => {
    expect(isPositiveFinite(-0)).toBeFalsy();
    expect(isPositiveFinite(0)).toBeFalsy();
    expect(isPositiveFinite(-5)).toBeFalsy();
  });
});

