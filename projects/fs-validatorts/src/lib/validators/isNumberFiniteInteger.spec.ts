import { isNumberFiniteInteger } from "./isNumberFiniteInteger";

test(`should be finite and integer`, () => {
  expect(isNumberFiniteInteger(4.4)).toBeFalsy();
  expect(isNumberFiniteInteger(4)).toBeTruthy();
  expect(isNumberFiniteInteger(-0)).toBeTruthy();
  expect(isNumberFiniteInteger(0)).toBeTruthy();
  expect(isNumberFiniteInteger(-1)).toBeTruthy();
  expect(isNumberFiniteInteger(NaN)).toBeFalsy();
  expect(isNumberFiniteInteger(Infinity)).toBeFalsy();
  expect(isNumberFiniteInteger(-Infinity)).toBeFalsy();
});