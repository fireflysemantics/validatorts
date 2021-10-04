import { isNumberInRange } from "./isNumberInRange";

describe("isNumberInRange", () => {
  it(`should be in range`, () => {
    expect(isNumberInRange(4, 3,5)).toBeTruthy();
  });
  it(`should not be in range`, () => {
    expect(isNumberInRange(1,2,4)).toBeFalsy();
  });
});