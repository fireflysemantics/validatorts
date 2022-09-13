import { isURLFragmentEqual } from './isURLFragmentEqual';

let urlA = 'http://example.com/aa/bb/';
let urlD = 'http://example.com/aa/bb#fragment';
let urlE = 'http://example.com/aa/bb?a=1;b=2&c=3';

it(`should be true`, () => {
  expect(isURLFragmentEqual(urlA, '').value).toBeTruthy();
  expect(isURLFragmentEqual(urlE, '').value).toBeTruthy();
  expect(isURLFragmentEqual(urlD, 'fragment').value).toBeTruthy();
});
it(`should be false`, () => {
  expect(isURLFragmentEqual(urlA, 'cc').value).toBeFalsy();
  expect(isURLFragmentEqual(urlD, '').value).toBeFalsy();
});
