import { isFiniteInteger } from "./isFiniteInteger";

test(`should be finite and integer`, () => {
  expect(isFiniteInteger(4.4).value).toBeFalsy();
  expect(isFiniteInteger(4).value).toBeTruthy();
  expect(isFiniteInteger(-0).value).toBeTruthy();
  expect(isFiniteInteger(0).value).toBeTruthy();
  expect(isFiniteInteger(-1).value).toBeTruthy();
  expect(isFiniteInteger(NaN).value).toBeFalsy();
  expect(isFiniteInteger(Infinity).value).toBeFalsy();
  expect(isFiniteInteger(-Infinity).value).toBeFalsy();
});