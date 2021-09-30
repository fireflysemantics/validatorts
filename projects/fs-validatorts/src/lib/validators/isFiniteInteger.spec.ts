import { isFiniteInteger } from "./isFiniteInteger";

test(`should be finite and integer`, () => {
  expect(isFiniteInteger(4.4)).toBeFalsy();
  expect(isFiniteInteger(4)).toBeTruthy();
  expect(isFiniteInteger(-0)).toBeTruthy();
  expect(isFiniteInteger(0)).toBeTruthy();
  expect(isFiniteInteger(-1)).toBeTruthy();
  expect(isFiniteInteger(NaN)).toBeFalsy();
  expect(isFiniteInteger(Infinity)).toBeFalsy();
  expect(isFiniteInteger(-Infinity)).toBeFalsy();
});