import { isFiniteNumber } from "./isFiniteNumber";
test(`should be finite`, () => {
  expect(isFiniteNumber(4.4).value).toBeTruthy();
  expect(isFiniteNumber(4).value).toBeTruthy();
  expect(isFiniteNumber(-0).value).toBeTruthy();
  expect(isFiniteNumber(0).value).toBeTruthy();
  expect(isFiniteNumber(-1).value).toBeTruthy();
  expect(isFiniteNumber(NaN).value).toBeFalsy();
  expect(isFiniteNumber(Infinity).value).toBeFalsy();
  expect(isFiniteNumber(-Infinity).value).toBeFalsy();
});