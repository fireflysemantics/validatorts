import { isFiniteNumber } from "./isFiniteNumber";
test(`should be finite`, () => {
  expect(isFiniteNumber(4.4)).toBeTruthy();
  expect(isFiniteNumber(4)).toBeTruthy();
  expect(isFiniteNumber(-0)).toBeTruthy();
  expect(isFiniteNumber(0)).toBeTruthy();
  expect(isFiniteNumber(-1)).toBeTruthy();
  expect(isFiniteNumber(NaN)).toBeFalsy();
  expect(isFiniteNumber(Infinity)).toBeFalsy();
  expect(isFiniteNumber(-Infinity)).toBeFalsy();
});