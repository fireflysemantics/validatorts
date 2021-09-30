import { isNumberFinite } from "./isNumberFinite";
test(`should be finite`, () => {
  expect(isNumberFinite(4.4)).toBeTruthy();
  expect(isNumberFinite(4)).toBeTruthy();
  expect(isNumberFinite(-0)).toBeTruthy();
  expect(isNumberFinite(0)).toBeTruthy();
  expect(isNumberFinite(-1)).toBeTruthy();
  expect(isNumberFinite(NaN)).toBeFalsy();
  expect(isNumberFinite(Infinity)).toBeFalsy();
  expect(isNumberFinite(-Infinity)).toBeFalsy();
});