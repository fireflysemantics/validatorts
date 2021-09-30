import { isFinite } from "./isFinite";
test(`should be finite`, () => {
  expect(isFinite(4.4)).toBeTruthy();
  expect(isFinite(4)).toBeTruthy();
  expect(isFinite(-0)).toBeTruthy();
  expect(isFinite(0)).toBeTruthy();
  expect(isFinite(-1)).toBeTruthy();
  expect(isFinite(NaN)).toBeFalsy();
  expect(isFinite(Infinity)).toBeFalsy();
  expect(isFinite(-Infinity)).toBeFalsy();
});