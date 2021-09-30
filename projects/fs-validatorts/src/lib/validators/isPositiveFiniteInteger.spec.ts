import { isPositiveFiniteInteger } from "./isPositiveFiniteInteger";

describe("isPositiveFiniteInteger", () => {
  it(`should be positive finite`, () => {
    expect(isPositiveFiniteInteger(4)).toBeTruthy();
  });
  it(`should not be positive finite integer`, () => {
    expect(isPositiveFiniteInteger(4.4)).toBeFalsy();
    expect(isPositiveFiniteInteger(-0)).toBeFalsy();
    expect(isPositiveFiniteInteger(0)).toBeFalsy();
    expect(isPositiveFiniteInteger(-5)).toBeFalsy();
  });
});

