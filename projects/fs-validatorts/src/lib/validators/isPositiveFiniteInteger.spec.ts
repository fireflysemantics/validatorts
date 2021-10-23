import { isPositiveFiniteInteger } from "./isPositiveFiniteInteger";

describe("isPositiveFiniteInteger", () => {
  it(`should be positive finite`, () => {
    expect(isPositiveFiniteInteger(4).value).toBeTruthy();
  });
  it(`should not be positive finite integer`, () => {
    expect(isPositiveFiniteInteger(4.4).value).toBeFalsy();
    expect(isPositiveFiniteInteger(-0).value).toBeFalsy();
    expect(isPositiveFiniteInteger(0).value).toBeFalsy();
    expect(isPositiveFiniteInteger(-5).value).toBeFalsy();
  });
});

